import { Button, ButtonProps } from "../Component/Button/Button";
import "../Component/Button/Button.scss";

export default {
  title: "Button",
  component: Button,
};

export const ButtonWithControls = (args: ButtonProps) => <Button {...args} />;

ButtonWithControls.args = {
  text: "Button",
  theme: "primary",
  disabled: false,
  caret: false,
  icon: "bi:bookmark",
};

export const Primary = () => <Button text="Button" />;

export const PrimaryWithIcon = () => <Button text="Hello World!" icon="bi:bookmark" />;

export const PrimaryWithCaret = () => <Button text="Hello World!" caret />;
export const PrimaryDisabled = () => <Button text="Hello World!" disabled />;

export const Secondary = () => <Button text="Hello World!" theme="secondary" />;
export const SecondaryWithIcon = () => <Button text="Hello World!" theme="secondary" icon="bi:bookmark" />;

export const SecondaryWithCaret = () => <Button text="Hello World!" theme="secondary" caret />;

export const SecondaryDisabled = () => <Button text="Hello World!" theme="secondary" disabled />;
