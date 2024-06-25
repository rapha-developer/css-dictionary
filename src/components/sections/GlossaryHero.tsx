import { NavLink } from "react-router-dom"
import { GlossaryProps } from "../../types/GlossaryProps"
import { HeadingHero } from "../utils/HeadingHero"
import { DocumentIcon } from "../../assets/icons/DocumentIcon"
import { ArrowLongRight } from "../../assets/icons/ArrowLongRight"

export const GlossaryHero = ({ name, terms }: GlossaryProps) => {
    return (
        <section className="glossary-hero py-4 mb-8">
            <div className="container mx-auto flex flex-col justify-center">
                <HeadingHero 
                    subtitle="Glossary"
                    title={name}
                    description={{
                        head: "",
                        body: ""
                    }}
                />
                <ul className="flex flex-wrap gap-2 justify-center sm:gap-4 -mt-5">
                    {Array.isArray(terms) &&
                        terms.length > 0 &&
                        terms.map((term, key) => {
                            const colors = ["red", "purple", "pink", "emerald", "gold"]
                            const id = `${term.name}-${key}`
                            return (
                                <NavLink to={`/glossary/${term.name}`} state={{"term": term}} key={id}>
                                    <li className="bg-grey-400 py-8 px-8 rounded-[10px] hover:bg-primary flex flex-col gap-4 group h-auto">
                                        <div className={`bg-icon-widget bg-icon-widget-${colors[makeColorIDBelowFive(key)]} rounded-full flex items-center justify-center box-shadow-widget-icon`}>
                                            <DocumentIcon 
                                                classNames="w-8 h-8 text-white"
                                            />
                                        </div>
                                        <p className="font-outfit font-semibold text-xl text-secondary text-center group-hover:text-white">{term.name}</p>
                                        <ArrowLongRight classNames="mx-auto w-8 h-8 text-primary group-hover:text-white"/>
                                    </li>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
function makeColorIDBelowFive(colorID: number): number {
    let newColorID = 0;
    while(colorID > 4) {
        colorID -= 4;
    }
    newColorID = colorID
    return newColorID
}
