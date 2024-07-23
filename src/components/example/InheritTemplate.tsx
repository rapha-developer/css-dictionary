import { InheritTemplateProps } from "../../types/PropertyTemplateProps";

export const InheritTemplate = ({ property, inheritValue }: InheritTemplateProps) => {
    return (
        <p  className="font-outfit text-secondary text-base text-center mt-4">Elemento pai tem {property.name.replace(/\s/g, '-')} como&nbsp;
            <span className="inline-block bg-yellow-200 px-2 rounded-md text-secondary font-outfit text-sm font-bold">{inheritValue}</span>
        </p>
    )
}