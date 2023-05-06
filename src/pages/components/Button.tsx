import { MouseEventHandler } from "react";
import { Txt } from "./Txt";
import { ICSSProps } from "../../types";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { themeColors } from "../../utils/color-schema";

interface IButtonProps extends ICSSProps {
  type?: any;
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  containerCss?: SerializedStyles;
  inputCss?: string;
  cancelButton?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  type,
  text,
  onClick,
  disabled,
  containerCss,
  inputCss,
  cancelButton,
}) => {
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
    border: 0.6px solid #000000;
    cursor: pointer;
    margin: 1rem 0rem;
    background-color: ${themeColors.primary};
    &:disabled {
      background-color: ${themeColors.primaryGrey};
      cursor: not-allowed;
    }
  `;

  const buttonTextStyle = css`
    color: #000000;
    flex-grow: 1;
    font-weight: 300;
    font-size: 1rem;
    justify-content: center;
  `;

  const cancelButtonStyle = css`
    background-color: #d3d3d3;
    color: #fff;
  `;

  return (
    <button
      type={type ?? "button"}
      disabled={disabled}
      css={[
        buttonContainerStyle,
        containerCss,
        cancelButton && cancelButtonStyle,
      ]}
      onClick={onClick}
    >
      <Txt css={[buttonTextStyle, inputCss]}>{text}</Txt>
    </button>
  );
};
