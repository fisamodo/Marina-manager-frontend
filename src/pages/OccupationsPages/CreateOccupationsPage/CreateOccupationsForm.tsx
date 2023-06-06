import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavigateFunction } from "react-router";
import { toast } from "react-toastify";
import { PageContainer } from "../../components/PageContainer";
import { ContentContainer } from "../../components/ContentContainer";
import { SimpleInputField } from "../../components/fields/SimpleInputField";
import { SimpleSwitchField } from "../../components/fields/SimpleSwitchField";
import { TextSectionDropdownInput } from "../../components/fields/TextSectionDropdownInput";
import { boatTypes } from "../../../utils/temp-data";
import { IMarina, IOccupations } from "../../../api-types";
import { Button } from "../../components/Button";

interface ICreateOccupationsForm {
  navigate: NavigateFunction;
  marina: IMarina;
  onFormSubmit(occupation: IOccupations): void;
}

const schema = yup.object().shape({
  registrationNumber: yup
    .string()
    .required("Registration number required")
    .min(5),
  isUsingElectricPort: yup.boolean(),
  isUsingWaterPort: yup.boolean(),
  boatType: yup.object().shape({
    label: yup.string().required(),
    value: yup.number().required(),
  }),
});

export const CreateOccupationsForm: React.FC<ICreateOccupationsForm> = ({
  navigate,
  marina,
  onFormSubmit,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = useForm({
    defaultValues: {
      registrationNumber: "",
      isUsingElectricPort: false,
      isUsingWaterPort: false,
      boatType: { value: 0, label: "This" },
    },
    resolver: yupResolver(schema) as any,
    mode: "onSubmit",
  });

  const {
    formState: { errors },
  } = methods;

  const formSwitchStyle = css`
    justify-content: center;
    margin: 20px 0px 0px 30px;
  `;

  const formContentContainer = css`
    display: flex;
    flex-direction: column;
  `;

  const inputSwitchContainerStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const inputFieldStyle = css`
    margin: 0px 0px 40px 0px;
  `;

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      setIsSubmitting(true);
      await onFormSubmit({ ...values, marinaId: marina._id });
      navigate("/occupations");
      setIsSubmitting(false);
      toast.success("Success");
    } catch (e: AxiosError | any) {
      toast.error(e.response.data.message);
      setIsSubmitting(false);
    }
  });

  if (isSubmitting) {
    return <div>Submitting...</div>;
  }

  return (
    <PageContainer>
      <ContentContainer containerCss={formContentContainer}>
        <FormProvider {...(methods as any)}>
          <SimpleInputField
            id={"registrationNumber"}
            name={"registrationNumber"}
            placeholder={"Reg. Number"}
            fieldLabel="Reg number: "
            containerCss={inputFieldStyle}
          />
          <TextSectionDropdownInput
            fieldLabel="Boat type"
            name={"boatType"}
            options={boatTypes}
          />
          <div css={inputSwitchContainerStyle}>
            {marina.hasElectricPort && (
              <SimpleSwitchField
                name={"isUsingElectricPort"}
                fieldLabel="Electric port"
                containerCss={formSwitchStyle}
              />
            )}
            {marina.hasWaterSource && (
              <SimpleSwitchField
                name={"isUsingWaterPort"}
                fieldLabel="Water source"
                containerCss={formSwitchStyle}
              />
            )}
          </div>
          <Button text={"Create"} onClick={onSubmit} />
        </FormProvider>
      </ContentContainer>
    </PageContainer>
  );
};
