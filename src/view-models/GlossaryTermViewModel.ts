import { GlossaryTerm } from "../core/entities/GlossaryTerm";

export class GlossaryTermViewModel {
    static viewGlossaryTerm(glossaryItem: GlossaryTerm) {
        return {
            id: glossaryItem.id,
            definition: glossaryItem.definition,
            name: glossaryItem.name,
            references: glossaryItem.references
        }
    }
}