import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { Switch } from "./";

/* 코드 8-26
export default {
  component: Switch,
} as ComponentMeta<typeof Switch>;
*/

/* 코드 8-28
export default {
  component: Switch,
  parameters: {
    a11y: { disable: true },
  },
} as ComponentMeta<typeof Switch>;
*/

export default {
  component: Switch,
  parameters: {
    a11y: {
      config: { rules: [{ id: "label", enabled: false }] },
    },
  },
} as ComponentMeta<typeof Switch>;

type Story = ComponentStoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};
