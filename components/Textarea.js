import React from "react";

import { Field } from "formik";
import { Textarea as UiTextarea } from "@/components/ui/textarea";

import ErrorMessage from "./ErrorMessage";

function Textarea({ name, placeholder, disabled }) {
  return (
    <div className="w-full">
      <Field
        as={UiTextarea}
        className="h-48"
        name={name}
        disabled={disabled}
        maxLength={4000}
        placeholder={placeholder}
      />
      <ErrorMessage name={name} />
    </div>
  );
}

export default Textarea;
