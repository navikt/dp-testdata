import { RJSFSchema } from '@rjsf/utils'

export const RapporteringspliktDato: RJSFSchema = {
  title: 'RapporteringspliktDato',
  type: 'object',
  properties: {
    '@event_name': {
      type: 'string',
      const: 'behov',
      default: 'behov',
      readOnly: true,
    },
    ident: {
      type: 'string',
      format: 'integer',
    },
    '@løsning': {
      type: 'object',
      title: 'Løsning',
      additionalProperties: false,
      properties: {
        Virkningsdatoer: {
          type: 'object',
          additionalProperties: false,
          properties: {
            ønsketdato: {
              title: 'Ønsker dagpenger fra',
              type: 'string',
              format: 'date',
            },
            required: ['ønsketdato'],
          },
        },
        Søknadstidspunkt: {
          type: 'string',
          format: 'date',
        },

        required: ['Søknadstidspunkt', 'Virkningsdatoer'],
      },
    },
    '@behov': {
      type: 'array',
      items: {
        type: 'string',
      },
      default: ['Søknadstidspunkt', 'Virkningsdatoer'],
      readOnly: true,
    },
    '@final': {
      type: 'boolean',
      default: 'true',
      readOnly: true,
      ui: { foo: 'bar' },
    },
  },
  required: [
    '@behov',
    '@event_name',
    '@final',
    '@løsning',
    '@opprettet',
    'Søknadstidspunkt',
    'Virkningsdatoer',
    'ident',
  ],
}
