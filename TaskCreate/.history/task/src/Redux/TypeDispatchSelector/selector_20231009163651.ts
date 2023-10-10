import { RootSelector } from "../store";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const typedUseSelector:TypedUseSelectorHook<RootSelector> = useSelector