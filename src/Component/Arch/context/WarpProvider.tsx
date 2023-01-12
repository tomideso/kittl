import { WarpContext } from "./WarpContext";
import React, { useEffect, RefObject, useMemo, useRef, useState } from "react";
import { WarpProviderValue } from "./type";
const WarpJS = require("warpjs");

interface WarpProviderProps extends WarpProviderValue {
  children?: React.ReactNode;
  warpElementRef: RefObject<SVGSVGElement | null>;
}

function WarpProvider(props: WarpProviderProps) {
  const { step = 1, max = 100, min = -100, value = 0, warpElementRef, children } = props;
  const ref = useRef<WarpProviderProps>({ step, value, max, min, warpElementRef });
  const [state, setState] = useState<WarpProviderValue>(ref.current);

  const oldValueRef = useRef<number>(state.value);

  const Warp = useMemo(
    () => (warpElementRef.current ? new WarpJS(warpElementRef.current) : null),
    [warpElementRef.current]
  );

  useEffect(() => {
    if (!state.value) return;

    const oldValue = oldValueRef.current;
    const strength = state.value;
    oldValueRef.current = state.value;

    const horizontalX = 385; //horizontal path width

    Warp.transform(([x, y]: number[]) => {
      const dy = oldValue - strength; //Determines the direction of the arc or the amplitude of the arc along Y axis

      /**
       *  The graph of y=sin(x * 1/2^n) shows the oscillating wave curve along x axis
       *
       * https://mathbitsnotebook.com/Algebra2/TrigGraphs/sinuso26.gif
       * The graph of y=sin(x * 1/2) where x=2π , n=1 is shown in red above
       *
       * when x is expressed in terms of 2^n such that for n=m where 2^n is closest to x/2 such that x > 2^n <= x/2
       * we will have a single parabola along x axis with phase point at the midpoint of x.
       * For any X, X can expressed in terms of 2^n to conform to the above rule with the expression below
       * n = Math.floor(Math.log2(x/2))
       */

      const phase_shift_point = x / 2 ** Math.floor(Math.log2(horizontalX / 2)); // Equals x/128
      return [x, y + dy * Math.sin(phase_shift_point)];
    });
  }, [state.value]);

  return <WarpContext.Provider value={[state, setState]}>{children}</WarpContext.Provider>;
}

export default WarpProvider;

export function useWarp() {
  const context = React.useContext(WarpContext);

  if (context === undefined) {
    throw "useWarp must be used within a WarpProvider";
  }

  return context;
}
