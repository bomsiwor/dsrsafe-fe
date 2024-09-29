import { IAdviceRecommendation } from "../types/advisor.type";

export const RecommendationAdviceRow = (props: IAdviceRecommendation) => {
    return (
        <div>
            <div className="rounded border border-slate-300 p-2 text-xs space-y-2">
                <div>
                    <div className="space-y-2">
                        {props.year >= 35 && (
                            <div className="text-rose-500 font-medium text-[7pt] border border-rose-500 py-1 px-2 rounded transition duration-200 hover:text-white hover:bg-rose-500 cursor-default select-none">
                                Melebihi 35 tahun perlu ada pengkajian .....
                            </div>
                        )}

                        <p>Year : {props.year ?? "-"}</p>
                    </div>
                    <p>
                        Activity : {`${props.activityCi || "-"} Ci`} /
                        {`${props.activityBq || "-"} Bq`}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                    <div className="border border-slate-300 rounded p-2">
                        <p className="font-medium">Reusability Advice</p>
                        <p>{props.reuseAdvice || "-"}</p>
                    </div>
                    <div className="border border-slate-300 rounded p-2">
                        <p className="font-medium">Further Recommendation</p>
                        <p className="text-justify">
                            {props.recommendation || "-"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
