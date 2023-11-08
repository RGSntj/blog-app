"use client";

import { FormInputProps } from "@/types";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormPostProps {
  submit: SubmitHandler<FormInputProps>;
  isEditing?: boolean;
}

export function FormPost({ submit, isEditing = false }: FormPostProps) {
  const { register, handleSubmit } = useForm<FormInputProps>();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col items-center justify-center gap-5 mt-10"
    >
      <input
        type="text"
        {...(register("title"), { required: true })}
        placeholder="Post title..."
        className="input input-bordered w-full max-w-lg"
      />

      <textarea
        {...(register("content"), { required: true })}
        className="textarea textarea-bordered w-full max-w-lg"
        placeholder="Post content..."
      ></textarea>

      <select
        {...(register("tag"), { required: true })}
        className="select select-bordered w-full max-w-lg"
        defaultValue={""}
      >
        <option disabled value="">
          Select Tags
        </option>
        <option>javascript</option>
        <option>php</option>
        <option>python</option>
      </select>

      <button type="submit" className="btn btn-primary w-full max-w-lg">
        {isEditing ? "Update" : "Create"}
      </button>
    </form>
  );
}
