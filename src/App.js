import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import TopHeader from "./components/TopHeader";
import GridSearch from "../src/components/GridSearch";
import InputSearch from "./components/InputSearch";
import { Container, SimpleGrid } from "@chakra-ui/react";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeImage, setPokeImage] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => {
        setPokeList(data.results);
      });
  }, []);

  //pegar valor digitardo no input
  const [value, setValue] = useState("");
  const [pokeSearch, setPokeSearch] = useState("");

  //função para pegar valor digitado no input
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);

    //redefinir os estados
    setPokeSearch("");
    setPokeImage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `https://pokeapi.co/api/v2/pokemon/${value}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPokeSearch(data);
        setPokeImage(data.sprites.front_default);
      });
  };

  return (
    <div>
      <TopHeader />

      <div style={{ maxWidth: "800px", margin: "auto" }}>
        <InputSearch handleChange={handleChange} handleSubmit={handleSubmit} />

        {pokeSearch.name ? (
          <div style={{ marginTop: "50px", marginBottom: "100px" }}>
            <SimpleGrid columns={4} spacingY="54px">
              <div>
                <h1>{pokeSearch.name}</h1>
                <img src={pokeImage} alt={pokeSearch.name} />
              </div>
            </SimpleGrid>
          </div>
        ) : (
          <div style={{ marginTop: "50px", marginBottom: "100px" }}>
            <SimpleGrid columns={4} spacingY="54px">
              {pokeList.map((poke, id) => (
                <div key={id}>
                  <a href="">
                    <GridSearch pokeName={poke.name} pokeId={id} />
                  </a>
                </div>
              ))}
            </SimpleGrid>
          </div>
        )}
      </div>

      <GlobalStyle />
    </div>

    //criar páginação para outra página
  );
}

export default App;
