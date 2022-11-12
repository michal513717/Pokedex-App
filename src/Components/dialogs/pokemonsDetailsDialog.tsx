import { ModalOverlay, Modal, ModalContent, ModalBody, ModalFooter, ModalHeader, ModalCloseButton, Button, useDisclosure, Flex, Box, Image } from "@chakra-ui/react";
import React, { useCallback, useEffect } from "react"
import { useOpenDialog } from "../../hooks/useOpenDialogs";
import { useStore } from "../../store";

const PokemonsDetailsDialog: React.FC = () => {
  const { isPokemonsDetailsDialogOpen, setPokemonsDetailsDialogOpen } = useOpenDialog();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { pokemonDetails, setPokemonDetails } = useStore();

  useEffect(() => {

    if (isPokemonsDetailsDialogOpen === true) {
      onOpen();
    }

    return;
  }, [isPokemonsDetailsDialogOpen, pokemonDetails])

  const closeDialogCallback = useCallback(() => {

    setPokemonsDetailsDialogOpen(false);
    setPokemonDetails({});
    onClose();
  }, [])

  return (
    <Modal isOpen={isOpen} onClose={closeDialogCallback}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Details of {pokemonDetails?.name} </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {Object.keys(pokemonDetails).length > 1 ? (
            <Flex direction={"row"} align={"center"} justify={"space-around"}>
              <Flex direction={"column"}>
                <Box>Weight: {pokemonDetails?.weight}</Box>
                <Box>Height: {pokemonDetails?.height}</Box>
                <Box>Base experience: {pokemonDetails?.base_experience}</Box>
              </Flex>
              <Flex >
                <Image src={pokemonDetails?.sprites?.front_default} />
              </Flex>
            </Flex>
          ) : (
            <></>
          )}
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

export default PokemonsDetailsDialog;