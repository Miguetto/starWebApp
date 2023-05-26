import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, CharactersPage, CharacterPage } from "../pages";
import { DataProvider } from "../context/DataProvider";

export const AppRouter = () => {

    return (
        <DataProvider>
            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="characters" element={<CharactersPage />} />
                <Route path="character/:characterId" element={<CharacterPage />} />

            // Por si falla la condicion de arriba:
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </DataProvider>

    )
}