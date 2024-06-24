import { GlossaryProps } from "../../types/GlossaryProps";
import { Glossary } from "../entities/Glossary";

export class CreateGlossaryUseCase {
    constructor(
        private name: string,
        private terms: GlossaryProps['terms'],
        private id?: string
    ) {}

    execute(): Glossary {
        return new Glossary({
            id: this?.id,
            name: this.name,
            terms: this.terms,
        })
    }
}