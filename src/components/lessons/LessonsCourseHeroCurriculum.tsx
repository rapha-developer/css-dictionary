
type Props = {
    heading: string
    description: string
}
export const LessonsCourseHeroCurriculum = ({ heading, description }: Props) => {
    return (
        <div className="flex flex-col gap-[10px] pt-8">
            <h2 className="font-outfit font-semibold text-[28px] text-secondary leading-10 capitalize">{heading}</h2>
            <p className="font-outfit text-base font-normal text-body-100 leading-7 mb-5 capitalize">{description}</p>
        </div>
    )
}