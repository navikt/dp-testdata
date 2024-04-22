import * as React from 'react'
import styles from './page.module.css'
import { GetStaticProps } from 'next'
import { schemas } from '@/schemas'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { RJSFSchema } from '@rjsf/utils'
import { MeldingForm } from '@/components/melding-form'

export const getStaticProps: GetStaticProps<PageProps> = async () => ({
  props: { schemas: schemas },
})

interface PageProps {
  schemas: RJSFSchema[]
}

export default function Home({ schemas }: PageProps) {
  const [value, setValue] = React.useState(schemas[0].title)

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }
  console.log('schemas', schemas)

  return (
    <main className={styles.main}>
      <Box sx={{ width: '80%', margin: '20px auto', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              {schemas.map((schema) => (
                <Tab
                  key={schema.title}
                  label={schema.title}
                  value={schema.title}
                />
              ))}
            </TabList>
          </Box>
          {schemas.map((schema) => {
            return (
              <TabPanel key={schema.title} value={schema.title}>
                <MeldingForm schema={schema} />
              </TabPanel>
            )
          })}
        </TabContext>
      </Box>
    </main>
  )
}
