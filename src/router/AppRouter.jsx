import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, CharactersPage, CharacterPage } from "../pages";
import { DataProvider } from "../context/DataProvider";
import { Navbar } from "../components";
import FavoritesPage from "../pages/FavoritesPage";

export const AppRouter = () => {

    return (
        <DataProvider>
            <Navbar />
            <hr />

            <Routes>
                <Route path="/*" element={<HomePage />} />
                <Route path="characters" element={<CharactersPage />} />
                <Route path="character/:characterId" element={<CharacterPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                

            // Por si falla la condicion de arriba:
                <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
        </DataProvider>

    )
}