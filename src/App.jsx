import { useGetCharacters } from "./assets/components/useGetCharacters";
import Loader from "./assets/components/Loader";
import Error from "./assets/components/Error";
import CharactersList from "./assets/components/CharactersList";
import SearchForm from "./assets/components/SearchForm";

function App() {
  const { isLoading, error, charactersList, getCharacter } = useGetCharacters();

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <SearchForm getCharacter={getCharacter} />
      <p>efef</p>
      <CharactersList characters={charactersList} />
    </div>
  );
}

export default App;
