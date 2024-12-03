import { DEFAULT_ORDER, DEFAULT_SORT, getCharacterById, getCharacters } from "./api/characters-api";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import Layout from "./Layout";
import AboutPage from "./pages/AboutPage";
import CharactersPage from "./pages/CharactersPage";
import ContactPage from "./pages/ContactPage";
import ComparePage from "./pages/comparePage";

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
                    const sort = url.searchParams.get('sort') || DEFAULT_SORT;
                    const order = url.searchParams.get('order') || DEFAULT_ORDER;
                    console.log('sort', sort);
                    console.log('order', order);
                    return getCharacters({ sort, order });
                }
            },
            {
                path: "/characters/:id",
                element: <CharacterDetailPage />,
                loader: ({ params }) => getCharacterById(params.id)
            },
            { path: "/compare", element: <ComparePage />,
                loader: () => getCharacters()
             },
            { path: "/about", element: <AboutPage /> },
            { path: "/contact", element: <ContactPage /> },
        ],
    },
];

export default routes;