import React from 'react'

const CommentsPage = () => {
  
  const [comments, setComments] = React.useState([])
  const [comment, setComment] = React.useState('')
  
  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }

  const submitCommnet = async () => {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({comment}),
      headers: {
        'Content-type': 'application/json'
      }
    })

    const data = await response.json()
    console.log(data);
  }

  const deleteComment = async (commentId) => {
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE'
    })

    const data = await response.json()
    console.log(data);
    fetchComments()

  }

  return (
    <div>

      <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
      <button onClick={submitCommnet}>Submit commnet</button>
      <button onClick={fetchComments}>Load commnets</button>
      {
        comments.map(c => {
          return <div key={c.id}>
            {c.id} {c.text}
            <button onClick={() => deleteComment(c.id)}>Delete</button>
          </div>
        })
      }
    </div>
  )
}

export default CommentsPage