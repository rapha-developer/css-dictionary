import { Glossary } from "../../core/entities/Glossary";

export class GlossaryRepository {
    private glossaries: Glossary[] = []

    public create(glossary: Glossary) {
        this.glossaries.push(glossary)
    }

    public listAll(): Glossary[] {
        return this.glossaries
    }

    public findByName(glossaryName: string): Glossary | null {
        const glossary = this.glossaries.find((glossaryItem) => glossaryItem.name === glossaryName)
        
        if(!glossary) {
            return null
        }
        return glossary
    }
}