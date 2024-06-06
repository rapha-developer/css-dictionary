import { PropertyValue } from "../../propertyData/PropertyInterfaces"

type Props = {
    values: PropertyValue[]
}
export const LectureValues = ({ values }: Props) => {
    return (
        <div className="flex flex-col gap-4 sm:gap-0 w-full border border-solid border-tertiary rounded-lg mb-10">
        {Array.isArray(values) && 
        values.length > 0 &&
        values.map((item, key) => {
            const isFirstValue = (key === 0) ? `` : 'border-t-2'
            const borders = `border-solid border-borderLine`
            return (
                <div className={`flex flex-col sm:flex-row w-full h-auto py-3 sm:py-0 min-h-16 ${isFirstValue} ${borders}`} key={item.value}>
                    <div className="sm:flex-1 max-w-48 flex flex-col sm:flex-row px-4 sm:px-0 sm:items-center justify-center">
                        <span className="font-outfit text-base font-bold text-secondary sm:text-center">{item.title}</span>   
                    </div>
                    <div className="sm:flex-1 flex items-center px-4 border-l border-solid border-secondary">
                        <p className="font-outfit text-base font-normal text-secondary">{item.value}</p>
                    </div>
                </div>
            )
        })
        }
    </div>
    )
}