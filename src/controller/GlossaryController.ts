import { Glossary } from "../core/entities/Glossary";
import { ListGlossariesUseCase } from "../core/usecases/ListGlossariesUseCase";
import { GlossaryRepository } from "../data/repositories/GlossaryRepository";

export class GlossaryController {
    constructor(
        private glossaryRepository: GlossaryRepository
    ) {}

    public listGlossaries(): Glossary[] {
        const listGlossariesUseCase = new ListGlossariesUseCase(
            this.glossaryRepository.listAll()
        );
        return listGlossariesUseCase.execute()
    }
}