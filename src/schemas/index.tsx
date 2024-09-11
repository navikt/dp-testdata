import { Test } from './test'
import { innsendingFerdigstilt } from './innsending_ferdigstilt'
import { RapporteringspliktDato } from './rapporteringsplikt_dato'
import { OrkestratorBehov } from './orkestrator-behov'
import { RJSFSchema } from '@rjsf/utils'
import { RapporteringFabrikk } from './rapportering-fabrikk'

export const schemas: RJSFSchema[] = [
  Test,
  innsendingFerdigstilt,
  RapporteringspliktDato,
  OrkestratorBehov,
  RapporteringFabrikk,
]
