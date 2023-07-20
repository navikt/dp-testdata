import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IChangeEvent } from "@rjsf/core";

const log = (type: string) => console.log.bind(console, type);

interface TestdataFormProps {
  schema: RJSFSchema;
}

const showData = (
  a: IChangeEvent<any, RJSFSchema, any>,
  b: React.FormEvent<any>,
) => {
  console.log({ a, b });
  console.log(a.formData);
};

export default function TestdataForm({ schema }: TestdataFormProps) {
  return (
    <Form
      schema={schema}
      validator={validator}
      onSubmit={showData}
      onError={log("errors")}
    />
  );
}
