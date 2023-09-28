function ButtonForFilter({
  buttonName,
  setVisibility,
  isVisible,
  list,
  selected,
  itemId,
}) {
  return (
    <div className="filter__box">
      <div
        onClick={setVisibility}
        role="button"
        className={`filter__button ${
          selected === itemId ? 'filter__button_active' : ''
        } _btn-text`}
      >
        {buttonName}
      </div>
      {isVisible && (
        <ul className="filter__dropdown-toggle">
          {list.map((item) => (
            <li key={item.id}>
              <a className="filter__dropdown-item" href="/#">
                {item.info}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ButtonForFilter
