"use client";

/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from "react";
import Pie, { ProvidedProps, PieArcDatum } from "@visx/shape/lib/shapes/Pie";
import { scaleOrdinal } from "@visx/scale";
import { Group } from "@visx/group";
import { GradientPinkBlue, LinearGradient } from "@visx/gradient";
import letterFrequency, {
  LetterFrequency,
} from "@visx/mock-data/lib/mocks/letterFrequency";
import browserUsage, {
  BrowserUsage as Browsers,
} from "@visx/mock-data/lib/mocks/browserUsage";
import { animated, useTransition, to, SpringValue } from "@react-spring/web";

// data and types
type BrowserNames = keyof Browsers;

interface BrowserUsage {
  label: BrowserNames;
  usage: number;
}

const letters: LetterFrequency[] = letterFrequency.slice(0, 4);
const browserNames = Object.keys(browserUsage[0]).filter(
  (k) => k !== "date"
) as BrowserNames[];
const browsers: BrowserUsage[] = browserNames.map((name) => ({
  label: name,
  usage: Number(browserUsage[0][name]),
}));

// accessor functions
const usage = (d: BrowserUsage) => d.usage;
const frequency = (d: LetterFrequency) => d.frequency;

// color scales
const getBrowserColor = scaleOrdinal({
  domain: browserNames,
  range: [
    "#064E3B",
    "#065F46",
    "#047857",
    "#059669",
    "#10B981",
    "#34D399",
    "#6EE7B7",
  ],
});
const getLetterFrequencyColor = scaleOrdinal({
  domain: letters.map((l) => l.letter),
  range: ["#9A3412", "#C2410C", "#EA580C", "#F97316"],
});

const defaultMargin = { top: 20, right: 20, bottom: 20, left: 20 };

export type PieProps = {
  width: number;
  height: number;
  margin?: typeof defaultMargin;
  animate?: boolean;
};

export default function Example({
  width,
  height,
  margin = defaultMargin,
  animate = true,
}: PieProps) {
  const [selectedBrowser, setSelectedBrowser] = useState<string | null>(null);
  const [selectedAlphabetLetter, setSelectedAlphabetLetter] = useState<
    string | null
  >(null);

  if (width < 10) return null;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const radius = Math.min(innerWidth, innerHeight) / 2;
  const centerY = innerHeight / 2;
  const centerX = innerWidth / 2;
  const donutThickness = 50;

  return (
    <svg width={width} height={height}>
      {/* <GradientPinkBlue id="visx-pie-gradient" /> */}
      {/* <LinearGradient
        id="visx-pie-gradient"
        from="#351CAB"
        to="#621A61"
        rotate="-45"
      /> */}
      <rect
        rx={14}
        width={width}
        height={height}
        fill="url('#visx-pie-gradient')"
      />
      <Group top={centerY + margin.top} left={centerX + margin.left}>
        <Pie
          data={
            selectedBrowser
              ? browsers.filter(({ label }) => label === selectedBrowser)
              : browsers
          }
          pieValue={usage}
          outerRadius={radius}
          innerRadius={radius - donutThickness}
          cornerRadius={3}
          padAngle={0.005}
        >
          {(pie: ProvidedProps<BrowserUsage>) => (
            <AnimatedPie<BrowserUsage>
              {...pie}
              animate={animate}
              getKey={(arc: PieArcDatum<BrowserUsage>) => arc.data.label}
              onClickDatum={({
                data: { label },
              }: {
                data: { label: BrowserNames };
              }) =>
                animate &&
                setSelectedBrowser(
                  selectedBrowser && selectedBrowser === label
                    ? null
                    : (label as string)
                )
              }
              getColor={(arc: PieArcDatum<BrowserUsage>) =>
                getBrowserColor(arc.data.label)
              }
            />
          )}
        </Pie>
        <Pie
          data={
            selectedAlphabetLetter
              ? letters.filter(
                  ({ letter }) => letter === selectedAlphabetLetter
                )
              : letters
          }
          pieValue={frequency}
          pieSortValues={() => -1}
          outerRadius={radius - donutThickness * 1.3}
        >
          {(pie: ProvidedProps<LetterFrequency>) => (
            <AnimatedPie<LetterFrequency>
              {...pie}
              animate={animate}
              getKey={({ data: { letter } }: { data: { letter: string } }) =>
                letter
              }
              onClickDatum={({
                data: { letter },
              }: {
                data: { letter: string };
              }) =>
                animate &&
                setSelectedAlphabetLetter(
                  selectedAlphabetLetter && selectedAlphabetLetter === letter
                    ? null
                    : letter
                )
              }
              getColor={({ data: { letter } }: { data: { letter: string } }) =>
                getLetterFrequencyColor(letter)
              }
            />
          )}
        </Pie>
      </Group>
    </svg>
  );
}

// react-spring transition definitions
type AnimatedStyles = {
  startAngle: SpringValue<number>;
  endAngle: SpringValue<number>;
  opacity: SpringValue<number>;
};

const fromLeaveTransition = ({ endAngle }: PieArcDatum<any>) => ({
  // enter from 360° if end angle is > 180°
  startAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  endAngle: endAngle > Math.PI ? 2 * Math.PI : 0,
  opacity: 0,
});
const enterUpdateTransition = ({ startAngle, endAngle }: PieArcDatum<any>) => ({
  startAngle,
  endAngle,
  opacity: 1,
});

type AnimatedPieProps<Datum> = ProvidedProps<Datum> & {
  animate?: boolean;
  getKey: (d: PieArcDatum<Datum>) => string;
  getColor: (d: PieArcDatum<Datum>) => string;
  onClickDatum: (d: PieArcDatum<Datum>) => void;
  delay?: number;
};

function AnimatedPie<Datum>({
  animate,
  arcs,
  path,
  getKey,
  getColor,
  onClickDatum,
}: AnimatedPieProps<Datum>) {
  const transitions = useTransition<PieArcDatum<Datum>, AnimatedStyles>(arcs, {
    from: animate ? fromLeaveTransition : enterUpdateTransition,
    enter: enterUpdateTransition,
    update: enterUpdateTransition,
    leave: animate ? fromLeaveTransition : enterUpdateTransition,
    keys: getKey,
  });
  return transitions(
    (
      props: {
        startAngle: SpringValue<number>;
        endAngle: SpringValue<number>;
        opacity: SpringValue<number>;
      },
      arc: PieArcDatum<Datum>,
      { key }: { key: string }
    ) => {
      const [centroidX, centroidY] = path.centroid(arc);
      const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;

      return (
        <g key={key}>
          <animated.path
            d={to(
              [props.startAngle, props.endAngle],
              (startAngle: number, endAngle: number) =>
                path({
                  ...arc,
                  startAngle,
                  endAngle,
                })
            )}
            fill={getColor(arc)}
            onClick={() => onClickDatum(arc)}
            onTouchStart={() => onClickDatum(arc)}
          />
          {hasSpaceForLabel && (
            <animated.g style={{ opacity: props.opacity }}>
              <text
                fill="white"
                x={centroidX}
                y={centroidY}
                dy=".33em"
                fontSize={9}
                textAnchor="middle"
                pointerEvents="none"
              >
                {getKey(arc)}
              </text>
            </animated.g>
          )}
        </g>
      );
    }
  );
}
