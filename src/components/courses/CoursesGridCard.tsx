import { Property } from "../../types/propertyWithSlug"

type Props = {
    property: Property
}
export const CoursesGridCard = ({ property }: Props) => {
    return (
        <div className="sidebar-attributes flex flex-col items-center w-full max-w-xs h-full pt-4 pb-8 px-6 cursor-pointer transition-all hover:-translate-y-3">
            <img src="/css3Logo.png" 
                alt="CSS 3 Logo" 
                className="w-24 h-24 mb-8" />
            <h4 className="font-sans text-2xl font-semibold text-white text-center capitalize mb-5">{property.attributes.name}</h4>
            <p className="font-inter text-sm font-normal text-white text-center">{property.attributes.description}</p>
        </div>
    )
}