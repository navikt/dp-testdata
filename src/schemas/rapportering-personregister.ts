import { RJSFSchema } from '@rjsf/utils'

export const PersonregisterSøknad: RJSFSchema = {
  title: 'Søknad',
  type: 'object',
  properties: {
    '@id': {
      type: 'string',
      default: '675eb2c2-bfba-4939-926c-cf5aac73d163',
    },
    '@event_name': {
      type: 'string',
      const: 'søknad_innsendt_varsel',
      default: 'søknad_innsendt_varsel',
      readOnly: true,
    },
    ident: {
      type: 'string',
    },
    søknadId: {
      type: 'string',
      default: '123e4567-e89b-12d3-a456-426614174000',
    },
    søknadstidspunkt: {
      type: 'string',
      default: '2024-09-01T11:00:27.899791748',
    },
  },
  required: ['@event_name', '@id', 'ident', 'søknadId', 'søknadstidspunkt'],
}

export const PersonregisterVedtak: RJSFSchema = {
  title: 'Vedtak - Arena',
  type: 'object',
  properties: {
    table: {
      type: 'string',
      const: 'SIAMO.VEDTAK',
      default: 'SIAMO.VEDTAK',
      readOnly: true,
    },
    op_ts: {
      type: 'string',
      default: '2024-09-02 09:00:00.840468',
    },

    tokens: {
      type: 'object',
      properties: {
        FODSELSNR: { type: 'string', title: 'FODSELSNR' },
      },
    },

    after: {
      type: 'object',
      properties: {
        VEDTAK_ID: { type: 'string', default: '29501880', title: 'VEDTAK_ID' },
        VEDTAKTYPEKODE: {
          type: 'string',
          const: 'O',
          default: 'O',
          title: 'VEDTAKTYPEKODE',
        },
        UTFALLKODE: {
          type: 'string',
          title: 'UTFALLKODE',
          enum: ['JA', 'NEI'],
        },
      },
    },
  },
  required: ['table', 'tokens', 'after'],
}
