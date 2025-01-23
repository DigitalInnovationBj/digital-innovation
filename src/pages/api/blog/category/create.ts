import { db } from "@/config/firebase.config";
import { CategorySchema } from "@/schema/schema";
import { addDoc, collection } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const CreateCategory = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    const { name, createdAt, updatedAt } = req.body

    try {
        const parsedData = CategorySchema.parse({
            name,
            createdAt,
            updatedAt
        })

        const docRef = await addDoc(collection(db, "categories"), parsedData);
        const categoryId = docRef.id;

        return res.status(200).json({
            message: "Category created successfully",
            data: parsedData,
            id: categoryId
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
export default CreateCategory