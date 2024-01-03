
type Props = {
    text: string
}
export const UiBtnAnchor = ({ text }: Props) => {
    const handleClickScroll = () => {
        const element = document.getElementById(text)
        if(element) {
            element.scrollIntoView({ behavior: "smooth" })
        }
    }
    return (
        <button onClick={handleClickScroll} 
                className="rounded-md h-14 px-4 py-2 bg-accent-300 text-white font-inter font-semibold uppercase hover:btn-attributes">
            {text}
        </button>
    )
}