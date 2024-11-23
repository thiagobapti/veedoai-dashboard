import PlatformBreakdown from "@/app/components/platform-breakdown";
import Tile, { block } from "@/app/components/tile";
import { StoryFn } from "@storybook/react";

export default {
  title: "Tiles/Platform Breakdown",
  component: PlatformBreakdown,
};

const Template: StoryFn = (args: any) => <PlatformBreakdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  className: `${block}--default`,
};
