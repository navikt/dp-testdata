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
    vedtakstidspunkt: {
      type: 'string',
      format: 'date-time',
    },
    ident: {
      type: 'string',
    },

    opplysninger: {
      type: 'array',
      title: 'Opplysninger',
      minItems: 1,
      maxItems: 1,

      items: {
        type: 'object',
        title: '',
        properties: {
          gyldigFraOgMed: {
            type: 'string',
            format: 'date',
            title: 'Gyldig fra og med',
          },
          gyldigTilOgMed: {
            type: 'string',
            format: 'date',
            title: 'Gyldig til og med',
          },
        },
        required: ['gyldigFraOgMed', 'gyldigTilOgMed'],
      },
    },
  },
  required: [
    '@event_name',
    'behandlingId',
    'vedtakstidspunkt',
    'opplysninger',
    'ident',
  ],
}
