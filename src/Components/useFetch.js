import { useEffect, useState } from "react";

const useFetch = (url) =>{
    const [data, setData] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading
        fetch(url)
            .then((response) => {
                if (response.status >= 400) {
                    throw new Error("server error");
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => setError(error))
            .finally(() => setLoading(false));
        }, [url]);
    
    return {data, error, loading}
}