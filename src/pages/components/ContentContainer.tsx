import { FC, PropsWithChildren } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IContentContainer {
  containerCss?: any;
}

export const ContentContainer: FC<PropsWithChildren<IContentContainer>> = ({
  containerCss,
  children,
}) => {
  const ContentContainerStyle = css`
    padding: 2rem;
  `;
  return <div css={[ContentContainerStyle, containerCss]}>{children}</div>;
};
