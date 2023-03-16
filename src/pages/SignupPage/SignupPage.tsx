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

export const SignupPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const pageContainerStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const signupFormContainer = css`
    width: 900px;
    height: 500px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
      0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
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
  `;

  const signupContainerStyle = css`
    flex: 2;
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
  `;
  const signUpButtonStyle = css`
    padding: 0.625rem 2rem;
  `;

  const inputFieldStyle = css`
    outline: none;
    border: none;
    border-radius: 10px;
    margin: 8px 0px;
    font-size: 1rem;
  `;

  const schema = yup.object().shape({
    firstName: yup.string().typeError("First name is required").required(),
    lastName: yup.string().typeError("Last name is required").required(),
    email: yup.string().email().typeError("Email is required").required(),
    password: yup.string().typeError("Password is required").required(),
  });

  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
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
      await userRepository.signUp(values);
      setIsSubmitting(false);
      toast.success("Success");
      navigate("/login");
    } catch (e: AxiosError | any) {
      console.error(e);
      toast.error(e.request.responseText);
      setIsSubmitting(false);
    }
  });
  return (
    <PageContainer containerCss={pageContainerStyle}>
      <div css={signupFormContainer}>
        <div css={signinRedirectContainerStyle}>
          <Txt>Welcome Back</Txt>
          <Link to="/login">
            <Button text="Sign in" containerCss={signInButtonStyle}></Button>
          </Link>
        </div>
        <div css={signupContainerStyle}>
          <FormProvider {...methods}>
            <SimpleInputField
              id={"firstName"}
              name={"firstName"}
              placeholder={"Enter your first name"}
              containerCss={inputFieldStyle}
            />
            <SimpleInputField
              id={"lastName"}
              name={"lastName"}
              placeholder={"Enter your last name"}
              containerCss={inputFieldStyle}
            />
            <SimpleInputField
              id={"email"}
              name={"email"}
              placeholder={"Enter your email"}
              containerCss={inputFieldStyle}
            />
            <SimpleInputField
              id={"password"}
              name={"password"}
              placeholder={"Enter your password"}
              containerCss={inputFieldStyle}
              type="password"
            />
            <Button
              text={"Submit"}
              onClick={onSubmit}
              containerCss={signUpButtonStyle}
            />
          </FormProvider>
        </div>
      </div>
    </PageContainer>
  );
};
