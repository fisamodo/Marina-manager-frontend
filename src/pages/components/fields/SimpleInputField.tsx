import { useController, useFormContext } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
import { Txt } from "../Txt";
interface ISimpleInputField {
  name: string;
  type?: string;
  placeholder?: string;
  fieldLabel?: string;
  rightText?: string;
  autoFocus?: boolean;
  id?: string;
  containerCss?: SerializedStyles;
  inputCss?: SerializedStyles;
  fieldLabelStyle?: SerializedStyles;
  horizontalLabelAlignment?: boolean;
}

export const SimpleInputField: React.FC<ISimpleInputField> = ({
  name,
  type,
  placeholder,
  fieldLabel,
  autoFocus,
  id,
  containerCss,
  fieldLabelStyle,
  inputCss,
  horizontalLabelAlignment,
}) => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const inputFieldContainerHorizontal = css`
    display: flex;
    align-items: center;
  `;
  const inputFieldContainerVertial = css`
    display: flex;
    flex-direction: column;
  `;

  const circleIcon = css`
    width: 1.25rem;
    height: 1.25rem;
  `;

  const labelAndErrorAlignment = css`
    display: flex;
    align-items: center;
  `;

  const textAreaStyle = css`
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.825rem;
    padding-right: 0.825rem;
    margin-bottom: 0;
    color: #acaaaa;
    border-radius: 0.375rem;
    border-width: 1px;
    resize: none;
    text-align: center;
    overflow: hidden;
    border: 0.6px solid #000000;
    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
    ::placeholder {
      color: #acaaaa;
      font-size: 0.8rem;
      font-style: italic;
      font-weight: 600;
    }
  `;
  return (
    <div
      css={[
        horizontalLabelAlignment
          ? inputFieldContainerHorizontal
          : inputFieldContainerVertial,
        containerCss,
      ]}
    >
      <div css={labelAndErrorAlignment}>
        {error && <ExclamationCircleIcon css={circleIcon} color="#EF4444" />}
        <Txt css={[fieldLabelStyle]}>{fieldLabel}</Txt>
      </div>

      <input
        type={type ?? "text"}
        id={id ?? ""}
        value={field.value ?? ""}
        autoFocus={autoFocus ?? false}
        onChange={({ target: { value } }) => field.onChange(value)}
        css={[textAreaStyle, inputCss]}
        placeholder={placeholder}
      />
    </div>
  );
};
