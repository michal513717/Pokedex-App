import { useEffect, useState } from "react";
import axios, {  Method } from "axios";

export function useAxios (url: string, method: Method, body: any) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string|null>(null);

    useEffect(()=>{

        setIsLoading(true);
        fetchData().then((response) => response);
    },[url]);

    const fetchData = async () => {
        try{
            const respone = await axios({
                url:url,
                method: method,
                data: body
            })

            const data = respone?.data;
            setData(data);

        } catch(err:any){
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }

    return [isLoading, error, data];
}