import { db } from "@/config/firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const getCommentsByArticle = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    const { article_id } = req.body
    if (!article_id) {
        return res.status(400).json({ message: "Invalid article ID" })
    }
    try {
        const commentsRef = collection(db, "comments");
        const q = query(commentsRef, where("article_id", "==", article_id));
        const commentsSnapshot = await getDocs(q);
        const commentsData = commentsSnapshot.docs.map((doc) => doc.data())
        return res.status(200).json(commentsData)
    } catch (error) {
        console.error("Error fetching comments:", error)
        return res.status(500).json({ message: "Internal server error" })
    }
}
export default getCommentsByArticle