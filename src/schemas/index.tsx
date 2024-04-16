import { Test } from './test'
import { innsendingFerdigstilt } from './innsending_ferdigstilt'
import { RapporteringspliktDato } from './rapporteringsplikt_dato'
import { OrkestratorBehov } from './orkestrator-behov'
import { RJSFSchema } from '@rjsf/utils'

export const schemas: RJSFSchema[] = [
  Test,
  innsendingFerdigstilt,
  RapporteringspliktDato,
  OrkestratorBehov,
]
