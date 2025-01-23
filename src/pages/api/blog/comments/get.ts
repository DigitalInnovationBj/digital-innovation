import { db } from "@/config/firebase.config"
import { getDocs, collection } from "firebase/firestore"
import { NextApiRequest, NextApiResponse } from "next"

const GetAllComments = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" })
    }

    try {
        const commentsSnapshot = await getDocs(collection(db, "comments"))
        const commentsData = commentsSnapshot.docs.map((doc) => doc.data())
        return res.status(200).json(commentsData)
    } catch (error) {
        console.error("Error fetching comments:", error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

export default GetAllComments