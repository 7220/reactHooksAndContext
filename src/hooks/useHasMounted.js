import { useEffect, useState } from "react";

export default function useHasMounted() {
  const [hasMounted, setHasMount] = useState(false);

  useEffect(() => {
    setHasMount(true)
  }, [])

  return hasMounted
}