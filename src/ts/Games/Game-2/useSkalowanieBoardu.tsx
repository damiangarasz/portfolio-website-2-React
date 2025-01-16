import { useEffect, useState } from "react";

export function useSkalowanieBoardu() {
  const [rozmiarOkna, setRozmiarOkna] = useState({
    width: window.innerWidth * 0.6 + "px",
    height: window.innerWidth * 0.6 + "px",
  });

  useEffect(() => {
    const temp = window.innerWidth * 0.6;
    const rozmiar = {
      width: temp + "px",
      height: temp + "px",
    };
    setRozmiarOkna(rozmiar);
  }, []);

  const data = {
    rozmiarOkna: rozmiarOkna,
    rozmiarKratki: 2,
  };

  return data;
}
