import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import styled from "styled-components";

function PokeDetails(props) {
  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textTransform="uppercase" fontWeight="bold">
            {props.namePokeDetails}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div id="details">
              <Tag>#{props.tag}</Tag>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.identicadorPokemon}.png`}
                alt="pokemon"
              />
              <p>
                <strong> Bese Experience </strong> : {props.baseXP}
              </p>
              <p>
                <strong> Height </strong> : {props.height}
              </p>
              <p>
                <strong> Weight </strong>: {props.weight}
              </p>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={props.onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PokeDetails;

const Tag = styled.span`
  background: #fac705;
  border-radius: 5px;
  padding: 2px 20px;
  color: #fff;
`;
