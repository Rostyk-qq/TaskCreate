import { PrivateMassive, PublicMassive, PagesPath } from "./createPrivatePublicPage";
import { Route, Navigate, Routes } from "react-router-dom";
import { TypedUseSelector } from "../../Redux/TypeSelector/selector";

const RenderPages = () => {
    const {render} = TypedUseSelector(state => state.pageControlReducer)
    return (
        <>
        {
            
            <Routes>
                {
                    PrivateMassive.map(props => (
                        <Route path={props.path} element={props.element}  /> 
                    ))
                }   
                <Route path="*" element={<Navigate to={PagesPath.POSTS} replace/>} />
            </Routes>

            <Routes>
                {
                    PublicMassive.map(props => (
                        <Route path={props.path} element={props.element}  /> 
                    ))
                }   
                <Route path="*" element={<Navigate to={PagesPath.REGISTRATION} replace/>} />
            </Routes>
            }
        </>
    )
}