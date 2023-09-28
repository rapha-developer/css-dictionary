import { ArrowDownIcon } from "../../assets/ArrowDownIcon"

type Props = {
    title: string
    subtitle: string
    description: string
}

export const Hero = ({ title, subtitle, description }: Props) => {
    return (
        <div className="ml-28 md:ml-32 mt-36 mb-44">
            <span className="font-inter font-semibold uppercase text-teal-400 block mb-4">{subtitle}</span>
            <h1 className="font-inter text-3xl md:text-5xl lg:text-6xl font-bold text-white capitalize mb-5">
                {title}
            </h1>
            <p className="font-inter text-base font-medium text-white w-full max-w-xl mb-8">
                {description}
            </p>
            <button className="px-6 py-4 btn-example font-inter font-bold text-base text-white rounded-xl text-center flex capitalize hover:opacity-60">Check properties <ArrowDownIcon classNames="w-6 h-6 ml-4"/></button>
        </div>
    )
}