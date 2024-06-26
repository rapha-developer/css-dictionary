import { useAtom } from "jotai"
import { Header } from "../header"
import { GlossaryHero } from "../sections/GlossaryHero"
import { glossaryControllerAtom } from "../../atoms/glossary"
import { GlossaryViewModel } from "../../view-models/GlossaryViewModel"
import { Footer } from "../footer/Footer"

export const GlossaryPage = () => {
    const [glossaryControllerData] = useAtom(glossaryControllerAtom)
    const glossaries = glossaryControllerData.listGlossaries().map((glossary) => GlossaryViewModel.viewGlossary(glossary))

    return (
        <div className="">
            <Header />
            <img src="/hero-main.png" 
                className="w-full max-h-[540px] object-cover"
            />
            <div className="bg-gradient-to-b from-body-200 from-10% via-white via-30% to-white to-90% h-auto w-full">
            {Array.isArray(glossaries) &&
            glossaries.length > 0 &&
            glossaries.map((glossary) => (
                <GlossaryHero 
                    key={glossary.id}
                    name={glossary.name}
                    terms={glossary.terms}
                />
            ))
            }
            </div>
            <Footer />
        </div>
    )
}