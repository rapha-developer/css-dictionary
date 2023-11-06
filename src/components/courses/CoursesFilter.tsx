

export const CoursesFilter = () => {
    const filter = "alphabetic"
    return (
        <div className="ml-28 md:ml-32 flex flex-col sm:items-center mr-4 sm:mr-8 mb-10">
            <div className="sidebar-attributes w-full max-w-3xl py-2.5 flex justify-center">
                <button className="px-3 sm:px-6 py-4 btn-example font-inter font-bold text-base text-white rounded-xl text-center block uppercase hover:opacity-60">{filter}</button>
            </div>
        </div>
    )
}