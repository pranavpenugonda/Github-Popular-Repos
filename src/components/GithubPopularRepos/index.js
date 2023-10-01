import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {
    activeFilterItemId: languageFiltersData[0].id,
    repositoryList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getRepos()
  }

  renderFailureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="failure view"
      className="failure-view"
    />
  )

  getRepos = async () => {
    const {activeFilterItemId} = this.state
    this.setState({
      isLoading: true,
    })
    // const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeFilterItemId}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.popular_repos.map(repo => ({
        name: repo.name,
        id: repo.id,
        issuesCount: repo.issues_count,
        forksCount: repo.forks_count,
        starsCount: repo.stars_count,
        avatarUrl: repo.avatar_url,
      }))
      this.setState({
        repositoryList: updatedData,
        isLoading: false,
      })
    } else {
      this.renderFailureView()
    }
  }

  updateActiveFilterItemId = activeFilterItemId => {
    this.setState({activeFilterItemId}, this.getRepos)
  }

  renderRepoList = () => {
    const {repositoryList} = this.state
    return (
      <ul className="ul-cont2">
        {repositoryList.map(eachRepo => (
          <RepositoryItem key={eachRepo.id} repoDetails={eachRepo} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, activeFilterItemId} = this.state
    return (
      <div className="GithubPopularRepos-bg-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="ul-cont">
          {languageFiltersData.map(eachData => (
            <LanguageFilterItem
              key={eachData.id}
              languageFiltersDataDetails={eachData}
              activeFilterItemId={activeFilterItemId}
              updateActiveFilterItemId={this.updateActiveFilterItemId}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.renderRepoList()}
      </div>
    )
  }
}

export default GithubPopularRepos
