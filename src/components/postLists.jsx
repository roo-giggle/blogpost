import Post from "./post"
import classes from './postList.module.css'

function PostLists() {
    return (
        <ul className= {classes.posts}>
            <Post author= "Roopal" body = "This is test body" />
            <Post author = "Sharma" body = "This is test body 2" />
        </ul>
    )
}
export default PostLists