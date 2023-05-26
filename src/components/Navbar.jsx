import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <Link to="/" className="text-white text-xl font-semibold">
                    Star Wars Characters
                </Link>
                <div>
                    <Link
                        to="/"
                        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Home
                    </Link>
                    <Link
                        to="/characters"
                        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Personajes
                    </Link>
                    <Link
                        to="/favorites"
                        className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    >
                        Favoritos
                    </Link>
                </div>
            </div>
        </nav>
    )
}