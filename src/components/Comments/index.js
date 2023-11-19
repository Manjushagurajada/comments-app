import {v4 as uuidv4} from 'uuid'

import {Component} from 'react'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onChangeInputElement = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="comments-container">
        <div className="top-section-container">
          <div>
            <h1 className="main-heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              type="text"
              placeholder="Your Name"
              className="search-bar"
              onChange={this.onChangeInputElement}
              value={name}
            />
            <br />
            <br />
            <textarea
              rows="6"
              cols="31"
              placeholder="Your Comment"
              className="text-area"
              onChange={this.onChangeComment}
              value={comment}
            />
            <br />
            <button
              className="button"
              type="button"
              onClick={this.onClickAddButton}
            >
              Add Comment
            </button>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
            className="comments-image"
          />
        </div>
        <hr />
        <div>
          <p>Comments</p>
          <ul>
            {commentsList.map(eachItem => (
              <CommentItem commentDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
