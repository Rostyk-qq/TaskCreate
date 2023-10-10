import { RenderPage, RenderProps, actionRenderType } from "./Types";

const renderParam: RenderPage = {
    render: false
}

export const pageControlReducer = (state = renderParam, action: actionRenderType): actionRenderType => {
    switch (action.type) {
        case RenderProps.RENDER:
            
            break;
    
        default:
            break;
    }
}