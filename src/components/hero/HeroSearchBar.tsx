import { ChangeEvent, useCallback } from "react"
import _debounce from 'lodash/debounce'
import { MagnifyGlassIcon } from "../../assets/icons"
import { useAtom } from "jotai"
import { queryAtom } from "../../atoms"

export const HeroSearchBar = () => {
    const [_, setQuery] = useAtom(queryAtom)
    const onChangeHandler = useCallback(
        _debounce((event: ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value)
        }, 500),
        []
    )
    return (
        <div className="mt-2 flex bg-white rounded-full">
            <div className="h-auto px-6 rounded-full bg-icon-widget-gold flex items-center">
                <MagnifyGlassIcon />
            </div>
            <input type="search" 
                placeholder="Search css properties here..."
                onChange={onChangeHandler}
                className="py-[14px] px-4 bg-white h-12 w-11/12 font-outfit text-sm font-medium rounded-full indent-2 focus-visible:outline-none"
            />
        </div>
    )
}

