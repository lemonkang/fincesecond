import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "..";

type DispatchFunc=()=>AppDispatch
export const useAppSelector:TypedUseSelectorHook<RootState> =useSelector
export const useAppDispatch:DispatchFunc=useDispatch