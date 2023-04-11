import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Txt } from "../components/Txt";
import * as yup from "yup";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { AxiosError } from "axios";
import { PageContainer } from "../components/PageContainer";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { userRepository } from "../../api/userRepository";
import { SimpleInputField } from "../components/fields/SimpleInputField";
import { useRecoilState } from "recoil";
import { userAtom } from "../../stores/user-atom";
import { NavigateButton } from "../components/NavigateButton";

export const LoginPage = () => {
  const [user, setUser] = useRecoilState(userAtom);

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
    background-color: #5da9e7;
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
    padding: 0.625rem 2rem;
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
    padding: 1rem 0rem;
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
    resolver: yupResolver(schema),
    mode: "onSubmit",
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit = methods.handleSubmit(async (values) => {
    try {
      setIsSubmitting(true);
      const { data: userState } = await userRepository.login(values);
      setUser(userState);
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
          <FormProvider {...methods}>
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
          <Txt containerCss={signupTextContainer}>New here?</Txt>
          <Txt containerCss={signupTextContainer}>
            Click on the button to proceed
          </Txt>
          <NavigateButton text={"Sign up"} navigateTo={"/signup"} />
        </div>
      </div>
    </PageContainer>
  );
};
