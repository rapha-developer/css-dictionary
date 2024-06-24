import { Glossary } from "../core/entities/Glossary";
import { GlossaryTermViewModel } from "./GlossaryTermViewModel";


export class GlossaryViewModel {
    static viewGlossary(glossary: Glossary) {
        return {
            id: glossary.id,
            name: glossary.name,
            terms: glossary.terms.map((term) => GlossaryTermViewModel.viewGlossaryTerm(term))
        }
    }
}