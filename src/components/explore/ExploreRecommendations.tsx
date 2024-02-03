import { ExploreWebSchools } from "./ExploreWebSchools"

type Props = {
    firstLine: string
    secondLine: string
}
export const ExploreRecommendations = ({ firstLine, secondLine }: Props) => {
    return (
        <div className="w-full flex flex-col justify-center pt-32">
            <p className="font-outfit text-2xl font-normal text-body-100 text-center mb-10">{firstLine}<br />{secondLine}</p>
            <ExploreWebSchools />
        </div>
    )
}