
export default function AnimationDelayTemplate({ property }: { property: string }) {
    return (
        <div className={`h-12 w-12 rounded-md background-hero flex justify-center items-center animate-bounce`}
            style={{animationDelay: property}}>
            <span className="font-outfit text-2xl font-semibold text-center text-body-200">01</span>
        </div>
    )
} 