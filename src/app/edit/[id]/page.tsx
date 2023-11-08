"use client";

import { FormPost } from "@/components/FormPost";
import { FormInputProps } from "@/types";
import { SubmitHandler } from "react-hook-form";

export default function EditBlogPage() {
  const handleEditPost: SubmitHandler<FormInputProps> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit post</h1>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
}
