import { NextApiRequest, NextApiResponse } from "next";
import { Kafka } from "kafkajs";
import Rapid from "@/lib/rapid";
import { getConfig } from "@/lib/kafka";

if (typeof process.env["KAFKA_BROKERS"] !== undefined) {
}
const kafka = new Kafka(getConfig());
const rapid = new Rapid(kafka, process.env.KAFKA_RAPID_TOPIC!);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await rapid.publish(req.body);
  return res.json([true]);
};

export default handler;
