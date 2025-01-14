import { useState } from "react"
import Post from "./post"
import classes from './postList.module.css'
import NewPost from "./newPost"

function PostLists() {
    const [enterBody, setEnterBody] = useState('')
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function bodyChangeHandler (event) {
        setEnterBody(event.target.value)
    }

    
    function AuthorChangeHnadler (event) {
        setEnteredAuthor(event.target.value)
    }


    return (
        <>
        <NewPost onBodyChange = {bodyChangeHandler} onAuthorChange = {AuthorChangeHnadler} />
        <ul className= {classes.posts}>
            <Post author= {enteredAuthor} body = {enterBody} />
            <Post author = "Sharma" body = "This is test body 2" />
        </ul>
        </>
    )
}
export default PostLists