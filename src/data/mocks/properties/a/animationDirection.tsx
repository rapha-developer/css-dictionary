
export default function AnimationDirectionTemplate({ property }: {property: string}) {
    return (
        <div className="flex flex-col gap-4" style={{animationDirection: "reverse"}}>
            <div className={`h-16 w-16 rounded-md background-hero mx-auto flex justify-center items-center animate-spin`}
            style={{animationDirection: property}}>
                <span className="font-outfit text-2xl font-semibold text-center text-body-200">01</span>
            </div>
            <p  className="font-outfit text-secondary text-base text-center">Elemento pai tem animation-direction como&nbsp;
                <span className="inline-block bg-yellow-200 px-2 rounded-md text-secondary font-outfit text-sm font-bold">reverse</span>
            </p>
            <p className="font-outfit text-secondary text-sm font-medium text-center bg-borderLine py-3 px-4 rounded-md w-fit mt-4 mx-auto">
                animation-direction: {property}
            </p>
        </div>
    )
}