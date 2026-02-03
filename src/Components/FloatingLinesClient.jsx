import { useEffect, useState } from "react";
import FloatingLines from "./FloatingLines.jsx";

export default function FloatingLinesClient(props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <FloatingLines {...props} />;
}
