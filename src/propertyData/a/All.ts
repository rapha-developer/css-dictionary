import { Property } from "../Property";
import { PropertyExample, PropertyValue } from "../PropertyInterfaces";


export class All extends Property {
    protected readonly definition: string = "A propriedade all redefine todas as propriedades, exceto unicode-bidi e direção, para seus valores iniciais ou herdados."
    protected readonly values: PropertyValue[] = this.makeValues();
    protected readonly examples: PropertyExample[] = this.makeExamples();
    
    showDefinition(): string {
        return this.definition
    }
    makeValues(): PropertyValue[] {
        return [
            {
                title: 'initial',
                value: 'Altera todas as propriedades aplicadas ao elemento ou ao elemento pai para seu valor inicial'
            },
            {
                title: 'inherit',
                value: 'Altera todas as propriedades aplicadas ao elemento ou ao elemento pai para seu valor pai'
            },
            {
                title: 'unset',
                value: 'Altera todas as propriedades aplicadas ao elemento ou ao elemento pai para seu valor pai se forem herdáveis ​​ou para seu valor inicial se não forem'
            }
        ]
    } 
    makeExamples(): PropertyExample[] {
        return [
            {
                exampleId: "1",
                exampleTitle: "initial",
                exampleDescription: `<p class="font-outfit text-lg text-secondary bg-yellow-200 allExample1">Fist example</p>
                <style>
                    .allExample1 {
                        all: initial
                    }
                </style>
                `
            },
            {
                exampleId: "2",
                exampleTitle: "inherit",
                exampleDescription: `<p class="font-outfit text-lg text-secondary bg-yellow-200 allExample2">Fist example</p>
                <style>
                    .allExample2 {
                        all: inherit;
                    }
                </style>
                `
            },
            {
                exampleId: "3",
                exampleTitle: "unset",
                exampleDescription: `<p class="font-outfit text-lg text-secondary bg-yellow-200 allExample3">Fist example</p>
                <style>
                    .allExample3 {
                        all: unset;
                    }
                </style>
                `
            }, 
        ]
    }
    showValues(): PropertyValue[] {
        return this.values
    }
    showExamples(): PropertyExample[] {
        return this.examples
    }
}
// https://stackoverflow.com/questions/68823948/how-to-write-a-function-that-returns-an-array-of-objects-using-a-custom-interfac