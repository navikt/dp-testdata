import { RJSFSchema } from '@rjsf/utils'

export const RapporteringFabrikk: RJSFSchema = {
  title: 'Rapportering Fabrikk',
  type: 'object',
  properties: {
    '@event_name': {
      type: 'string',
      const: 'behov',
      default: 'behov',
      readOnly: true,
    },
    '@behov': {
      type: 'string',
      const: 'ny_rapportering',
      default: 'ny_rapportering',
    },

    ident: {
      type: 'string',
    },
    fraOgMed: {
      type: 'string',
    },
    '@behovId': {
      type: 'string',
    },
  },
  required: ['@event_name', '@behov', 'ident', 'fraOgMed', '@behovId'],
}
