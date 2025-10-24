import { useEffect, useState, type KeyboardEvent } from "react"

interface PropsSearchBar {
    placeholder?: string,
    buttonName?: string
    onQuery: (query: string) => void
}

const SearchBar = ({placeholder = "Buscar Gifs", buttonName="Buscar", onQuery}: PropsSearchBar) => {
    const [query, setQuery] = useState('')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            onQuery(query)
        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }
    },[query, onQuery])

    const handleSearch = () => {
        onQuery(query)
    }
    const handleKeyDown = ( event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Enter") {
            handleSearch()
        }
    }
    return (
        <div className="search-container">
            <input 
                onChange={e => setQuery(e.target.value)}
                value={query}
                type="search"
                placeholder={placeholder}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={handleSearch}    
            >
                {buttonName}
            </button>
        </div>
    )
}

export default SearchBar