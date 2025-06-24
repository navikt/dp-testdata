import { RJSFSchema } from '@rjsf/utils'
import validator from '@rjsf/validator-ajv8'
import Form from '@rjsf/mui'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { IChangeEvent } from '@rjsf/core'
import { useState } from 'react'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

type Status = 'idle' | 'loading' | 'success' | 'error'

function ResponseStatus({ status }: { status: Status }) {
  switch (status) {
    case 'success':
      return (
        <Alert severity="success">
          <AlertTitle>Meldingen er sendt!</AlertTitle>
        </Alert>
      )
    case 'error':
      return <Alert severity="error">Noe gikk galt!</Alert>
    default:
      return null
  }
}

interface MeldingFormProps {
  schema: RJSFSchema
}

export function MeldingForm({ schema }: MeldingFormProps) {
  const [status, setStatus] = useState<Status>('idle')

  const submitHandler = async (event: IChangeEvent<any, RJSFSchema, any>) => {
    setStatus('loading')
    try {
      const response = await fetch('/api/publish', {
        method: 'POST',
        body: JSON.stringify(event.formData),
      })

      if (response.ok) {
        setStatus('success')
        return Promise.resolve()
      }
    } catch {
      setStatus('error')
      return Promise.reject()
    }
  }

  const uiSchema = {
    'ui:submitButtonOptions': {
      submitText: status === 'loading' ? 'Sender...' : 'Send melding',
    },
    behandletHendelse: {
      'ui:widget': 'hidden',
    },
  }

  return (
    <>
      <ResponseStatus status={status} />
      <Form
        schema={schema}
        validator={validator}
        onSubmit={submitHandler}
        onError={console.error}
        uiSchema={uiSchema}
      />
    </>
  )
}
