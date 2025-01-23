import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import { ArticleSchema } from "@/schema/article.schema";
import { addDoc, collection } from "firebase/firestore";
import {db} from "@/config/firebase.config";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { title, content, image, category, tags, slug, published, createdAt, updatedAt } = req.body;

    try {
        // Validation des données via le schéma
        const parsedData = ArticleSchema.parse({
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

        const docRef = await addDoc(collection(db, "articles"), parsedData);
        const articleId = docRef.id;

        return res.status(201).json({
            message: "Article created successfully",
            id: articleId,
        });
    } catch (error) {
        // Gestion des erreurs de validation ou autres
        if (error instanceof z.ZodError) {
            return res.status(400).json({
                message: "Invalid input data",
                errors: error.errors,
            });
        }
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};

export default handler;
