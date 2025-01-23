import { db } from "@/config/firebase.config"
import { CommentsSchema } from "@/schema/schema"
import { addDoc, collection } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"

const createComment = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    const { author_name, content, article_id, createdAt, updatedAt } = req.body

    try {
        const parsedData = CommentsSchema.parse({
            author_name,
            content,
            article_id,
            createdAt,
            updatedAt
        })

        const docRef = await addDoc(collection(db, "comments"), parsedData);
        const commentId = docRef.id;

        return res.status(201).json({
            message: "Comment created successfully",
            id: commentId
        })
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(500).json({
                message: "Internal server error",
                errors: error.errors,
            });
        }

        return res.status(500).json({ message: "Internal server error" })
    }
}

export default createComment