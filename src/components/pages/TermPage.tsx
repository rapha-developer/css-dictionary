import { NavLink, useLocation, useNavigate } from "react-router-dom"
import { Header } from "../header"
import { useEffect, useState } from "react"
import { GlossaryTermProps } from "../../types/GlossaryProps"
import { ArrowLongLeft } from "../../assets/icons/ArrowLongLeft"
import { Hero404 } from "../utils/Hero404"

export const TermPage = () => {
    const navigate = useNavigate()
    const { state } = useLocation()
    const [glossaryTerm] = useState<GlossaryTermProps>(state?.term)
    const termExist = (glossaryTerm?.name) ? true : false

    useEffect(() => {
        setTimeout(() => {
            if(!glossaryTerm) {
                return navigate("/glossary")
            }
        }, 5000);
    }, [glossaryTerm, navigate])
    return (
        <div className="">
            <Header />
            <img src="/hero-main.png" 
                className="w-full max-h-[540px] object-cover"
            />
            {termExist &&
                <section className="bg-gradient-to-b from-body-200 from-10% via-white via-30% to-white to-90% pt-20 pb-32 h-fit">
                    <div className="container mx-auto">
                        <div className="flex flex-col gap-6 w-11/12 md:w-10/12 lg:max-w-3xl xl:max-w-4xl items-center justify-center mx-auto relative">
                            <div className="absolute top-1 left-0 w-auto h-8 flex justify-center items-center">
                                <NavLink to="/glossary" className="flex items-center gap-4 group">
                                    <ArrowLongLeft classNames="w-6 h-6 text-secondary hover:text-primary cursor-pointer" />
                                    <span className="font-outfit text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">Voltar para o glossário</span>
                                </NavLink>
                            </div>
                            <h2 className="font-outfit text-3xl font-semibold text-secondary border-b border-solid border-borderLine text-center capitalize w-full pb-4">
                                {glossaryTerm.name}
                            </h2>
                            <p className="font-outfit text-base font-normal leading-8 text-body-100 text-center mb-10">
                                {glossaryTerm.definition}
                            </p>
                            <h2 className="font-outfit text-3xl font-semibold text-secondary border-b border-solid border-borderLine text-center capitalize w-full pb-4">
                                {`referências`}
                            </h2>
                            <ul className="flex flex-col gap-4 w-full">
                            {Array.isArray(glossaryTerm.references) &&
                            glossaryTerm.references.length > 0 && 
                            glossaryTerm.references.map((reference) => (
                                <li className="reference-item" key={reference.name}>
                                    <a href={reference.url} 
                                        target="_blank"
                                        className="font-outfit text-base font-bold text-secondary hover:underline hover:text-primary flex items-center gap-3">
                                            <span className="block h-3 w-8 bg-primary rounded-lg"></span>{`O que é `}{reference.name}
                                        </a>
                                </li>
                            ))
                            }
                            </ul>
                        </div>
                    </div>
                </section>
            }
            {!termExist &&
            <Hero404 />
            }
        </div>
    )
}