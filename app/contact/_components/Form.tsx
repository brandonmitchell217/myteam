import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/ui/Button";
import { twMerge } from "tailwind-merge";

const required_message = "This field is required";

const schema = yup.object().shape({
  name: yup.string().required(required_message),
  email: yup
    .string()
    .email("Please use a valid email address")
    .required(required_message),
  company_name: yup.string().required(required_message),
  title: yup.string().required(required_message),
  message: yup.string().required(required_message),
});

export default function Form() {
  const {
    register,
    getFieldState,
    handleSubmit,
    formState: { errors, isDirty, dirtyFields, touchedFields, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data: any) => {
    alert(JSON.stringify(data));
  };

  const inputStyles =
    "w-full bg-transparent font-semibold text-[18px] border-b border-white py-4 pl-2 outline-0";

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <div>
        <input
          {...register("name")}
          type="text"
          name="name"
          placeholder="Name"
          className={`${twMerge(
            inputStyles,
            errors.name && "field-error-color"
          )} ${getFieldState("name").isDirty && "active-field"}`}
        />
        <span className="field-error-text">{errors.name?.message}</span>
      </div>
      <div>
        <input
          {...register("email")}
          type="text"
          name="email"
          placeholder="Email Address"
          className={`${twMerge(
            inputStyles,
            errors.email && "field-error-color"
          )} ${getFieldState("email").isDirty && "active-field"}`}
        />
        <span className="field-error-text">{errors.email?.message}</span>
      </div>
      <div>
        <input
          {...register("company_name")}
          type="text"
          name="company_name"
          placeholder="Company Name"
          className={`  ${twMerge(
            inputStyles,
            errors.company_name && "field-error-color"
          )} ${getFieldState("company_name").isDirty && "active-field"}`}
        />
        <span className="field-error-text">{errors.company_name?.message}</span>
      </div>
      <div>
        <input
          {...register("title")}
          type="text"
          name="title"
          placeholder="Title"
          className={`
            ${twMerge(inputStyles, errors.title && "field-error-color")} ${
            getFieldState("title").isDirty && "active-field"
          }
          `}
        />
        <span className="field-error-text">{errors.title?.message}</span>
      </div>
      <div>
        <textarea
          {...register("message")}
          name="message"
          placeholder="Message"
          className={`
            ${twMerge(inputStyles, errors.message && "field-error-color")} ${
            getFieldState("message").isDirty && "active-field"
          }
          `}
        />
        <span className="field-error-text">{errors.message?.message}</span>
      </div>

      <Button type={"submit"}>Submit</Button>
    </form>
  );
}
