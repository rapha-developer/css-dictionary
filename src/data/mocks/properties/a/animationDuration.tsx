
export default function animationDurationTemplate({ property }: {property: string}) {
    return (
        <div className="flex flex-col gap-4" style={{animationDuration: "2s"}}>
            <div className={`mx-auto h-12 w-12 rounded-md background-hero flex justify-center items-center animate-spin`}
            style={{animationDuration: property}}>
                <span className="font-outfit text-2xl font-semibold text-center text-body-200">01</span>
            </div>
            <p  className="font-outfit text-secondary text-base text-center">Elemento pai tem animation-duration como&nbsp;
                <span className="inline-block bg-yellow-200 px-2 rounded-md text-secondary font-outfit text-sm font-bold">2 segundos</span>
            </p>
            <p className="font-outfit text-secondary text-sm font-medium text-center bg-borderLine py-3 px-4 rounded-md w-fit mt-4 mx-auto">
                animation-duration: {property}
            </p>
        </div>
    )
}