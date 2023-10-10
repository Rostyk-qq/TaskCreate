import { PrivateMassive, PublicMassive } from "./createPrivatePublicPage";
import { Route, useNavigate, Routes } from "react-router-dom";
import { TypedUseSelector } from "../../Redux/TypeSelector/selector";

const RenderPages = () => {
    const {render} = TypedUseSelector(state => state.pageControlReducer)
    return (
        <>
            <Routes>
                {
                    PublicMassive.map(props => )
                }
                <Route />    
            </Routes>
        </>
    )
}