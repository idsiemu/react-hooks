import { useEffect, useState } from 'react';

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      document.querySelector("title").innerHTML = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

export default useTitle;