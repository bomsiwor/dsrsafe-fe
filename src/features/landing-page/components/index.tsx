import { Label } from "@/components/ui/label";
import { LandingPageLayout } from "./layout";
import {
    Button,
    Input,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Skeleton,
    Slider,
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export const LandingPage = () => {
    // State
    const [years, setYear] = useState<number>(50);
    const [isLoading, setLoading] = useState<boolean>(false);

    // Static
    const SLIDER_STEP = 5;
    const recommendations = [];

    for (let index = 0; index < years / SLIDER_STEP; index++) {
        recommendations.push(
            <div className="rounded border border-slate-300 p-2 text-xs space-y-2">
                <div>
                    <h4>Year : {index}</h4>
                    <p>Activity : 0.004 Ci / 1271 GBq</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="border border-slate-300 rounded p-2">
                        <p className="font-medium">Reusability Advice</p>
                        <p>Riset and development</p>
                    </div>

                    <div className="border border-slate-300 rounded p-2">
                        <p className="font-medium">Further Recommendation</p>
                        <p>Don't waste it</p>
                    </div>
                </div>
            </div>
        );
    }

    // Actions
    function handleGenerateData() {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }

    return (
        <LandingPageLayout>
            <main className="rounded border-2 border-slate-300 p-4 space-y-4 shadow-sm shadow-slate-300 h-full max-h-full overflow-y-scroll">
                <section>
                    <h1 className="text-3xl font-medium">
                        Rekomendasi Pemanfaatan ZRA
                    </h1>
                </section>

                <section className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        <div>
                            <Label htmlFor="radionuclide">Radionuclide</Label>
                            <Select name="radionuclide">
                                <SelectTrigger>
                                    <SelectValue placeholder="Choose radionuclide..." />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">Co-60</SelectItem>
                                    <SelectItem value="dark">Cs-137</SelectItem>
                                    <SelectItem value="system">
                                        Am-241
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <Label htmlFor="initialActivity">
                                Initial Activity
                            </Label>
                            <Input
                                type="number"
                                id="initialActivity"
                                placeholder="Initial Activity on mCi"
                            />
                        </div>

                        <div>
                            <div className="mb-4">
                                <Label htmlFor="year">Years interval</Label>
                                <p className="text-sm">
                                    Current Value : {years} yr
                                </p>
                            </div>
                            <Slider
                                name="year"
                                defaultValue={[years]}
                                onValueChange={(value) => setYear(value[0])}
                                min={0}
                                max={150}
                                step={SLIDER_STEP}
                            />
                        </div>
                    </div>

                    <div>
                        <Button
                            size="sm"
                            onClick={() => handleGenerateData()}
                            disabled={isLoading}
                        >
                            {isLoading && (
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            )}{" "}
                            {isLoading ? "Please wait..." : "Generate Data"}
                        </Button>
                    </div>
                </section>

                <section>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 h-[500px] max-h-[600px]">
                        <div className="p-2 border border-slate-300 rounded order-last lg:order-first overflow-y-scroll">
                            {!isLoading ? (
                                <Table>
                                    <TableCaption>
                                        Data that inputted to model
                                    </TableCaption>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>ZRA Number</TableHead>
                                            <TableHead>Radionuclide</TableHead>
                                            <TableHead>Metadata</TableHead>
                                            <TableHead>
                                                Previous Usage
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell className="font-medium">
                                                1328 / CA-798
                                            </TableCell>
                                            <TableCell>Am-241</TableCell>
                                            <TableCell>
                                                <div className="text-sm">
                                                    <p>
                                                        <span className="text-slate-500 font-medium">
                                                            Production date
                                                        </span>
                                                        : 29-6-2022
                                                    </p>
                                                    <p>
                                                        <span className="text-slate-500 font-medium">
                                                            Half life
                                                        </span>{" "}
                                                        : 427 yr
                                                    </p>
                                                    <p>
                                                        <span className="text-slate-500 font-medium">
                                                            Initial Activity
                                                        </span>{" "}
                                                        : 1.43E-07 Ci / 5.28E-09
                                                        TBq
                                                    </p>
                                                    <p>
                                                        <span className="text-slate-500 font-medium">
                                                            D value
                                                        </span>{" "}
                                                        : 0.06
                                                    </p>
                                                    <p>
                                                        <span className="text-slate-500 font-medium">
                                                            Ratio A/D
                                                        </span>{" "}
                                                        : 8.81E-08
                                                    </p>
                                                    <p>
                                                        <span className="text-slate-500 font-medium">
                                                            Waste type
                                                        </span>{" "}
                                                        : Padat/Sb. Bekas
                                                    </p>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                Research & Development
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            ) : (
                                <div className="space-y-4">
                                    <Skeleton className="h-[50px]" />
                                    <Skeleton className="h-[100px]" />
                                </div>
                            )}
                        </div>

                        <div className="p-4 border border-slate-300 rounded overflow-y-scroll">
                            <div>
                                {isLoading ? (
                                    <div className="space-y-4">
                                        <Skeleton className="h-[40px]" />
                                        <Skeleton className="h-[80px]" />
                                        <Skeleton className="h-[80px]" />
                                    </div>
                                ) : (
                                    <div>
                                        <h3 className="text-xl font-medium">
                                            Reusability advice from model
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            Result are generated by model using
                                            data from our database
                                        </p>

                                        <div className="space-y-2">
                                            {recommendations}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </LandingPageLayout>
    );
};
