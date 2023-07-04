import { FC, lazy, LazyExoticComponent, Suspense } from "react";
import { Navigate } from "react-router-dom";


// ======================================= LOADING =======================================
const Loadable = (Component: LazyExoticComponent<FC>) => (props: any) =>
(
    <Suspense
        fallback={
            <div>
                Loading . . .
            </div>
        }
    >
        <Component {...props} />
    </Suspense>
);



// ======================================= ROUTES =======================================
const APPLAYOUT = Loadable(lazy(() => import("../components/layout/layout")));
const HOMEPAGE = Loadable(lazy(() => import("../pages/home")));
const PROGRAMPAGE = Loadable(lazy(() => import("../pages/programs")));
const REACTINFOPAGE = Loadable(lazy(() => import("../pages/react-info")));
const DISCUSSIONPAGE = Loadable(lazy(() => import("../pages/discussion")));
const JSINFOPAGE = Loadable(lazy(() => import("../pages/js-info")));
const POITNSPAGE = Loadable(lazy(() => import("../pages/points")));



export const APP_ROUTES = [
    { path: "/", element: <Navigate to="home" /> },
    {
        path: "/",
        element: <APPLAYOUT />,
        children: [
            {
                path: "home",
                element: (
                    <HOMEPAGE />
                ),
            },
            {
                path: "programs",
                element: (
                    <PROGRAMPAGE />
                ),
            },
            {
                path: "discussion",
                element: (
                    <DISCUSSIONPAGE />
                ),
            },
            {
                path: "react-info",
                element: (
                    <REACTINFOPAGE />
                ),
            },
            {
                path: "js-info",
                element: (
                    <JSINFOPAGE />
                ),
            },
            {
                path: "points",
                element: (
                    <POITNSPAGE />
                ),
            },
        ]
    },
]