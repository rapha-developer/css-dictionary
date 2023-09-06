
export const ErrorCard = () => {
    return (
        <div className="px-6 pt-4 pb-10 w-64 h-auto bg-white rounded-xl flex flex-col">
            <header className="flex justify-center mb-auto">
                <img src="/error-dog.svg" 
                    alt="illustration: Dog with 404 error" 
                    className="w-44 h-52"
                />
            </header>
            <div className="flex flex-col gap-3 justify-center">
                <h3 className="propertyCard-name text-primary-100 text-center cursor-none">Not found property</h3>
            </div>
        </div>
    )
}