import { ModalOverlay, Modal, ModalContent,ModalBody, ModalFooter, ModalHeader, ModalCloseButton, Button } from "@chakra-ui/react";
import React from "react"

const PokemonsDetailsDialog:React.FC = () => {

    return(
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Lorem count={2} />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default PokemonsDetailsDialog;