import { RootSelector } from "../store";
import { useSelector, TypedUseSelectorHook } from "react-redux";

export const TypedUseSelector:TypedUseSelectorHook<RootSelector> = useSelector