import { CompressionCodecs, CompressionTypes, KafkaConfig } from "kafkajs";
import os from "os";
import { v4 as uuidv4 } from "uuid";

// @ts-ignore
import SnappyCodec from "kafkajs-snappy";
CompressionCodecs[CompressionTypes.Snappy] = SnappyCodec;

export function generateInstanceId(): string {
  if (process.env["NAIS_APP_NAME"]) return os.hostname();
  return uuidv4();
}

export function getConfig() {
  const defaults = {
    clientId: generateInstanceId(),
  };
  if (process.env.NODE_ENV === "development") {
    return {
      ...defaults,
      brokers: ["localhost:9092"],
    };
  }
  if (typeof process.env.KAFKA_BROKERS !== "undefined") {
    return {
      ...defaults,
      ...gcpConfig(),
    };
  }

  throw new Error("Missing configuration for this environment");
}

function gcpConfig(): KafkaConfig {
  return {
    brokers: process.env.KAFKA_BROKERS!.split(","),
    clientId: process.env.KAFKA_CONSUMER_GROUP_ID,
    ssl: {
      ca: [process.env.KAFKA_CA!],
      cert: process.env.KAFKA_CERTIFICATE!,
      key: process.env.KAFKA_PRIVATE_KEY!,
    },
  };
}
