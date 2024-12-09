import { Post } from "@/types/post.types"
import { apiGet } from "."

const getPosts = async () => {
    const data = await apiGet<Post[]>("https://jsonplaceholder.typicode.com/posts")
    return data
}

export { getPosts }