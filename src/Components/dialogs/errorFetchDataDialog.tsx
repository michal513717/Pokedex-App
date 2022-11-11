import { ModalOverlay, Modal, ModalContent,ModalBody, ModalFooter, ModalHeader, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import React from "react"

const ErrorFetchDataDialog:React.FC = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()


    return(
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

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

export default ErrorFetchDataDialog;