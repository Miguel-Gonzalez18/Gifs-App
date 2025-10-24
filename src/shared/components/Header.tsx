interface Props {
    title: string,
    description?: string
}

const Header = ({title, description = "Descubre y comparte el gifs perfecto"}: Props) => {
    return (
        <header className="content-center">
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    )
}

export default Header