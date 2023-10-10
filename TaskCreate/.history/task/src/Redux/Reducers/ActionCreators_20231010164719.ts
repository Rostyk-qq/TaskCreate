import { actionRenderType, RenderProps, ArrayUsers, RenderNewMassive, actionArrayType } from "./Types";

export const pageRenderCreator = {
    CreatorRender: (payload: boolean): actionRenderType => ({ type: RenderProps.RENDER, payload })
}
export const usersArrayCreator = {
    CreatorArrayUsers: (payload: ArrayUsers): actionRenderType => ({ type: RenderProps.RENDER, payload })
}
