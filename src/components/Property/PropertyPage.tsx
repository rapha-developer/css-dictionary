import { useParams } from "react-router-dom"


export const PropertyPage = () => {
    const { id } = useParams<{id: string}>()
    return (
        <div className="rounded-xl bg-white w-auto mx-4 md:mx-10 py-3 px-4">
            <h1 className="font-inter font-medium text-primary-200">Property ID: {id}</h1>
        </div>
    )
}