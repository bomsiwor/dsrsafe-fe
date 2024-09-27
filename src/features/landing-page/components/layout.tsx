import { PropsWithChildren } from "react";

export const LandingPageLayout = ({ children }: PropsWithChildren) => {
  return <main className="m-auto max-w-7xl h-screen p-10">{children}</main>;
};
