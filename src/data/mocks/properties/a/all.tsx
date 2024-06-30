

export default function AllTemplate({ property }: {property: "initial" | "inherit" | "unset" | "revert" | "revert-layer"}) {
    const styles = {all: property}
    return (
        <div className="flex flex-col gap-3 font-mono text-base py-2">
            <p className="font-outfit text-lg text-secondary bg-yellow-200 text-center"
            style={styles}>Exemplo aqui...</p>
            <p className="font-outfit text-secondary text-sm font-medium text-center bg-borderLine py-3 px-4 rounded-md w-fit mx-auto">
                all: {property}
            </p>
            <p  className="font-outfit text-secondary text-base">Elemento pai tem font-family como&nbsp;
                <span className="inline-block bg-yellow-200 px-2 rounded-md text-secondary font-outfit text-sm font-bold">mono</span>
            </p>
            <p className="flex justify-center">
                <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/all#formal_definition"
                target="_blank"
                className="font-outfit text-sm font-bold text-primary hover:underline cursor-pointer rounded-md px-2 py-3">Leia mais</a>
            </p>
        </div>
    )
}
