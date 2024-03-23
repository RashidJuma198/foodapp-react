import { useState } from "react";
import { useEffect } from "react";
export default function Search() {
  const [query, setQuery] = useState("");
  //Syntax of useffect hook
  //useEffect(()=>{},[]);
  useEffect(() => {
    function demo() {
      console.log("Demo Funtion Executed");
    }
    demo();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
