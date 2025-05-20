import { Test } from './test'
import { innsendingFerdigstilt } from './innsending_ferdigstilt'
import { OrkestratorBehov } from './orkestrator-behov'
import { RJSFSchema } from '@rjsf/utils'
import { VedtakFattet } from './rapportering-fabrikk'

export const schemas: RJSFSchema[] = [
  Test,
  innsendingFerdigstilt,
  OrkestratorBehov,
  VedtakFattet,
]
