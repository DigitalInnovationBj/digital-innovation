import { db } from "@/config/firebase.config";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

const GetAllArticlesTags = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== "GET") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { articleId } = req.query;

    if (!articleId) {
        return res.status(400).json({ message: "Article ID is required" });
    }

    try {
        // Étape 1 : Récupérer l'article et ses IDs de tags
        const articleRef = doc(db, "articles", articleId as string);
        const articleSnap = await getDoc(articleRef);

        if (!articleSnap.exists()) {
            return res.status(404).json({ message: "Article not found" });
        }

        const articleData = articleSnap.data();
        const tagIds = articleData?.tags || [];

        if (!Array.isArray(tagIds) || tagIds.length === 0) {
            return res.status(200).json({ message: "No tags found for this article", tags: [] });
        }

        // Étape 2 : Récupérer les documents des tags
        const tagCollectionRef = collection(db, "tags");
        const tagQuery = query(tagCollectionRef, where("__name__", "in", tagIds.slice(0, 10))); // Firestore limite les "in" à 10 éléments
        const tagSnap = await getDocs(tagQuery);

        const tags = tagSnap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        return res.status(200).json({ message: "Tags fetched successfully", tags });
    } catch (error) {
        console.error("Error fetching tags:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export default GetAllArticlesTags;
