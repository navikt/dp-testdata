import { schemas } from "@/lib/schemas";
import styles from "./page.module.css";
import TestdataForm from "@/components/testdata-form";
import { GetServerSideProps } from "next";
import type { JsonSchemaFile } from "@/lib/types/jsonSchemaFile";
import { Typography } from "@mui/material";

export const getServerSideProps: GetServerSideProps<PageProps> = async () => ({
  props: { schemas: schemas() },
});

interface PageProps {
  schemas: JsonSchemaFile[];
}

export default function Home({ schemas }: PageProps) {
  return (
    <main className={styles.main}>
      <Typography variant="h1">Lag noe testdata</Typography>
      <ul className={styles.cardGrid}>
        {schemas &&
          schemas.map((schema) => (
            <li key={schema.filename} className={styles.card}>
              <TestdataForm schema={schema.content} />
            </li>
          ))}
      </ul>
    </main>
  );
}
