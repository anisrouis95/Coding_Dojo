import React from 'react'

const Display = (props) => {
    const { posts } = props;
  return (
    <fieldset>
        <legend>Display.jsx</legend>
        <ul>
            {posts.map((onePost, idx)=>{
                return <li key={idx}>
                    <h3>{onePost.title}</h3>
                    <p>{onePost.body}</p>
                </li>
            })}
        </ul>
    </fieldset>
  )
}

export default Display