import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import TopHeader from "./components/TopHeader";
import GridSearch from "../src/components/GridSearch";
import InputSearch from "./components/InputSearch";
import PokeDetails from "./components/Details";
import { SimpleGrid, Box, useDisclosure } from "@chakra-ui/react";
import styled from "styled-components";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeImage, setPokeImage] = useState("");
  const [value, setValue] = useState("");
  const [pokeSearch, setPokeSearch] = useState("");
  const [currentPokemon, setCurrentPokemon] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();

 

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
      .then((response) => response.json())
      .then((data) => {
        setPokeList(data.results);
      });
  }, []);

  //função para pegar valor digitado no input
  const handleChange = (e) => {
    setValue(e.target.value);
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
        setPokeImage(data.sprites.other.dream_world.front_default);
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
              <Card>
                <img src={pokeImage} alt={pokeSearch.name} width="100%" />
                <p>{pokeSearch.name}</p>
              </Card>
            </SimpleGrid>
          </div>
        ) : (
          <div style={{ marginTop: "50px", marginBottom: "100px" }}>
            <SimpleGrid columns={4} spacingY="54px">
              {pokeList.map((poke, id) => (
                <div key={id}>
                  <div
                    onClick={() => {
                      setCurrentPokemon(poke);
                      onOpen();
                    }}
                  >
                    <GridSearch pokeName={poke.name} pokeId={
                      poke.url.split("/")[6]
                    } />
                  </div>
                </div>
              ))}
            </SimpleGrid>
          </div>
        )}
      </div>

      <PokeDetails
        onClose={onClose}
        isOpen={isOpen}
        onOpen={onOpen}
        namePokeDetails={currentPokemon.name}
      />
      {console.log(currentPokemon)}
      <GlobalStyle />
    </div>

    //criar páginação para outra página
  );
}

export default App;

const Card = styled(Box)`
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  text-align: center;
  transition: all 0.7s;

  &:hover {
    transform: scale(0.9);
  }

  img {
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;
