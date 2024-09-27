import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

export const LandingPageLayout = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Helmet>
                <title>Reusability advice for Radionuclide</title>
            </Helmet>

            <main className="m-auto max-w-7xl h-screen p-10">{children}</main>
        </div>
    );
};
