import { RJSFSchema } from '@rjsf/utils'

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
    ident: {
      type: 'string',
    },
    gyldigFraOgMed: {
      type: 'string',
      default: '2025-05-20',
    },
    gyldigTilOgMed: {
      type: 'string',
      default: '2026-05-20',
    },
  },
  required: ['@event_name', 'ident', 'gyldigFraOgMed', 'gyldigTilOgMed'],
}
