import { useStore } from "./../store/store";

export function useOpenDialog() {
    const isErrorFetchDialogOpen = useStore(
        (state) => state.isErrorFetchDialogOpen
    );

    const isPokemonsDetailsDialogOpen = useStore(
        (state) => state.isPokemonsDetailsDialogOpen
    );

    const {
        setIsErrorFetchDialogOpen,
        setPokemonsDetailsDialogOpen
    } = useStore();


    return {
        isErrorFetchDialogOpen,
        isPokemonsDetailsDialogOpen,
        setIsErrorFetchDialogOpen,
        setPokemonsDetailsDialogOpen
    };
}