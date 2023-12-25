import React from 'react'
import { useState } from 'react'
const Display = () => {
    const [title, setTitle] = useState();
    const [body, setBody] = useState();
    //Handle form input
    const handleSubmit = (e) => {
        e.preventDefault();
        const newPost = {
            title,body
        }
    };
    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Title' onChange={(e) => { setTitle(e.target.value) }} />
                <textarea placeholder='body' onChange={(e) => { setBody(e.target.value) }}></textarea>
                <button>Add Post</button>
            </form>
        </fieldset>
    )
}

export default Display