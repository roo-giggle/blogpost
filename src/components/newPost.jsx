import classes from "./newpost.module.css"

function NewPost (props) {

    return (
        <form className= {classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" required rows={3}  onChange={props.onBodyChange}/>
            </p>
            
            <label htmlFor="name"> Your name</label>
            <input type="text" id="name" required onChange={props.onAuthorChange}/>
        </form>
    )

}

export default NewPost 