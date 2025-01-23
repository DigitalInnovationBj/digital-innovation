import { ArticleSchemaType } from "@/schema/article.schema";
import { CategorySchemaType, CommentSchemaType, TagSchemaType } from "@/schema/schema";

const useBlog = () => {
    //Article
    const getArticlesTags = async (articleId: string) => {
        const response = await fetch(`/api/blog/article/getArticlesTags?articleId=${articleId}`);
        const data = await response.json();
        return data;
    }

    const getArticles = async () => {
        const response = await fetch('/api/blog/article/get');
        const data = await response.json();
        return data;
    }

    const getArticleById = async (id: string) => {
        const response = await fetch(`/api/blog/article/getOnce?id=${id}`);
        const data = await response.json();
        return data;
    }
    const createArticle = async (data: ArticleSchemaType) => {
        const response = await fetch('/api/blog/article/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return result;
    }

    const updateArticle = async (id: string, data: ArticleSchemaType) => {
        const response = await fetch(`/api/blog/article/update?id=${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return result;
    }

    const getOnceArticle = async (id: string) => {
        const response = await fetch(`/api/blog/article/getOnce?id=${id}`);
        const data = await response.json();
        return data;
    }

    const deleteArticle = async (id: string) => {
        const response = await fetch(`/api/blog/article/delete?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await response.json();
        return result;
    }

    //Comment
    const getComments = async () => {
        const response = await fetch('/api/blog/comments/get');
        const data = await response.json();
        return data;
    }

    const getCommentsByArticle = async (articleId: string) => {
        const response = await fetch(`/api/blog/comments/getByArticle?articleId=${articleId}`);
        const data = await response.json();
        return data;
    }

    const createComment = async (data: CommentSchemaType) => {
        const response = await fetch('/api/blog/comments/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return result;
    }

    //Category
    const getCategories = async () => {
        const response = await fetch('/api/blog/category/get');
        const data = await response.json();
        return data;
    }

    const deleteCategory = async (id: string) => {
        const response = await fetch(`/api/blog/category/delete?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await response.json();
        return result;
    }

    const updateCategory = async (id: string, data: CategorySchemaType) => {
        const response = await fetch(`/api/blog/category/update?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return result;
    }

    const createCategory = async (data: CategorySchemaType) => {
        const response = await fetch('/api/blog/category/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return result;
    }

    //Tag

    const getTags = async () => {
        const response = await fetch('/api/blog/tags/get');
        const data = await response.json();
        return data;
    }

    const deleteTag = async (id: string) => {
        const response = await fetch(`/api/blog/tags/delete?id=${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const result = await response.json();
        return result;
    }


    const updateTag = async (id: string, data: TagSchemaType) => {
        const response = await fetch(`/api/blog/tags/update?id=${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return result;
    }

    const createTag = async (data: TagSchemaType) => {
        const response = await fetch('/api/blog/tags/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const result = await response.json();
        return result;
    }

    return {
        getArticlesTags,
        getArticles,
        getCategories,
        getTags,
        getArticleById,
        createArticle,
        deleteArticle,
        deleteTag,
        deleteCategory,
        updateCategory,
        updateTag,
        createTag,
        createComment,
        getComments,
        getCommentsByArticle,
        getOnceArticle,
        updateArticle,
        createCategory,
    }
}

export default useBlog;