import { PropsWithChildren } from "react";
import { Helmet } from "react-helmet";

export const LandingPageLayout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <Helmet>
                <title>DSRSafe - IPLR BRIN</title>
            </Helmet>

            <div className="w-full max-w-[400px] lg:w-[500px] mx-auto justify-center h-screen flex items-center">
                {children}
            </div>
        </>
    );
};
