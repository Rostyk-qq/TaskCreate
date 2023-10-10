import { actionRenderType, actionTypeName, actionTypePasswordSubmit, actionTypePassword, Params, RenderProps} from "./Types";

export const pageRenderCreator = {
    CreatorRender: (payload: boolean): actionRenderType => ({ type: RenderProps.RENDER, payload })
}