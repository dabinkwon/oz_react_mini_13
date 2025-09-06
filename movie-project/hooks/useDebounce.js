import { useEffect, useState } from "react";

export default function useDebounce(searchValue) {
  const [debounced, setDebounced] = useState(searchValue)

  useEffect(()=>{
    const timeId = setTimeout(() => {
        setDebounced(searchValue)
    }, 500);
    return ()=> clearTimeout(timeId)
},[searchValue])
  return debounced;
}
