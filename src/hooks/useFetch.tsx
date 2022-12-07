import { useState, useEffect } from 'react'
import { getData } from '../API'

export default function useFetch(URL: string){
    // useState Hook..
    const [data, setData] = useState([]);

    // useEffect Hook..
    useEffect(() => {
        getData(URL)
            .then(response => {
                const { data }: any = response;
                setData(data);
            })
            .catch(error => console.log('ERR! -- ', error.message));
    }, [URL]);

    return [data];
};