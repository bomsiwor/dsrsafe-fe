export interface IAdviceRecommendation {
    year: number;
    activityCi: number;
    activityBq: number;
    recommendation: string | null;
    reuseAdvice: string | null;
}

export interface IRadionuclideData {
    number: number;
    series: string | null;
    name: string;
    productionData: string | null;
    halfLife: number | null;
    initialActivity: number | null;
    dValue: number | null;
    ratioAD: number | null;
    wasteType: string | null;
    previousUsage: string | null;
}

export type TPredictionAdvice = {
    advices: IAdviceRecommendation[];
    radionuclidesData: IRadionuclideData[];
};
