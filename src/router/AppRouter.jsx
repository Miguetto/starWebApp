import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PersonalPage } from "../pages";
import { PersonPage } from "../pages/PersonPage";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="personal" element={<PersonalPage />} />
            <Route path="person/:personId" element={<PersonPage />} />

            // Por si falla la condicion de arriba:
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}