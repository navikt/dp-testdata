interface JsonSchemaMetadata {
  title: string;
}

type JsonSchema = JsonSchemaMetadata & Record<string, any>;

export interface JsonSchemaFile {
  filename: string;
  content: JsonSchema;
}
