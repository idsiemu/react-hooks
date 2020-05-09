import defaultAxios from 'axios';
import {useState, useEffect} from 'react';

const useAxios = (options, axiosInstance = defaultAxios) => {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null
    });
    if(!options.url) {
        return;
    }
    useEffect(() => {
        axiosInstance(options)
    })
    return state;
}

export default useAxios;