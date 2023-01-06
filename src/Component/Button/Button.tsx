import React from "react";
import { Icon } from "@iconify/react";
import "./Button.scss";

type theme = "primary" | "secondary";

export interface ButtonProps {
  text: string;
  icon?: string;
  disabled?: boolean;
  theme?: theme;
  caret?: boolean;
  className?: string;
}

export function Button({
  text = "Button",
  className = "",
  icon,
  disabled = false,
  theme = "primary",
  caret = false,
}: ButtonProps) {
  return (
    <button className={[`btn btn-${theme}`, className].join(" ")} disabled={disabled}>
      <span>
        {icon ? (
          <span>
            <Icon icon={icon} />
          </span>
        ) : null}
        <span>{text}</span>
        {caret ? (
          <span className="btn-icon">
            <Icon icon="ph:caret-right-bold" />
          </span>
        ) : null}
      </span>
    </button>
  );
}

export default Button;
