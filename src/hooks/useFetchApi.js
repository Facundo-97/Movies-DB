import { useEffect, useState } from "react";
import { KEY } from "./APIKEY";

export const useFetchApi = (request) => {
  
    const [data, setData] = useState({
        data: null,
        loading: true,
        error: null,
      }
  );

    useEffect( ()=>{
        const requestAPI = async () => {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${request}`;
            if (request) {
              const response = await fetch(url);
              const result = await response.json();
              setData({
                  data: result,
                  loading: false,
                  error: null
              })
            }
          };
    
          requestAPI();
    },[request])
    
  return data;
};
