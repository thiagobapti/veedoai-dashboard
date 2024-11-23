import Button, { block } from "@/app/components/button";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
};

const Template: StoryFn = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Click Me",
  className: `${block}--default`,
};
