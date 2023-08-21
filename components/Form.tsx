import React, { ReactNode } from 'react';

import { Form as FormikForm } from 'formik';

function Form({ children }: { children: ReactNode }) {
  return (
    <div className="form-wrapper">
      <FormikForm className="test">
        {children}
      </FormikForm>
    </div>
  );
}

export default Form;
