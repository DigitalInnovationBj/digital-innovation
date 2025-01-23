import { db } from "@/config/firebase.config";
import { ArticleSchema } from "@/schema/article.schema";
import { doc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const UpdateArticle = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "PATCH") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { id, title, content, image, category, tags, slug, published, createdAt, updatedAt } = req.body;

    try {
        const parsedData = ArticleSchema.partial().parse({
            title,
            content,
            image,
            category,
            tags,
            slug,
            published,
            createdAt,
            updatedAt,
        });

        if (!id) {
            return res.status(400).json({ message: "Article ID is required" });
        }

        const docRef = doc(db, "articles", id);

        await updateDoc(docRef, parsedData);

        return res.status(200).json({ message: "Article updated successfully" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Invalid input data",
                errors: error.errors,
            });
        }

        console.error("Error updating article:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default UpdateArticle;
