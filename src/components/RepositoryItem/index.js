// Write your code here

import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = repoDetails

  return (
    <li className="list-item">
      <img src={avatarUrl} className="avatar-img" alt={name} />
      <h1 className="name-txt">{name}</h1>
      <div className="sub-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="img"
        />
        <p>{`${starsCount} stars`}</p>
      </div>
      <div className="sub-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="img"
        />
        <p>{`${forksCount} forks`}</p>
      </div>
      <div className="sub-div">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="img"
        />
        <p>{`${issuesCount} open issues`}</p>
      </div>
    </li>
  )
}

export default RepositoryItem
