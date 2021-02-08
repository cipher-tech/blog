import jsonserver from "../api/jsonserver";
import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {
    switch (action.type) {
        case "get_blogPosts":
            return action.payload
        case "edit_blogPost":
            return state.map(blogPost => blogPost.id === action.payload.id ? action.payload : blogPost)
        case "add_blogPost":
            return [...state, {id: Math.floor(Math.random() * 99999), 
                title: action.payload.title,
                content: action.payload.content 
            }];
        case "delete_blogPost":
            return state.filter((blogPost) => blogPost.id !== action.payload )

        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () =>{
        const response = await jsonserver.get("/blogPosts")
        dispatch({type: "get_blogPosts", payload: response.data})
    }
}
const addBlogPost =  (dispatch) => {
    return async (title, content, callback) => {
        await jsonserver.post("/blogPosts", {title, content})
        // dispatch({ type: "add_blogPost", payload: response.data })
        callback()
    }
}
const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonserver.put(`blogPosts/${id}`, {title, content})
        dispatch({ type: "edit_blogPost", payload: {id, title, content} })
        callback()
    }
}
const deleteBlogPost = (dispatch) => {
    return async (id) => {
        await jsonserver.delete(`/blogPosts/${id}`)
        dispatch({type: "delete_blogPost", payload: id})
    }
}
export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost,
    deleteBlogPost, 
    editBlogPost,
    getBlogPosts }, 
    [])