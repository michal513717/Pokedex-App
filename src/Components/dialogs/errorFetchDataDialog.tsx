import { ModalOverlay, Modal, ModalContent,ModalBody, ModalFooter, ModalHeader, ModalCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import React, {useEffect, useCallback} from "react"
import { useOpenDialog } from "../../hooks/useOpenDialogs";
import { useStore } from "../../store";

const ErrorFetchDataDialog:React.FC = () => {
  const { isErrorFetchDialogOpen, setIsErrorFetchDialogOpen } = useOpenDialog();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { error, setError } = useStore();

    useEffect(() => {

      if (isErrorFetchDialogOpen === true) {
        onOpen();
      }
  
      return;
    }, [isErrorFetchDialogOpen])

    const closeDialogCallback = useCallback(() => {

      setIsErrorFetchDialogOpen(false);
      setError(null);
      onClose();
    }, [])

    return(
        <Modal isOpen={isOpen} onClose={closeDialogCallback}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {error}
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={closeDialogCallback}>
                Close
              </Button>
              {/* <Button variant='ghost'>Secondary Action</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
    )
}

export default ErrorFetchDataDialog;