import { actionTypeEmail, actionTypeName, actionTypePasswordSubmit, actionTypePassword, Params} from "./Types";

export const actionsCreators = {
    CreatorName: (payload: string): actionTypeName => ({ type: Params.NAME, payload })
    CreatorEmail: (payload: string): actionTypeName => ({ type: Params.NAME, payload })
    CreatorPassword: (payload: string): actionTypePassword => ({ type: Params.NAME, payload })
    CreatorSubmitPassword: (payload: string): actionTypePasswordSubmit => ({ type: Params.NAME, payload })
}