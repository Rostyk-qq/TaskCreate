import { actionRenderType, RenderProps } from "./Types";

export const pageRenderCreator = {
    CreatorRender: (payload: boolean): actionRenderType => ({ type: RenderProps.RENDER, payload })
}
export const usersArrayCreator = {
    CreatorRender: (payload: boolean): actionRenderType => ({ type: RenderProps.RENDER, payload })
}