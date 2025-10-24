// componentes
import Header from "./shared/components/Header";
import SearchBar from "./shared/components/SearchBar";
import PreviousSearches from "./gifs/components/PreviousSearches";
import GifsList from "./gifs/components/GifsList";
import { useGifs } from "./gifs/hooks/useGifs";

const GifsApp = () => {
  const { gifs, handleSearch, handleTermClicked, previousTerms } = useGifs()
  
  return (
    <>
      <Header title="Gifs App" />
      {/** Search */}
      <SearchBar placeholder="Eje: Demon Slayer" buttonName="Buscar" onQuery={handleSearch} />

      {/** Búsqueda previas */}
      <PreviousSearches
        title="Búsqueda previas"
        previousSearches={previousTerms}
        onHandleTermClick={handleTermClicked}
      />

      {/** Gifs */}
      <GifsList gifs={gifs} />
    </>
  );
};

export default GifsApp;
