// Form.jsx

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import { defaultValues } from "@/components/defaultValues"; // Eğer bu dosya yoksa, gerekli defaultValues'ı kendiniz tanımlamalısınız.
import { generalSchema } from "@/schemas/generalSchema.client"; // client modülü içinde tanımlanmış olmalıdır

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

  const onSubmit = (data) => {
    if (!errors.email) {
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
        });
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        className="flex max-[768px]:flex-col justify-center items-start gap-[24px] max-[768px]:gap-[10px] pt-[4%]"
      >
        <div className="max-[768px]:w-full relative ">
          <input
            required
            {...register("email")}
            type="email"
            name="email"
            placeholder="Please enter your e-mail adress"
            className="border border-[#A5A8AB] rounded-[24px] px-[16px] py-[9.7px] w-[400px] text-[18px] max-[768px]:w-full max-[768px]:text-[14px] leading-normal font-ttHovesThin"
          />
          {errors.email && (
            <p className="text-[#ff0000] mx-[5px] mt-[5px] max-[768px]:text-[0.7em]">
              {errors.email.message}
            </p>
          )}
        </div>
        <button
          onClick={handleSubmit(onSubmit)}
          className="hover:text-[#BEFF6C] text-white text-center text-[20px] max-[768px]:text-[16px] transition cursor-pointer font-[500] leading-[125%] bg-[#000] rounded-[24px] px-[8px] py-[12px] w-[176px] max-[768px]:w-full font-ttHovesNormal"
        >
          Sign up
        </button>
      </form>
    </>
  );
};

export default Form;
