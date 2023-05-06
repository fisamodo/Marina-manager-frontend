import React from "react";
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

const schema = yup.object().shape({
  marinaName: yup.string().typeError("Marina name is required").required(),
  hasElectricPort: yup.boolean().required(),
});

export const CreateMarinaForm = () => {
  const methods = useForm({
    defaultValues: {
      marinaName: "",
      hasElectricPort: false,
    },
    resolver: yupResolver(schema) as any,
    mode: "onSubmit",
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      console.log("Here ", values);
    } catch (e: AxiosError | any) {
      console.error(e);
    }
  });

  return (
    <PageContainer>
      <ContentContainer>
        <FormProvider {...(methods as any)}>
          <SimpleInputField
            id={"marinaName"}
            name={"marinaName"}
            placeholder={"Enter Marina name"}
          />
          <SimpleSwitchField name={"hasElectricPort"} fieldLabel="here" />
          <Button text={"Create"} onClick={onSubmit} />
        </FormProvider>
      </ContentContainer>
    </PageContainer>
  );
};
