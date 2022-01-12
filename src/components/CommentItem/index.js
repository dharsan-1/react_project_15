import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {containerList, togglingFav} = props
  const {date, name, comment, isLiked, id} = containerList

  const isLikedTab = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const intialName = name ? name[0].toUpperCase() : ''
  const onToggleFav = () => {
    togglingFav(id)
  }
  const postedDate = formatDistanceToNow(date)
  return (
    <div className="wholeContainer">
      <div className="comments-name-container">
        <div className="name-container">{intialName}</div>
        <h1 className="name">{name}</h1>
        <p className="para">{postedDate}</p>

        <button type="button" className="button" onClick={onToggleFav}>
          <img src={isLikedTab} alt="like-dislike" />
        </button>
      </div>
      <p className="comment">{comment}</p>
    </div>
  )
}

export default CommentItem
