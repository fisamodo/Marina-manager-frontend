import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface IHTMLDisplay {
  className?: string;
  context: string;
}

export const HTMLDisplay: React.FC<IHTMLDisplay> = ({ className, context }) => {
  const htmlDisplayStyle = css`
    font-size: 1rem;
    line-height: 1.25rem;
    font-weight: 400;
  `;
  return (
    <div
      css={[htmlDisplayStyle]}
      className={className}
      dangerouslySetInnerHTML={{ __html: context }}
    ></div>
  );
};
