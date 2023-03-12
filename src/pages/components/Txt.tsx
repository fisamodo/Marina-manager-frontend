import React from "react";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
interface ITxtProps {
  className?: string;
  containerCss?: SerializedStyles;
}

export const Txt: React.FC<ITxtProps> = (props) => {
  const txtContainerStyle = css`
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
    display: flex;
  `;

  return (
    <div
      css={[txtContainerStyle, props.containerCss]}
      className={props.className}
    >
      {props.children}
    </div>
  );
};
