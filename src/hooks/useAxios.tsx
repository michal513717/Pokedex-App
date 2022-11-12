import axios, { Method } from "axios";
import { useStore } from "../store";
import { useOpenDialog } from "./useOpenDialogs";

export function useAxios() {
    const { setIsErrorFetchDialogOpen } = useOpenDialog();
    const { setError } = useStore();

    const fetchData = async (url: string, method: Method, body: any) => {
        try {
            const respone = await axios({
                url: url,
                method: method,
                data: body
            })

            const data = respone?.data;
            return [data, {isError: false}];
        } catch (err:unknown) {

            setError(err);
            setIsErrorFetchDialogOpen(true);

            return [{}, {isError: true}, err];
        }
    };

    return { fetchData };
}