import { CheckIcon } from "@heroicons/react/solid";
import Select from "react-select";
import { useController, useFormContext } from "react-hook-form";
import { ErrorText } from "../ErrorText";
import React from "react";
import { Txt } from "../Txt";
import { IDropdownOption } from "../../../types";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
interface ITextSectionDropdownInput {
  name: string;
  options: IDropdownOption[];
  placeholder?: string;
  className?: string;
  styles?: any;
  containerCss?: string;
  inputCss?: string;
}

export const TextSectionDropdownInput: React.FC<ITextSectionDropdownInput> = ({
  name,
  placeholder,
  className,
  options,
  containerCss,
  inputCss,
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
  const selectedOption = options.find((o) => o.value === value);

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
      <Select
        css={[inputCss]}
        defaultValue={value === 0 ? {} : field.value}
        value={value === 0 ? null : field.value}
        onChange={(option: any) => {
          field.onChange(option);
        }}
        placeholder={!(value === 0) ? "" : placeholder}
        options={options}
        formatOptionLabel={(o: any) => (
          <div css={selectValueContainer}>
            <Txt css={valueLabelStyle}>{o.label}</Txt>
            {o.value === value && <CheckIcon css={checkIconStyle} />}
          </div>
        )}
      />
      {error && error.message && (
        <ErrorText css={errorMessageStyle}>{error.message}</ErrorText>
      )}
    </div>
  );
};
