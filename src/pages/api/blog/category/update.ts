import { db } from "@/config/firebase.config"
import { CategorySchema } from "@/schema/schema"
import { doc, updateDoc } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"

const UpdateCategory = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "PATCH") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    const { id, name, createdAt, updatedAt } = req.body

    try {
        const parsedData = CategorySchema.partial().parse({
            name,
            createdAt,
            updatedAt,
       })

        if (!id) {
            return res.status(400).json({ message: "Category ID is required" })
        }

        const docRef = doc(db, "categories", id);

        await updateDoc(docRef, parsedData);

        return res.status(200).json({ message: "Category updated successfully" })
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
export default UpdateCategory