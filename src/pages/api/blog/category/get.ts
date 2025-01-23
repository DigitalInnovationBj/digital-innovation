import { db } from "@/config/firebase.config";
import { getDocs, collection } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const getAllCategories = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    try {
        const categoriesSnapshot = await getDocs(collection(db, "categories"));

        const categoriesData = categoriesSnapshot.docs.map((doc) => doc.data())

        return res.status(200).json({ data: categoriesData })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" })
    }
}

export default getAllCategories