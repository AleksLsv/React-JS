import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);
function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder={"Post message"}
                       validate={[required, maxLength10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>

        </form>
    )
}

let AddNewPostFormRedux = reduxForm({form: "Profile"})(AddNewPostForm);


function MyPosts(props) {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

 //   let newPostElement = React.createRef();

    function onAddPost(values) {
        props.addPost(values.newPostText);
    }

/*    function onPostChange() {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }*/

    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <AddNewPostFormRedux onSubmit ={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}



export default MyPosts;