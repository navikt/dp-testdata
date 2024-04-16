import { RJSFSchema } from '@rjsf/utils'

export const innsendingFerdigstilt: RJSFSchema = {
  title: 'Innsetting Ferdigstilt',
  description: 'Sendes ut fra dp-mottak når en innsending er ferdigstilt',
  type: 'object',
  properties: {
    '@event_name': {
      type: 'string',
      const: 'innsending_ferdigstilt',
      default: 'innsending_ferdigstilt',
      readOnly: true,
    },
    fødselsnummer: {
      type: 'string',
    },
    type: {
      type: 'string',
      title: 'type',
      description: 'Hva slags type innsending er det',
      enum: ['NySøknad'],
      default: 'NySøknad',
    },
    søknadsData: {
      type: 'object',
      description: 'JSON av søknaden som er arkviert',
      properties: {
        søknad_uuid: {
          type: 'string',
          format: 'uuid',
        },
      },
      required: ['søknad_uuid'],
    },
  },
}
