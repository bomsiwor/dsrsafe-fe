import {
    Alert,
    AlertDescription,
    AlertTitle,
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
    Label,
} from "@/components/ui";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { atom, useAtom } from "jotai";
import { AlertCircle, Loader2 } from "lucide-react";

import { AdviceRecommendationLayout } from "./layout.advice";
import { RecommendationAdviceCard } from "./recommendation-card.advice";
import { RecommendationAdviceRow } from "./recommendation-row.advice";

import { getAdvicePrediction } from "../services/get-advice-prediction";

import { TPredictionAdvice } from "../types/advisor.type";

const advicePredictionAtom = atom<TPredictionAdvice | null>(null);

export const AdviceRecommendation = () => {
    // State
    const [years, setYear] = useState<number>(50);

    // Atom
    const [advicePrediction, setAdvicePrediction] =
        useAtom(advicePredictionAtom);

    // Static
    const SLIDER_STEP = 5;

    // Actions
    // Use mutate from react query
    function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const payload = {
            radionuclide: form.get("radionuclide"),
            initialActivity: form.get("initialActivity"),
            year: form.get("year"),
        };

        console.log(payload);
    }

    const {
        isPending: isLoading,
        mutate: handleGenerateData,
        error,
        isError,
    } = useMutation({
        mutationKey: ["adviceRecommendation"],
        mutationFn: getAdvicePrediction,
        onSuccess: (data) => {
            setAdvicePrediction(data);
        },
    });

    return (
        <AdviceRecommendationLayout>
            <main className="h-full max-h-[80vh] space-y-4 overflow-y-scroll rounded border-2 border-slate-300 p-4 font-fira shadow-sm shadow-slate-300">
                <section>
                    <h1 className="text-3xl font-medium">
                        Rekomendasi Pemanfaatan ZRA
                    </h1>
                </section>

                <section className="space-y-4">
                    {/* Alert Error */}
                    {isError && (
                        <Alert variant="destructive">
                            <AlertCircle className="h-4 w-4" />
                            <AlertTitle>Error</AlertTitle>
                            <AlertDescription>{error.message}</AlertDescription>
                        </Alert>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                            <div>
                                <Label htmlFor="radionuclide">
                                    Radionuclide
                                </Label>
                                <Select name="radionuclide">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Choose radionuclide..." />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="light">
                                            Co-60
                                        </SelectItem>
                                        <SelectItem value="dark">
                                            Cs-137
                                        </SelectItem>
                                        <SelectItem value="system">
                                            Am-241
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <Label htmlFor="initialActivity">
                                    Initial Activity (mCi)
                                </Label>
                                <Input
                                    type="number"
                                    id="initialActivity"
                                    name="initialActivity"
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
                                type="submit"
                                onClick={() => handleGenerateData()}
                                disabled={isLoading}
                            >
                                {isLoading && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}{" "}
                                {isLoading ? "Please wait..." : "Generate Data"}
                            </Button>
                        </div>
                    </form>
                </section>

                <section>
                    <div className="grid h-full max-h-[380px] grid-cols-1 gap-2 p-4 lg:grid-cols-2">
                        <div className="order-last h-full max-h-[95%] overflow-y-scroll rounded border border-slate-300 p-2 lg:order-first">
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
                                                        <span className="font-medium text-slate-500">
                                                            Production date
                                                        </span>
                                                        : 29-6-2022
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            Half life
                                                        </span>{" "}
                                                        : 427 yr
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            Initial Activity
                                                        </span>{" "}
                                                        : 1.43E-07 Ci / 5.28E-09
                                                        TBq
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            D value
                                                        </span>{" "}
                                                        : 0.06
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            Ratio A/D
                                                        </span>{" "}
                                                        : 8.81E-08
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
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
                                        <TableRow>
                                            <TableCell className="font-medium">
                                                1328 / CA-798
                                            </TableCell>
                                            <TableCell>Am-241</TableCell>
                                            <TableCell>
                                                <div className="text-sm">
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            Production date
                                                        </span>
                                                        : 29-6-2022
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            Half life
                                                        </span>{" "}
                                                        : 427 yr
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            Initial Activity
                                                        </span>{" "}
                                                        : 1.43E-07 Ci / 5.28E-09
                                                        TBq
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            D value
                                                        </span>{" "}
                                                        : 0.06
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
                                                            Ratio A/D
                                                        </span>{" "}
                                                        : 8.81E-08
                                                    </p>
                                                    <p>
                                                        <span className="font-medium text-slate-500">
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

                        <div className="h-full max-h-[95%] overflow-y-scroll rounded border border-slate-300 p-4">
                            <div>
                                {isLoading && (
                                    <div className="space-y-4">
                                        <Skeleton className="h-[40px]" />
                                        <Skeleton className="h-[80px]" />
                                        <Skeleton className="h-[80px]" />
                                    </div>
                                )}

                                {!isLoading && (
                                    <RecommendationAdviceCard>
                                        {advicePrediction?.advices.map(
                                            (item, index) => {
                                                return (
                                                    <RecommendationAdviceRow
                                                        {...item}
                                                        key={index}
                                                    />
                                                );
                                            }
                                        )}
                                    </RecommendationAdviceCard>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </AdviceRecommendationLayout>
    );
};
