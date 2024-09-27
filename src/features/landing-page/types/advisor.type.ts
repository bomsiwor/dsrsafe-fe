export interface IAdviceRecommendation {
    year: number;
    activityCi: number;
    activityBq: number;
    recommendation: string | null;
    reuseAdvice: string | null;
}

export interface IRadionuclideData {
    number: number;
    series: string;
    name: string;
    productionData: string;
    halfLife: number;
    initialActivity: number;
    dValue: number;
    ratioAD: number;
    wasteType: string;
    previousUsage: string;
}

export type TPredictionAdvice = {
    advices: IAdviceRecommendation[];
    radionuclidesData: IRadionuclideData[];
};
