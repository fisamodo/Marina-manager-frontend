import { CheckIcon } from "@heroicons/react/solid";
import Select from "react-select";
import { useController, useFormContext } from "react-hook-form";
import { ErrorText } from "../ErrorText";
import React from "react";
import { Txt } from "../Txt";
import { IDropdownOption } from "../../../types";
/** @jsxImportSource @emotion/react */
import { SerializedStyles, css } from "@emotion/react";
import Switch from "react-switch";

interface ISimpleSwitchField {
  name: string;
  fieldLabel: string;
  className?: string;
  styles?: any;
  containerCss?: SerializedStyles;
  inputCss?: SerializedStyles;
}

export const SimpleSwitchField: React.FC<ISimpleSwitchField> = ({
  name,
  className,
  containerCss,
  inputCss,
  fieldLabel,
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const switchContainer = css`
    display: flex;
    align-items: center;
  `;

  const switchStyle = css`
    margin: 1rem 0rem;
    padding: 0rem 2rem;
  `;

  const errorMessageStyle = css`
    margin-top: 0.5rem;
  `;

  return (
    <div className={className} css={[switchContainer, containerCss]}>
      <Txt>{fieldLabel}</Txt>
      <Switch
        css={[switchStyle, inputCss]}
        onChange={() => field.onChange(!field.value)}
        checked={field.value}
      />
      {error && error.message && (
        <ErrorText css={errorMessageStyle}>{error.message}</ErrorText>
      )}
    </div>
  );
};
