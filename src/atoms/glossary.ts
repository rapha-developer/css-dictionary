import { atom } from "jotai";
import { GlossaryController } from "../controller/GlossaryController";
import { CreateGlossaryUseCase } from "../core/usecases/CreateGlossaryUseCase";
import { allGlossaries } from "../data/mocks/allGlossaries";
import { GlossaryRepository } from "../data/repositories/GlossaryRepository";

const glossaryRepository = new GlossaryRepository()

allGlossaries.map((glossary) => {
    const glossaryUseCase = new CreateGlossaryUseCase(
        glossary.name,
        glossary.terms
    );
    glossaryRepository.create(glossaryUseCase.execute())
});

const glossaryController = new GlossaryController(
    glossaryRepository
);

export const glossaryControllerAtom = atom<GlossaryController>(glossaryController)