import { CheckIcon } from "@heroicons/react/solid";
import Select from "react-select";
import { useController, useFormContext } from "react-hook-form";
import { ErrorText } from "../ErrorText";
import React from "react";
import { Txt } from "../Txt";
import { IDropdownOption } from "../../../types";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Switch from "react-switch";

interface ISimpleSwitchField {
  name: string;
  fieldLabel: string;
  className?: string;
  styles?: any;
  containerCss?: string;
  inputCss?: string;
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
  const { value, label } = field.value;

  const textSectionDropdownInputContainer = css`
    position: relative;
    width: 100%;
  `;
  const selectValueContainer = css`
    display: flex;
    align-items: center;
  `;
  const valueLabelStyle = css`
    color: #374151;
    flex-grow: 1;
  `;
  const checkIconStyle = css`
    width: 1rem;
    height: 1rem;
  `;

  const errorMessageStyle = css`
    margin-top: 0.5rem;
  `;

  return (
    <div
      className={className}
      css={[textSectionDropdownInputContainer, containerCss]}
    >
      <Txt>{label}</Txt>
      <Switch
        css={[inputCss]}
        onChange={() => field.onChange(!field.value)}
        checked={field.value}
      />
      {error && error.message && (
        <ErrorText css={errorMessageStyle}>{error.message}</ErrorText>
      )}
    </div>
  );
};
