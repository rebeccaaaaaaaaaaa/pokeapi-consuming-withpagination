import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
    ModalCloseButton,
  } from '@chakra-ui/react'

  function PokeDetails(props) {

   

    return (
      <>
        
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader> {props.namePokeDetails} </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div id="details">
                <p><strong> Base de Eperiencia </strong> : {props.baseXP}</p>
                <p><strong> Altura </strong> : {props.height}</p>
              

              </div>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='red' mr={3} onClick={props.onClose}>
                Fechar
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default PokeDetails