import { CopyAndPasteTemplateProps } from "../../types/PropertyTemplateProps"

export const CopyAndPasteTemplate = ({ name, value }: CopyAndPasteTemplateProps) => {
    return (
        <p className="font-outfit text-secondary text-sm font-medium text-center bg-borderLine py-3 px-4 rounded-md w-fit mt-4 mx-auto">
            {name}: {value}
        </p>
    )
}