import { CalendarIcon } from "../../assets/icons/CalendarIcon"

type Props = {
    lastUpdate: string
}
export const LessonsCourseHeroUpdate = ({ lastUpdate }: Props) => {
    const messageUpdate = `last updated ${lastUpdate}`
    return (
        <div className="lessonHero-update flex gap-[5px] items-center">
            <CalendarIcon />
            <span className="inline-block font-outfit font-normal text-base text-body-100 leading-7 cursor-none capitalize">{messageUpdate}</span>
        </div>
    )
}