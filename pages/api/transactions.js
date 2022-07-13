import { connectToDatabase } from "../../lib/mongodb";
export default async (req, res) => {
  let { db } = await connectToDatabase();
  const transactions = await db.collection("transactions").find({}).limit(20).toArray();
  res.json(transactions);
};
