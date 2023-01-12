import React from "react";
import * as Icons from "../Icons";
import "./Button.scss";

type theme = "primary" | "secondary";

export interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
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
        {icon ? <span>{icon}</span> : null}
        <span>{text}</span>
        {caret ? (
          <span className="btn-icon">
            <Icons.Carret />
          </span>
        ) : null}
      </span>
    </button>
  );
}

export default Button;
