import { ChangeEvent, useCallback } from "react"
import _debounce from 'lodash/debounce'
import { MagnifyingGlassIcon } from "../../assets/icons/MagnifyingGlassIcon"
import { useAtom } from "jotai"
import { queryAtom } from "../../atoms"

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
                <MagnifyingGlassIcon classNames="h-4 w-4 text-primary-100 font-semibold" />
            </div>
            <input type="search" 
                placeholder="Search properties"
                onChange={onChangeHandler}
                className="p-2.5 pl-12 bg-white h-12 w-full font-red-hart text-lg font-medium text-primary-500 border-none rounded-lg focus-visible:outline-none"
            />
        </div>
    )
}