import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

// eslint-disable-next-line
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
  state = {nameInput: '', commentInput: '', commentsContainer: []}

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeNote = event => {
    this.setState({commentInput: event.target.value})
  }

  onSubmitFeedback = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const newContainer = {
      id: uuidv4(),
      date: new Date(),
      name: nameInput,
      comment: commentInput,
    }
    this.setState(prevState => ({
      commentsContainer: [...prevState.commentsContainer, newContainer],
      nameInput: '',
      commentInput: '',
    }))
  }

  onPushingComment = () => {
    const {commentsContainer} = this.state
    return commentsContainer.map(eachComment => (
      <CommentItem key={eachComment.id} containerList={eachComment} />
    ))
  }

  render() {
    const {nameInput, commentInput} = this.state
    return (
      <div className="background">
        <h1 className="heading">comments</h1>
        <p className="para-1">say something about 4.0 technologies</p>
        <form onSubmit={this.onSubmitFeedback} className="form">
          <input
            placeholder="Enter your name"
            onChange={this.onChangeName}
            className="nameInput"
            value={nameInput}
          />
          <textarea
            placeholder="Enter your thoughts"
            value={commentInput}
            onChange={this.onChangeNote}
            className="noteInput"
            rows="6"
          />
          <button type="submit" className="onSubmitBtn">
            add comment
          </button>
        </form>
        <hr className="hr_line" />
        {this.onPushingComment()}
      </div>
    )
  }
}
export default Comments
