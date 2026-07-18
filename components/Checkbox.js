import React from "react";

import { Field } from "formik";
import { Checkbox as UiCheckbox } from "@/components/ui/checkbox";
import ErrorMessage from "./ErrorMessage";

function Checkbox({ name, disabled, children }) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-2">
        <Field name={name}>
          {({ field, form }) => (
            <UiCheckbox
              id={name}
              checked={field.value}
              disabled={disabled}
              onCheckedChange={(checked) => form.setFieldValue(name, checked === true)}
            />
          )}
        </Field>
        <label htmlFor={name}>{children}</label>
      </div>
      <ErrorMessage name={name} />
    </div>
  );
}

export default Checkbox;
