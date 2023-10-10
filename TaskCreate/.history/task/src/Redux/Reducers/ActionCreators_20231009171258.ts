import { actionTypeEmail, actionTypeName, actionTypePasswordSubmit, actionTypePassword, Params} from "./Types";

export const actionsCreators = {
    CreatorName: (payload: string): actionTypeName => ({type: Params.NAME, payload })
}