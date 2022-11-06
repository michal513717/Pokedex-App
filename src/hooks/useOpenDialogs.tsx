import { useStore } from "./../store/store";

export function useOpenDialog() {
    const isErrorFetchDialogOpen = useStore(
        (state) => state.isErrorFetchDialogOpen
    );

    const {
        setIsErrorFetchDialogOpen,
    } = useStore();


    return {
        isErrorFetchDialogOpen,
        setIsErrorFetchDialogOpen
    };
}