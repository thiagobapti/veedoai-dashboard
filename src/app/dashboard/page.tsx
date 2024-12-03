"use client";

import React, { useCallback, useState, useEffect } from "react";
import Header from "../components/header";
import "./page.scss";
import PlatformBreakdown from "../components/platform-breakdown";
import Statistics from "../components/engagement-tracking";
import Content from "../components/content";
import AiInsights from "../components/ai-insights";
import Modal from "../components/modal";
import cn from "classnames";
import CountUp from "react-countup";

const states = [
  "loading video",
  "generating transcript",
  "analyzing content",
  "generating AI insights",
  "done!",
];
const block = "dashboard-page";
const Dashboard = () => {
  const [currentState, setCurrentState] = useState<string>("");
  const [log, setLog] = useState<any[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<any>();

  const newVideo = useCallback(() => {
    setSelectedVideo({ id: 0 });
  }, []);

  const add = useCallback(() => {
    setCurrentState(states[0]);
  }, []);

  useEffect(() => {
    if (!currentState) return;

    const interval = setInterval(() => {
      const currentIndex = states.indexOf(currentState);
      if (currentIndex === states.length - 1) {
        clearInterval(interval);
        return;
      }
      setLog([
        ...log,
        { id: log.length, title: currentState, message: "test" },
      ]);
      setCurrentState(states[currentIndex + 1]);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentState, log]);

  const closeVideoModal = useCallback(() => {
    setCurrentState("");
    setSelectedVideo(null);
  }, []);

  return (
    <div className={block}>
      <Header />
      <div className={`${block}__container container`}>
        {/* <button className={`${block}__button`} onClick={newVideo}>
          Add Video
        </button> */}
        <div className={`${block}__stats`}>
          <div
            className={`${block}__statistic-card ${block}__statistic-card--green`}
          >
            <div className={`${block}__statistic-card-label`}>Total Views</div>
            <div
              className={`${block}__statistic-card-value ${block}__statistic-card-value--green`}
            >
              <CountUp end={3388150} duration={2.5} />
            </div>
          </div>
          <div
            className={`${block}__statistic-card ${block}__statistic-card--pink`}
          >
            <div className={`${block}__statistic-card-label`}>
              Retention Rate
            </div>
            <div
              className={`${block}__statistic-card-value ${block}__statistic-card-value--pink`}
            >
              <CountUp end={78} duration={2.5} />%
            </div>
          </div>
          <div
            className={`${block}__statistic-card ${block}__statistic-card--yellow`}
          >
            <div className={`${block}__statistic-card-label`}>
              Subscriber Growth
            </div>
            <div
              className={`${block}__statistic-card-value ${block}__statistic-card-value--yellow`}
            >
              <CountUp end={34} duration={2.5} />%
            </div>
          </div>
          <div
            className={`${block}__statistic-card ${block}__statistic-card--blue`}
          >
            <div className={`${block}__statistic-card-label`}>
              Income Projection
            </div>
            <div
              className={`${block}__statistic-card-value ${block}__statistic-card-value--blue`}
            >
              $<CountUp end={120000} duration={2.5} />
            </div>
          </div>
        </div>
        <div className={`${block}__tiles`}>
          <PlatformBreakdown className={`${block}__tile`} />
          <AiInsights onClick={() => {}} className={`${block}__tile`} />
          <Statistics className={`${block}__tile`} />
          <Content onClick={() => {}} className={`${block}__tile`} />
        </div>
      </div>
      {selectedVideo && (
        <Modal
          expanded={!!log.length}
          footerActions={[{ label: "Close", handler: closeVideoModal }]}
          onClose={closeVideoModal}
        >
          <h1>Add Video</h1>
          <div className={`${block}__modal-content`}>
            <div>
              <input type="text" placeholder="Video URL" />
              <button onClick={add}>Add</button>
            </div>
            <div>Current status: {currentState}</div>
            <div className={`${block}__state-bar`}>
              {states.map((state) => (
                <div
                  className={cn(`${block}__state-bar-item`, {
                    [`${block}__state-bar-item--success`]:
                      states.indexOf(state) < states.indexOf(currentState) ||
                      currentState === states[states.length - 1],
                    [`${block}__state-bar-item--working`]:
                      states.indexOf(state) === states.indexOf(currentState),
                  })}
                  key={state}
                ></div>
              ))}
            </div>
            <div className={`${block}__log`}>
              {log.map((logItem: any) => (
                <div key={logItem.id} className={`${block}__log-item`}>
                  <div>{logItem.title}</div>
                  <div>{logItem.message}</div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
