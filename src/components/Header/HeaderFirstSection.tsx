import { BarIcon, CancelIcon } from "../../assets/icons"
import { Logo } from "../logo"

type Props = {
    hideMenu: boolean
    onHandler: any
}
export const HeaderFirstSection = ({ hideMenu, onHandler }: Props) => {
    return (
        <div className="w-full md:w-auto flex justify-between px-4 md:px-0">
            <Logo title="CSS Dictionary" />
            <button onClick={onHandler} className="md:hidden">
                {hideMenu && <BarIcon />}
                {!hideMenu && <CancelIcon />}
            </button>
        </div>
    )
}