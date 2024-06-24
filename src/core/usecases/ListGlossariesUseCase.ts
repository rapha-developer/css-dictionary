import { Glossary } from "../entities/Glossary";

export class ListGlossariesUseCase {
    constructor(private glossaries: Glossary[]) {}

    execute(): Glossary[] {
        return this.glossaries
    }
}