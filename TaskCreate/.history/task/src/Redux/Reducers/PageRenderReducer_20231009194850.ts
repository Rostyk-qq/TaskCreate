import { RenderPage, RenderProps, actionRenderType } from "./Types";

const renderParam: RenderPage = {
    render: true
}

export const pageControlReducer = (state = renderParam, action: actionRenderType): RenderPage => {
    switch (action.type) {
        case RenderProps.RENDER:
            return {...RenderProps, render: action.payload}
        default:
            return state;
    }
}