import { NextApiRequest, NextApiResponse } from "next";
import { schemas } from "@/lib/schemas";

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json(schemas);
}
