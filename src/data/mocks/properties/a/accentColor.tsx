

export default function AccentColorTemplate ({ property }: {property: string}) {
    return (
        <div className="w-full h-auto flex items-center justify-center" style={{accentColor: 'yellow'}}>
            <div className="w-1/2 mx-auto flex flex-col gap-3">
                <input type="range" id="range" className="bg-yellow-200 text-red-500" style={{accentColor: property}} /> 
                <label htmlFor="range" className="inline-block text-secondary text-sm font-medium text-center bg-borderLine py-3 px-4 rounded-md w-fit mx-auto">
                    accent-color: {property}
                </label>
                <label htmlFor="range" className="font-outfit text-secondary text-base">Elemento pai tem accent-color como&nbsp;
                    <span className="inline-block bg-yellow-200 px-2 rounded-md text-secondary font-outfit text-sm font-bold">yellow</span>
                </label>
            </div>
        </div>
    )
}