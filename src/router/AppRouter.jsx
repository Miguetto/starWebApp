import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, CharactersPage, CharacterPage } from "../pages";

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="characters" element={<CharactersPage />} />
            <Route path="character/:characterId" element={<CharacterPage />} />

            // Por si falla la condicion de arriba:
            <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
    )
}