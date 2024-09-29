import { Button } from "@/components/ui";
import { LandingPageLayout } from "./layout.landing-page";
import { CircuitBoardIcon, ExternalLinkIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <LandingPageLayout>
            <main className="space-y-6 font-fira w-full">
                <section>
                    <div className="flex gap-8 items-center justify-center w-full">
                        <img
                            className="w-[100px] hover:drop-shadow-md transition duration-200"
                            src="/LogoBrin.png"
                            alt="Logo BRIN"
                        />

                        <h1 className="font-medium text-5xl select-none hover:text-rose-500 transition duration-200 tracking-widest">
                            DSRSafe
                        </h1>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                        <Button asChild>
                            <Link to="/advisor">
                                Recommendation from ML-Model{" "}
                                <CircuitBoardIcon className="w-4 h-4 ml-2" />{" "}
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant={"outline"}
                            className="hover:bg-teal-400 hover:text-white"
                        >
                            <a
                                href="https://chatgpt.com/g/g-SijPNFjuw-dsrsafe-bot"
                                target="_blank"
                            >
                                Try OpenAI GPT{" "}
                                <ExternalLinkIcon className="w-4 h-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                </section>

                <section>
                    <p className="text-center text-sm text-slate-500">
                        Powered by IPLR BRIN
                    </p>
                </section>
            </main>
        </LandingPageLayout>
    );
};
