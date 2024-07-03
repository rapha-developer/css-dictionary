import { PropertyExampleProps,  PropertyValueProps } from "../../types/PropertyProps";

type genericPropertyValuesProps = {
    initial: PropertyValueProps,
    inherit: PropertyValueProps
}
export const genericPropertyValuesData: genericPropertyValuesProps = {
    initial: {
        name: "initial",
        value: "Define esta propriedade com seu valor padrão. Leia sobre initial no glossário"
    },
    inherit: {
        name: "inherit",
        value: "Herda esta propriedade de seu elemento pai. Leia sobre inherit no glossário"
    }
};

type genericPropertyExamplesProps = {
    initial: PropertyExampleProps,
    inherit: PropertyExampleProps 
}
export const genericPropertyExamplesData: genericPropertyExamplesProps = {
    initial: {
        name: "initial",
        code: "initial"
    },
    inherit: {
        name: "inherit",
        code: "inherit"
    }
}