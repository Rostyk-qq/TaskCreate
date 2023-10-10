import { PrivateMassive, PublicMassive, PagesPath } from "./createPrivatePublicPage";
import { Route, useNavigate, Routes } from "react-router-dom";
import { TypedUseSelector } from "../../Redux/TypeSelector/selector";

const RenderPages = () => {
    const {render} = TypedUseSelector(state => state.pageControlReducer)
    return (
        <>
            <Routes>
                {
                    PublicMassive.map(props => (
                        <Route path={props.path} element={props.element}  /> 
                    ))
                }   
                <Route path="*" element={} />
            </Routes>
        </>
    )
}