import React from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface IStepper {
  currentStep: number;
  numberOfSteps: number;
  containerCss?: string;
}
export const Stepper: React.FC<IStepper> = ({
  currentStep,
  numberOfSteps,
  containerCss,
}) => {
  const stepperContainerStyle = css`
    width: 100%;
  `;
  return (
    <div css={[stepperContainerStyle, containerCss]}>
      {currentStep} {numberOfSteps}
    </div>
  );
};
