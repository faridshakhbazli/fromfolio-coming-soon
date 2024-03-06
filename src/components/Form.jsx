"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { generalSchema } from "@/schemas/generalSchema";
import emailjs from "@emailjs/browser";

export const defaultValues = {
  email: "",
};

const allowedDomains = [
  "gmail.com",
  "mail.ru",
  "hotmail.com",
  "yahoo.com",
  "outlook.com",
  "icloud.com",
  "yandex.com",
];

const Form = ({ setStatus }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues,
    resolver: yupResolver(generalSchema),
  });

  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = (data) => {
    if (!errors.email) {
      const enteredDomain = data.email.split("@")[1];
      if (!allowedDomains.includes(enteredDomain)) {
        setErrorMessage(
          "Please enter a valid email address from the allowed domains."
        );
        return;
      }

      emailjs
        .send(
          "service_wnj7n9j",
          "template_ha91g3o",
          {
            to_name: "Fromfolio",
            form_email: data?.email,
            to_email: "fromfolio@gmail.com",
            message: data?.email,
          },
          "navnFO2aaAW1xoYku"
        )
        .then(() => {
          setStatus(true);
          reset(defaultValues);
          setErrorMessage("");
        });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className={`flex max-[768px]:flex-col justify-center items-start gap-[24px] max-[768px]:gap-[10px] ${errorMessage && 'max-[768px]:gap-[45px]'} pt-[4%]`}
      >
        <div className="max-[768px]:w-full relative ">
          <input
            required
            {...register("email")}
            type="email"
            name="email"
            placeholder="Please enter your e-mail address"
            className="border border-[#A5A8AB] rounded-[24px] px-[16px] py-[9.7px] w-[400px] text-[18px] max-[768px]:w-full max-[768px]:text-[14px] leading-normal font-ttHovesThin"
          />
          {errorMessage && (
            <p className="text-red-500 absolute mx-1 mt-1 max-w-[768px] text-[0.7em]">
              {errorMessage}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="hover:text-[#BEFF6C] text-white text-center text-[20px] max-[768px]:text-[16px] transition cursor-pointer font-[500] leading-[125%] bg-[#000] rounded-[24px] px-[8px] py-[12px] w-[176px] max-[768px]:w-full font-ttHovesNormal"
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default Form;
