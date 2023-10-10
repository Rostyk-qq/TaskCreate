import { actionTypeEmail, actionTypeName, actionTypePasswordSubmit, actionTypePassword, Params} from "./Types";

export const actionsCreators = {
    CreatorName: (payload: string): actionTypeName => ({ type: Params.NAME, payload }),
    CreatorLastName: (payload: string): actionTypeName => ({ type: Params.NAME, payload }),
    CreatorEmail: (payload: string): actionTypeEmail => ({ type: Params.EMAIL, payload }),
    CreatorPassword: (payload: string): actionTypePassword => ({ type: Params.PASSWORD, payload }),
    CreatorSubmitPassword: (payload: string): actionTypePasswordSubmit => ({ type: Params.PASSWORD_SUBMIT, payload })
}