import { RJSFSchema } from '@rjsf/utils'
import { format } from 'path'

export const VedtakFattet: RJSFSchema = {
  title: 'Vedtak fattet',
  type: 'object',
  properties: {
    '@event_name': {
      type: 'string',
      const: 'vedtak_fattet',
      default: 'vedtak_fattet',
      readOnly: true,
    },
    behandlingId: {
      type: 'string',
      default: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    },
    ident: {
      type: 'string',
    },
    virkningsdato: {
      type: 'string',
      format: 'date',
    },
    behandletHendelse: {
      type: 'object',
      properties: {
        type: {
          type: 'string',
          default: 'Søknad',
        },
        id: {
          type: 'string',
          format: 'uuid',
          default: '123e4567-e89b-12d3-a456-426614174000',
        },
      },
    },
  },
  required: ['@event_name', 'behandlingId', 'ident', 'virkningsdato'],
}
