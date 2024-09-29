import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

export const AdviceRecommendationLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Helmet>
                <title>Reusability advice for Radionuclide</title>
            </Helmet>

            <main className="m-auto h-screen max-w-7xl p-10">{children}</main>
        </div>
    );
};
