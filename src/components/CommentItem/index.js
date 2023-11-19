import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {commentDetails} = props
  const {name, comment} = commentDetails
  const initial = name.splice(0, 1)
  const time = formatDistanceToNow(new Date())
  return (
    <li>
      <div>
        <h1>{initial}</h1>
        <h1>{name}</h1>
        <p>{time}</p>
      </div>
      <p>{comment}</p>
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
          />
          <button>Like</button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="delete"
        />
      </div>
    </li>
  )
}

export default CommentItem
