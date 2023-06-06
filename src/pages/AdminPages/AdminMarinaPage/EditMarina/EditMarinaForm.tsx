import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { PageContainer } from "../../../components/PageContainer";
import { ContentContainer } from "../../../components/ContentContainer";
import { SimpleInputField } from "../../../components/fields/SimpleInputField";
import { Button } from "../../../components/Button";
import { NavigateButton } from "../../../components/NavigateButton";
import { SimpleSwitchField } from "../../../components/fields/SimpleSwitchField";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NavigateFunction } from "react-router";
import { IMarina } from "../../../../api-types";
import { toast } from "react-toastify";

interface IEditMarinaForm {
  navigate: NavigateFunction;
  onFormSubmit(marina: IMarina): void;
  marinaData: IMarina;
}

const schema = yup.object().shape({
  _id: yup.string().required(),
  marinaName: yup.string().required("Marina name is required"),
  hasElectricPort: yup.boolean(),
  hasWaterSource: yup.boolean(),
  maxNumberOfSpeedBoats: yup.number().required().min(0),
  maxNumberOfSmallBoats: yup.number().required().min(0),
  maxNumberOfSailBoats: yup.number().required().min(0),
  maxNumberOfYachts: yup.number().required().min(0),
  maxNumberOfFerries: yup.number().required().min(0),
});

export const EditMarinaForm: React.FC<IEditMarinaForm> = ({
  navigate,
  onFormSubmit,
  marinaData,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = useForm({
    defaultValues: marinaData,
    resolver: yupResolver(schema) as any,
    mode: "onSubmit",
  });

  const {
    formState: { errors },
  } = methods;

  const marinaNameFormPartContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

  const formSwitchStyle = css`
    justify-content: center;
    margin: 20px 0px 0px 30px;
  `;

  const formContentContainer = css`
    display: flex;
    flex-direction: column;
  `;

  const inputFieldMargins = css`
    margin: 1rem 0rem;
    align-items: flex-start;
  `;

  const formButtonsContainer = css`
    display: flex;
    flex-direction: column;
  `;

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      setIsSubmitting(true);
      await onFormSubmit(values);
      navigate("/admin-marina");
      setIsSubmitting(false);
      toast.success("Success");
    } catch (e: AxiosError | any) {
      console.error(e);
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
          <ContentContainer css={marinaNameFormPartContainer}>
            <SimpleInputField
              id={"marinaName"}
              name={"marinaName"}
              placeholder={"My Marina"}
              fieldLabel="Marina name: "
            />
            <SimpleSwitchField
              name={"hasElectricPort"}
              fieldLabel="Electric port"
              containerCss={formSwitchStyle}
            />
            <SimpleSwitchField
              name={"hasWaterSource"}
              fieldLabel="Water source"
              containerCss={formSwitchStyle}
            />
          </ContentContainer>
          <SimpleInputField
            id={"maxNumberOfFerries"}
            name={"maxNumberOfFerries"}
            placeholder={"Value is required"}
            type="number"
            fieldLabel="Ferry boat capacity: "
            containerCss={inputFieldMargins}
          />
          <SimpleInputField
            id={"maxNumberOfSailBoats"}
            name={"maxNumberOfSailBoats"}
            placeholder={"Value is required"}
            type="number"
            fieldLabel="Sail boat capacity: "
            containerCss={inputFieldMargins}
          />
          <SimpleInputField
            id={"maxNumberOfSmallBoats"}
            name={"maxNumberOfSmallBoats"}
            placeholder={"Value is required"}
            type="number"
            fieldLabel="Small boat capacity: "
            containerCss={inputFieldMargins}
          />
          <SimpleInputField
            id={"maxNumberOfSpeedBoats"}
            name={"maxNumberOfSpeedBoats"}
            placeholder={"Value is required"}
            type="number"
            fieldLabel="Speed boat capacity: "
            containerCss={inputFieldMargins}
          />
          <SimpleInputField
            id={"maxNumberOfYachts"}
            name={"maxNumberOfYachts"}
            placeholder={"Value is required"}
            type="number"
            fieldLabel="Yacht capacity: "
            containerCss={inputFieldMargins}
          />
          <ContentContainer css={formButtonsContainer}>
            <Button text={"Update"} onClick={onSubmit} />
            <Button text={"Cancel"} onClick={() => navigate(-1)} cancelButton />
          </ContentContainer>
        </FormProvider>
      </ContentContainer>
    </PageContainer>
  );
};
