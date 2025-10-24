interface PropsPreviousSearches {
    title: string,
    previousSearches: string[],
    onHandleTermClick: (term: string) => void
}
const PreviousSearches = ({title, previousSearches, onHandleTermClick}: PropsPreviousSearches) => {
    if (!previousSearches || previousSearches.length === 0) {
        return null; 
    }
    return (
        <div className="previous-searches">
            <h2>{title}</h2>
            <ul className="previous-searches-list">
                {
                    previousSearches.map((searches, index) => (
                        <li onClick={() => onHandleTermClick(searches)} key={index}>{searches}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PreviousSearches