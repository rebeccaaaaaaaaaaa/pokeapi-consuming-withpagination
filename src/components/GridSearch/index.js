import React from "react";
import { Container, Box, SimpleGrid } from "@chakra-ui/react";
import styled from "styled-components";

function GridSearch(props) {

  const imagePrincipal = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokeId}.png`
  

  return (
        <Card>
            <img src={imagePrincipal} alt={props.pokeName}/>
            <p>{props.pokeName}</p>
        </Card>
  
  );
}
export default GridSearch;

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

  p{
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`


