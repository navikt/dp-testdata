import { RJSFSchema } from '@rjsf/utils'

export const ArenaVedtak: RJSFSchema = {
  title: 'Arena Vedtak',
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
