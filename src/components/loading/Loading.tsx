import { RocketIcon } from "../../assets/icons/RocketIcon"

export const Loading = () => {
    const message = 'Carregando...'
    return (
        <div className="animate-bounce w-fit mx-auto">
            <div className="w-40 h-40 bg-body-200 border border-solid border-tertiary/30 box-shadow-widget-icon rounded-md flex flex-col gap-2 items-center justify-center ">
                <RocketIcon />
                <p className="font-outfit font-semibold text-secondary text-base text-center">{message}</p>
            </div>
        </div>
    )
}