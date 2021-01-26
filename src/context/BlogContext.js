import React from "react"

const BlogContext = React.createContext()

export const BlogProvider = ({children}) => {
    const blogPost = [
        {title: "Blog post #1"},
        {title: "Blog post #2"},
    ]
    return <BlogContext.Provider>
        {children}
    </BlogContext.Provider>
}
export default BlogContext