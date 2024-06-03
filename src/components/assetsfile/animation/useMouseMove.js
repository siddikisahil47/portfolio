import { useCallback } from "react";

const useMouseMove = () => {
  const handleMouseMove = useCallback((e) => {
    const button = e.target;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const dx = (x - xc) / 10; // scale down the effect
    const dy = (y - yc) / 8; // scale down the effect

    button.style.boxShadow = `${dx}px ${dy}px 0 0 black`;
  }, []);

  return handleMouseMove;
};

export default useMouseMove;
