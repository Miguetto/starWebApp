import { Navigate, Route, Routes } from "react-router-dom";
import { CharactersPage, CharacterPage } from "../pages";
import { DataProvider } from "../context/DataProvider";
import { Navbar } from "../ui";
import FavoritesPage from "../pages/FavoritesPage";

export const AppRouter = () => {

    return (
        <DataProvider>
            <Navbar />
            <hr />

            <Routes>
                <Route path="/*" element={<CharactersPage />} />
                <Route path="characters" element={<CharactersPage />} />
                <Route path="character/:characterId" element={<CharacterPage />} />
                <Route path="favorites" element={<FavoritesPage />} />
                

            // Por si falla la condicion de arriba:
                <Route path="/*" element={<Navigate to="/characters" />} />
            </Routes>
        </DataProvider>

    )
}