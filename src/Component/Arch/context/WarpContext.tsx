import React, { SetStateAction, Dispatch } from "react";
import { WarpProviderValue } from "./type";

type WarpProviderContextValue = [WarpProviderValue, Dispatch<SetStateAction<WarpProviderValue>>];

export const WarpContext = React.createContext<WarpProviderContextValue | undefined>(undefined);
WarpContext.displayName = "WarpContext";
