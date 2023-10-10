import { RenderPage, RenderProps, actionRenderType } from "./Types";

const renderParam: RenderPage = {
    render: false
}

export const pageControlReducer = (state = renderParam, action: actionRenderType): RenderPage => {
    switch (action.type) {
        case RenderProps.RENDER:
            return {...}
        default:
            return state;
    }
}