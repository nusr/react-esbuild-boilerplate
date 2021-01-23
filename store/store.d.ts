import React, { FunctionComponent, Dispatch } from "react";
import { Action, State } from "@/types";
declare type Props = {
    children: React.ReactNode;
};
export declare const StoreProvider: FunctionComponent<Props>;
export declare const useDispatch: () => Dispatch<Action>;
export declare function useSelector<k extends keyof State>(pickStr: Array<k>): Pick<State, k>;
export {};
