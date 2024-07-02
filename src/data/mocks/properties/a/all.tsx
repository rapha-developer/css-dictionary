import { CopyAndPasteTemplate } from "../../../../components/example/CopyAndPasteTemplate"
import { InheritTemplate } from "../../../../components/example/InheritTemplate"


export default function AllTemplate({ name, value }: {name: string, value: "initial" | "inherit" | "unset" | "revert" | "revert-layer"}) {
    const styles = {all: value}
    return (
        <div className="flex flex-col gap-3 font-mono text-base py-2">
            <p className="font-outfit text-lg text-secondary bg-yellow-200 text-center"
            style={styles}>Exemplo aqui...</p>
            <CopyAndPasteTemplate 
                name={name}
                value={value}
            />
            <InheritTemplate 
                inheritValue={'mono'}
                property={{name: name, value: value}}
            />
            <p className="flex justify-center">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/all#formal_definition"
                target="_blank"
                className="font-outfit text-sm font-bold text-primary hover:underline cursor-pointer rounded-md px-2 py-3">Leia mais</a>
            </p>
        </div>
    )
}
