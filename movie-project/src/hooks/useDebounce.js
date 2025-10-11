import { useEffect, useState } from "react";

export default function useDebounce(searchValue,delay) {
  const [debounced, setDebounced] = useState(searchValue)

  useEffect(()=>{
    const timeId = setTimeout(() => {
        setDebounced(searchValue)
    }, delay);
    return ()=> clearTimeout(timeId)
},[searchValue,delay])
  return debounced;
}
