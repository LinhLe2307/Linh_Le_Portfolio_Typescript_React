import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useEffect } from "react"

interface BlogItemProps {
    description: string
}

const getAllBlogs = async () => {
    let response 
    try {
        response = await axios.get("http://localhost:5001/blogs")
        return response.data
    } catch(err) {
        console.error(err)
    }
}
const BlogItem = () => {
    const {data } = useQuery({
        queryKey: ["blogs"],
        queryFn: getAllBlogs
    })

    useEffect(() => {
        console.log(data)
    }, [data])
  return (
    <div>
        <ul>
            {data && data.map((blog: BlogItemProps) => <li>{blog.description}</li>)}
        </ul>
    </div>
  )
}

export default BlogItem