import { MagnifyingGlassIcon } from "../../assets/MagnifyingGlassIcon"
import { queryAtom } from "../../atoms"
import { useAtom } from 'jotai'
import type { ChangeEvent } from "react"
import { useCallback } from "react"
import _debounce from 'lodash/debounce'

export const HeaderSearchBar = () => {
    const [_, setQuery] = useAtom(queryAtom)
    const onChangeHandler = useCallback(
        _debounce((event: ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value)
        }, 500),
        []
    )
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center px-5 py-3 pointer-events-none rounded-md">
                <MagnifyingGlassIcon classNames="h-4 w-4 text-white font-semibold" />
            </div>
            <input type="search" 
                placeholder="Search css properties here..."
                onChange={onChangeHandler}
                className="p-2.5 pl-12 dark-gradient-component h-12 w-11/12 font-inter text-lg font-medium border-accent-100 rounded-lg focus-visible:outline-none"
            />
        </div>
    )
}