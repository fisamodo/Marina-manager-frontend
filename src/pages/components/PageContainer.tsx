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
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
  `;
  return (
    <div css={[pageContainerStyle, props.containerCss]}>{props.children}</div>
  );
};
