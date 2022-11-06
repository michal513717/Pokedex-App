import axios, { Method } from "axios";

export function useAxios() {

    const fetchData = async (url: string, method: Method, body: any) => {
        try {
            const respone = await axios({
                url: url,
                method: method,
                data: body
            })

            const data = respone?.data;
            return [data, {isError: false}];
        } catch (err) {
            return [{}, {isError: true}, err];
        }
    };

    return { fetchData };
}