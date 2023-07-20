import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { IChangeEvent } from "@rjsf/core";

interface TestdataFormProps {
  schema: RJSFSchema;
}

const showData = async (event: IChangeEvent<any, RJSFSchema, any>) => {
  const response = await fetch("/api/publish", {
    method: "POST",
    body: JSON.stringify(event.formData),
  });

  if (response.ok) console.log(await response.json());
  if (!response.ok) console.error(await response.text());
};
export default function TestdataForm({ schema }: TestdataFormProps) {
  return (
    <Form
      schema={schema}
      validator={validator}
      onSubmit={showData}
      onError={console.error}
    />
  );
}
