import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TextboxWithError } from "./";

export default {
  component: TextboxWithError,
  args: {
    id: "title",
    name: "title",
    defaultValue: "제목",
    maxLength: 10,
  },
  parameters: {
    a11y: {
      config: { rules: [{ id: "label", enabled: false }] },
    },
  },
} as ComponentMeta<typeof TextboxWithError>;

type Story = ComponentStoryObj<typeof TextboxWithError>;

export const Default: Story = {};

export const Error: Story = {
  args: { error: "에러가 발생했습니다" },
};
