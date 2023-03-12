import React from "react";
import { Txt } from "./Txt";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface IErrorTextProps {
  className?: string;
  children?: React.ReactNode;
}

export const ErrorText: React.FC<IErrorTextProps> = (props) => {
  const errorStyle = css`
    color: red;
  `;
  return (
    <Txt {...props} css={errorStyle}>
      {props.children}
    </Txt>
  );
};
