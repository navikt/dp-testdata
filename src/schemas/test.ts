import { RJSFSchema } from '@rjsf/utils'

export const Test: RJSFSchema = {
  title: 'Testmelding',
  description: 'En ganske tom melding som bare blir publisert',
  type: 'object',
  properties: {
    '@event_name': {
      type: 'string',
      const: 'test',
      default: 'test',
      readOnly: true,
    },
    melding: {
      type: 'string',
      format: 'integer',
    },
  },
  required: ['@event_name', 'melding'],
}
