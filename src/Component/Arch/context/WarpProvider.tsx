import { WarpContext } from "./WarpContext";
import React, { useEffect, RefObject, useMemo, useRef, useState } from "react";
import { WarpProviderValue } from "./type";
const WarpJS = require("warpjs");

interface WarpProviderProps extends WarpProviderValue {
  children?: React.ReactNode;
  warpElementRef: RefObject<SVGSVGElement | null>;
}

function WarpProvider(props: WarpProviderProps) {
  const { step = 1, max = 180, min = -180, value = 0, warpElementRef, children } = props;
  const ref = useRef<WarpProviderProps>({ step, value, max, min, warpElementRef });
  const [state, setState] = useState<WarpProviderValue>(ref.current);

  const oldValueRef = useRef<number>(state.value || 0);

  const Warp = useMemo(
    () => (warpElementRef.current ? new WarpJS(warpElementRef.current) : null),
    [warpElementRef.current]
  );

  useEffect(() => {
    if (!state.value) return;

    const oldValue = oldValueRef.current || 0;
    const strength = state.value;
    oldValueRef.current = state.value;

    Warp.transform(([x, y]: number[]) => {
      const dy = oldValue - strength;
      return [x, y + dy * Math.sin(x / 128)];
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
