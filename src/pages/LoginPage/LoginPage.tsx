import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { PageContainer } from "../components/PageContainer";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { SimpleInputField } from "../components/fields/SimpleInputField";
import { NavigateButton } from "../components/NavigateButton";
import { useCurrentUser } from "../../stores/user-atom";
import { themeColors } from "../../utils/color-schema";
import { useLoginUser } from "../../api/userServices/user-api";

export const LoginPage = () => {
  const [user, setUser] = useCurrentUser();
  const login = useLoginUser();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const pageContainerStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const signupFormContainer = css`
    width: 70%;
    height: 65%;
    display: flex;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    @media (max-width: 725px) {
      flex-direction: column;
      box-shadow: 0, 0, 0;
      border-radius: 0px;
    }
  `;

  const signinRedirectContainerStyle = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${themeColors.primary};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    @media (max-width: 725px) {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
  `;

  const signupContainerStyle = css`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  `;

  const signInButtonStyle = css`
    background-color: #fff;
    padding: 0.625rem 2rem;
    width: 50%;
  `;

  const signUpButtonStyle = css`
    width: 75%;
  `;

  const inputFieldContainerStyle = css`
    display: flex;
    justify-content: center;
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 8px 0px;
    font-size: 1rem;
    width: 100%;
  `;
  const inputFieldInputStyle = css`
    width: 80%;
  `;

  const signupTextContainer = css`
    margin: 0.65rem 0rem;
  `;

  const schema = yup.object().shape({
    email: yup.string().email().typeError("Email is required").required(),
    password: yup.string().typeError("Password is required").required(),
  });

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema) as any,
    mode: "onSubmit",
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      setIsSubmitting(true);
      const user = await login(values);
      setUser(user);
      setIsSubmitting(false);
      toast.success("Success");
      navigate("/");
    } catch (e: AxiosError | any) {
      console.error(e);
      toast.error("Error occured while logging in.");
      setIsSubmitting(false);
    }
  });
  return (
    <PageContainer containerCss={pageContainerStyle}>
      <div css={signupFormContainer}>
        <div css={signinRedirectContainerStyle}>
          <FormProvider {...(methods as any)}>
            <SimpleInputField
              id={"email"}
              name={"email"}
              placeholder={"Enter your email"}
              containerCss={inputFieldContainerStyle}
              inputCss={inputFieldInputStyle}
            />
            <SimpleInputField
              id={"password"}
              name={"password"}
              placeholder={"Enter your password"}
              containerCss={inputFieldContainerStyle}
              inputCss={inputFieldInputStyle}
              type="password"
            />
            <Button
              text={"Submit"}
              onClick={onSubmit}
              containerCss={signInButtonStyle}
            />
          </FormProvider>
        </div>
        <div css={signupContainerStyle}>
          <NavigateButton
            text={"Sign up"}
            navigateTo={"/signup"}
            containerCss={signUpButtonStyle}
          />
        </div>
      </div>
    </PageContainer>
  );
};
