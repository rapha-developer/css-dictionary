

export const FooterText = ({ title, text }: {title: string, text: string}) => {    
    return (
        <div className="footer-text">
            <h3 className="font-outfit text-2xl text-white font-semibold leading-9 capitalize mb-6">
                {title}
            </h3>
            <p className="font-outfit text-base font-normal text-tertiary leading-7 capitalize max-w-[300px]">
                {text}
            </p>
        </div>
    )
}