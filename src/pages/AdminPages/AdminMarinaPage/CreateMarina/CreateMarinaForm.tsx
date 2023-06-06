import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { PageContainer } from "../../../components/PageContainer";
import { NavBar } from "../../../LandingPage/NavBar";
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

interface ICreateMarinaForm {
  navigate: NavigateFunction;
  onFormSubmit(marina: IMarinaFormData): void;
}

type IMarinaFormData = Omit<IMarina, "_id">;

const schema = yup.object().shape({
  marinaName: yup.string().required("Marina name is required"),
  hasElectricPort: yup.boolean(),
  hasWaterSource: yup.boolean(),
  maxNumberOfSpeedBoats: yup.number().required().min(0),
  maxNumberOfSmallBoats: yup.number().required().min(0),
  maxNumberOfSailBoats: yup.number().required().min(0),
  maxNumberOfYachts: yup.number().required().min(0),
  maxNumberOfFerries: yup.number().required().min(0),
});

export const CreateMarinaForm: React.FC<ICreateMarinaForm> = ({
  navigate,
  onFormSubmit,
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const methods = useForm({
    defaultValues: {
      marinaName: "",
      hasElectricPort: false,
      hasWaterSource: false,
      maxNumberOfSpeedBoats: 0,
      maxNumberOfSmallBoats: 0,
      maxNumberOfSailBoats: 0,
      maxNumberOfYachts: 0,
      maxNumberOfFerries: 0,
    },
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
    padding: 0;
    @media (max-width: 725px) {
      flex-direction: column;
    }
  `;

  const formSwitchStyle = css`
    justify-content: center;
    margin: 20px 0px 0px 30px;
  `;

  const formContentContainer = css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
  `;

  const inputFieldMargins = css`
    margin: 1rem 0rem;
    align-items: flex-start;
  `;

  const formButtonsContainer = css`
    display: flex;
    flex-direction: row;
    padding: 0px;
    width: 100%;
    justify-content: flex-end;
    @media (max-width: 725px) {
      justify-content: center;
      align-self: center;
    }
  `;

  const submitButtonsPadding = css`
    margin: 0.5rem;
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
          <ContentContainer containerCss={marinaNameFormPartContainer}>
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
          <ContentContainer containerCss={formButtonsContainer}>
            <Button
              text={"Create"}
              onClick={onSubmit}
              containerCss={submitButtonsPadding}
            />
            <Button
              text={"Cancel"}
              onClick={() => navigate(-1)}
              cancelButton
              containerCss={submitButtonsPadding}
            />
          </ContentContainer>
        </FormProvider>
      </ContentContainer>
    </PageContainer>
  );
};
