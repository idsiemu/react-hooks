import {useEffect, useRef} from 'react';

const useClick = (onClick = null) => {
  const element = useRef();
  useEffect(() => {
      if(typeof onClick === "function"){
        console.log(element.current);
        console.log('functiop');
        if(typeof element !== 'undefined') {
          element.current.addEventListener("click", onClick);
          return () => {
            if(typeof element !== 'undefined'){
              element.current.removeEventListener("click", onClick);
            }
          }
        }
      }
    }, []);
    return element;
  }

  export default useClick;