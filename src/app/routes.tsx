import { AdviceRecommendation } from "@/features/advice-recommendation/components";
import { LandingPage } from "@/features/landing-page/components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const ROUTE = {
    home: { path: "/", element: <LandingPage /> },
    advisor: { path: "/advisor", element: <AdviceRecommendation /> },
};

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTE.home.path} element={ROUTE.home.element} />

                <Route
                    path={ROUTE.advisor.path}
                    element={ROUTE.advisor.element}
                />
            </Routes>
        </BrowserRouter>
    );
};
