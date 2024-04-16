import { RJSFSchema } from '@rjsf/utils'

export const OrkestratorBehov: RJSFSchema = {
  title: 'Orkestrator Behovmelding',
  type: 'object',
  properties: {
    '@event_name': {
      type: 'string',
      const: 'behov',
      default: 'behov',
      readOnly: true,
    },
    '@behov': {
      type: 'array',
      items: {
        type: 'string',
      },
      default: ['Søknadstidspunkt', 'ØnskerDagpengerFraDato'],
    },
    ident: {
      type: 'string',
    },
    søknad_id: {
      type: 'string',
    },
  },
  required: ['@event_name', '@behov', 'ident', 'søknad_id'],
}
