import { isString } from "lodash"

type Props = {
    heading: string
    firstText: string
    secondText?: string
}
export const LessonsCourseHeroOverview = ({ heading, firstText, secondText }: Props) => {
    return (
        <div className="flex flex-col gap-[10px] pt-2">
            <h2 className="font-outfit font-semibold text-[28px] text-secondary leading-10 capitalize">{heading}</h2>
            <p className="font-outfit text-base font-normal text-body-100 leading-7 mb-4 capitalize">{firstText}</p>
            {isString(secondText) && <p className="font-outfit text-base font-normal text-body-100 leading-7 mb-1 capitalize">{secondText}</p>}
        </div>
    )
}