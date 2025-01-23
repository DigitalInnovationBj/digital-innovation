import { db } from "@/config/firebase.config";
import { TagSchema } from "@/schema/schema";
import { doc, updateDoc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

const updateTag = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "PATCH") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { id, name, createdAt, updatedAt } = req.body

    try {
        const parsedData = TagSchema.partial().parse({
            name,
            createdAt,
            updatedAt
        })

        const docRef = doc(db, "tags", id);

        await updateDoc(docRef, parsedData);

        return res.status(200).json({ message: "Tag updated successfully" });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(500).json({
                message: "Internal server error",
                errors: error.errors,
            });
        }
        return res.status(500).json({ message: "Internal server error" });
    }
}