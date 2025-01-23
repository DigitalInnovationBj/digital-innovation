import { db } from "@/config/firebase.config";
import { deleteDoc, doc } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const DeleteComment = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "DELETE") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { id } = req.body;
    if (!id) {
        return res.status(400).json({ message: "Invalid comment ID" });
    }

    try {
        await deleteDoc(doc(db, "comments", id));
        return res.status(200).json({ message: "Comment deleted successfully" });
    } catch (error) {
        console.error("Error deleting comment:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
export default DeleteComment;