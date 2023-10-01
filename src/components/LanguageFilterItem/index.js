// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {
    languageFiltersDataDetails,
    updateActiveFilterItemId,
    activeFilterItemId,
  } = props
  const {language, id} = languageFiltersDataDetails

  const onChangeFilterItem = () => {
    console.log(id)
    updateActiveFilterItemId(id)
  }

  if (activeFilterItemId === language.toUpperCase()) {
    return (
      <li className="list-item3">
        <button
          type="button"
          className="lng-fltr-item-btn"
          onClick={onChangeFilterItem}
        >
          <p className="language-txt2">{language}</p>
        </button>
      </li>
    )
  }
  return (
    <li className="list-item2">
      <button
        type="button"
        className="lng-fltr-item-btn"
        onClick={onChangeFilterItem}
      >
        <p className="language-txt">{language}</p>
      </button>
    </li>
  )
}

export default LanguageFilterItem
