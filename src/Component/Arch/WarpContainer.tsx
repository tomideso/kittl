import { useRef } from "react";
import WarpProvider from "./context/WarpProvider";
import WarpControl from "./WarpControl";
import WarpElement from "./WarpElement";

export function WarpContainer() {
  const ref = useRef<SVGSVGElement>(null);

  return (
    <div
      style={{
        margin: "0 auto",
        height: "500px",
        width: "500px",
      }}
    >
      <WarpProvider min={-100} step={1} max={100} warpElementRef={ref}>
        <WarpElement ref={ref} />
        <WarpControl />
      </WarpProvider>
    </div>
  );
}

export default WarpContainer;
