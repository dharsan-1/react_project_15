import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {containerList} = props
  const {date, name, comment} = containerList

  const intialName = name ? name[0].toUpperCase() : ''
  const postedDate = formatDistanceToNow(date)
  return (
    <div className="wholeContainer">
      <div className="comments-name-container">
        <div className="name-container">{intialName}</div>
        <h1 className="name">{name}</h1>
        <p className="para">{postedDate}</p>
      </div>
      <p className="comment">{comment}</p>
    </div>
  )
}

export default CommentItem
