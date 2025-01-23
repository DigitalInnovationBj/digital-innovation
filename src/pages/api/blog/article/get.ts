import { db } from "@/config/firebase.config";
import { collection, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const articlesSnapshot = await getDocs(collection(db, "articles"));
        const articlesData = articlesSnapshot.docs.map((doc) => doc.data());
        return res.status(200).json(articlesData);
    } catch (error) {
        console.error("Error fetching articles:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default handler;