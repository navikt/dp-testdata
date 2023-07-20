import { NextApiRequest, NextApiResponse } from "next";

export default function isHealthy(req: NextApiRequest, res: NextApiResponse) {
  return res.json({ isalive: true });
}
