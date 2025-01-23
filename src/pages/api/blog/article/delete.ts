import { db } from "@/config/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "DELETE") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: "Invalid article ID" });
    }

    try {
        await deleteDoc(doc(db, "articles", id));
        return res.status(200).json({ message: "Article deleted successfully" });
    } catch (error) {
        console.error("Error deleting article:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default handler;