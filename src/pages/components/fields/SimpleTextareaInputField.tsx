import { useController, useFormContext } from "react-hook-form";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from "@emotion/react";
interface ISimpleTextareaInputField {
  name: string;
  placeholder?: string;
  rightText?: string;
  autoFocus?: boolean;
  id?: string;
  containerCss?: SerializedStyles;
  inputCss?: string;
}

export const SimpleTextareaInputField: React.FC<ISimpleTextareaInputField> = ({
  name,
  placeholder,
  rightText,
  autoFocus,
  id,
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

  const inputFieldContainer = css`
    position: relative;
  `;

  const circleIcon = css`
    position: absolute;
    top: 0.625rem;
    right: 0.75rem;
    width: 1.25rem;
    height: 1.25rem;
  `;

  const textAreaStyle = css`
    display: block;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.825rem;
    padding-right: 0.825rem;
    margin-bottom: 0;
    color: #6b7280;
    border-radius: 0.375rem;
    border-width: 1px;
    resize: none;
    text-align: center;
    overflow: hidden;
    &:focus {
      outline: 2px solid transparent;
      outline-offset: 2px;
    }
  `;
  return (
    <div css={[inputFieldContainer, containerCss]}>
      {error && <ExclamationCircleIcon css={circleIcon} color="#EF4444" />}
      <textarea
        id={id ?? ""}
        value={field.value ?? ""}
        autoFocus={autoFocus ?? false}
        onChange={({ target: { value } }) => field.onChange(value)}
        css={[textAreaStyle, inputCss]}
        placeholder={placeholder}
        rows={1}
      />
    </div>
  );
};
