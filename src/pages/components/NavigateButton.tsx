import { MouseEventHandler } from "react";
import { Txt } from "./Txt";
import { ICSSProps } from "../../types";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { Link } from "react-router-dom";
import { themeColors } from "../../utils/color-schema";

interface INavigateButtonProps extends ICSSProps {
  type?: any;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  navigateTo: string;
  disabled?: boolean;
  containerCss?: SerializedStyles;
  buttonContainerCss?: SerializedStyles;
  inputCss?: string;
}

export const NavigateButton: React.FC<INavigateButtonProps> = ({
  type,
  text,
  onClick,
  navigateTo,
  disabled,
  containerCss,
  buttonContainerCss,
  inputCss,
}) => {
  const navigateButtonContainer = css`
    display: flex;
    width: 100%;
    margin: 0rem 1rem;
    justify-content: center;
  `;

  const buttonContainerStyle = css`
    display: flex;
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    margin-right: 0;
    flex-direction: row;
    align-items: center;
    border-radius: 1.5rem;
    cursor: pointer;
    background-color: ${themeColors.primary};
    width: 100%;
    border: 0.6px solid #000000;
  `;

  const buttonTextStyle = css`
    color: #000000;
    flex-grow: 1;
    font-weight: 300;
    font-size: 1rem;
    justify-content: center;
  `;

  return (
    <div css={[navigateButtonContainer, containerCss]}>
      <Link to={navigateTo} css={[navigateButtonContainer, containerCss]}>
        <button
          type={type ?? "button"}
          disabled={disabled}
          css={[buttonContainerStyle, buttonContainerCss]}
          onClick={onClick}
        >
          <Txt css={[buttonTextStyle, inputCss]}>{text}</Txt>
        </button>
      </Link>
    </div>
  );
};
