import { IFetchError } from "@/types/fetch-error.type";
import { TPredictionAdvice } from "../types/advisor.type";

export async function getAdvicePrediction() {
    try {
        const response = await fetch("http://localhost:8000/api/get-advice-prediction", {
            method: "POST"
        });

        if (!response.ok) {
            const error = (await response.json()) as IFetchError;

            throw new Error(error.message);
        }

        const result = (await response.json()).data as TPredictionAdvice;

        return result;
    } catch (error) {
        throw new Error((error as Error).message);
    }
}
