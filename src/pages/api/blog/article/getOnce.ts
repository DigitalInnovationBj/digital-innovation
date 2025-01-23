import { db } from "@/config/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const getOnce = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    const { id } = req.body
    if (!id) {
        return res.status(400).json({ message: "Invalid article ID" })
    }

    try {
        const docRef = doc(db, "articles", id);
        const docSnap = await getDoc(docRef);

        if (!docSnap.exists()) {
            return res.status(404).json({ message: "Article not found" });
        }

        return res.status(200).json(docSnap.data());
    } catch (error) {
        console.error("Error fetching article:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export default getOnce