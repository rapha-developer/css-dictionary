
export default function AnimationTemplate({ property }: { property: string }) {
    const classNames = `h-12 w-12 rounded-md background-hero flex justify-center items-center animate-${property}`
    return (
        <div className={classNames}>
            <span className="font-outfit text-2xl font-semibold text-center text-body-200">01</span>
        </div>
    )
} 