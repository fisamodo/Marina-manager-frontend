import { FC, PropsWithChildren } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

interface IPageContainer {
  containerCss?: any;
}

export const PageContainer: FC<PropsWithChildren<IPageContainer>> = (props) => {
  const pageContainerStyle = css`
    width: 100%;
    height: 100vh;
  `;
  return (
    <div css={[pageContainerStyle, props.containerCss]}>{props.children}</div>
  );
};
