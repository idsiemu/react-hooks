import { useEffect } from 'react';

const useBeforeLeave = (onbefore) => {
    useEffect(() => {
        const handle = event => {
            if(typeof onbefore !== 'function'){
            return
            }
            const { clientY } = event;
            if(clientY <= 0){
            onbefore();
            }
        }
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    },[onbefore]);
}

export default useBeforeLeave;