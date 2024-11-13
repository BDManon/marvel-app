import { getCharacterById, getSortedCharacters } from "./api/characters-api";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <CharactersPage />,
                loader: ({ request }) => {
                    const url = new URL(request.url);
                    const sort = url.searchParams.get('sort') || 'name';
                    const order = url.searchParams.get('order') || 'asc';
                    return getSortedCharacters(sort, order);
                }
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharacterById(params.id)
            },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
];

export default routes;