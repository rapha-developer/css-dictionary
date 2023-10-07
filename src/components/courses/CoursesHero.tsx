import { Link } from "react-router-dom";
import { ArrowDownIcon } from "../../assets/ArrowDownIcon";

type Props = {
    titlePage: string
}
export const CoursesHero = ({ titlePage }: Props) => (
    <div className="collection-hero flex flex-col gap-3 h-[340px] md:h-[500px] justify-center sm:items-center">
        <ul className="flex gap-1 sm:items-center">
            <GenerateHomeLink optionLabel="home" />
            <li className="font-inter text-sm text-white ">
                <ArrowDownIcon classNames="w-5 h-5 -rotate-90" />
            </li>
            <li className="font-inter text-sm text-bold hero-gradient-courses fire-gradient-courses capitalize">
                {titlePage}
            </li>
        </ul>
        <h1 className="font-inter font-bold text-3xl md:text-6xl text-white capitalize z-10">
            {titlePage}
        </h1>
    </div>
);

const GenerateHomeLink = ({optionLabel}: { optionLabel: string }) => {
    return (
        <li className="font-inter text-sm text-white hover:text-white/80 hover:underline capitalize cursor-pointer">
            <Link to="/">
                {optionLabel}
            </Link>
        </li>
    )
}