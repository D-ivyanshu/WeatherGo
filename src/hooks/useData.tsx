import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Query } from "../App";

export interface weather{
    description : string,
} 

export interface main{
    temp: number,
    humidity: number,
}

export interface weather {
    description: string,
    icon: string,
}

export interface wind {
    speed: number
}

export interface FetchQueryResponse {
    name: string, 
    id: number,
    main: main,
    weather: weather[],
    wind: wind,
}
  
const useData = ({city, unit='metric'}: Query) => {
    
    const [data, setData] = useState<FetchQueryResponse | null>({} as FetchQueryResponse);
    const [error, setError] = useState('');
     
    useEffect(() => {
        const controller = new AbortController();

        apiClient.get<FetchQueryResponse>(
            "/weather",
            {
                params: { 
                    q: city,
                    units: unit,
                }
            }
        )
            .then(res => {
                console.log(res.data);
                setData(res.data);
                if(error) setError('');
            })
            .catch(err => {
                if(!city) return;
                setError(err.message);
            })

        return () => controller.abort();

    }, [city,unit,error])

  return {data, error};
};

export default useData;
