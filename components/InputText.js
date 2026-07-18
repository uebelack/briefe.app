import React from "react";

import { Field } from "formik";
import { Input } from "@/components/ui/input";
import ErrorMessage from "./ErrorMessage";

function InputText({ name, placeholder, disabled = false }) {
  return (
    <div className="w-full">
      <Field as={Input} type="text" name={name} disabled={disabled} placeholder={placeholder} />
      <ErrorMessage name={name} />
    </div>
  );
}

export default InputText;
