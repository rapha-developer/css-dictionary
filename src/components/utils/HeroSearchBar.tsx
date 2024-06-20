import { ChangeEvent, useCallback, useEffect, useState } from "react"
import _debounce from 'lodash/debounce'
import { controllerAtom, queryAtom } from "../../atoms"
import { useAtom } from "jotai"
import { MagnifyGlassIcon } from "../../assets/icons/MagnifyGlassIcon"
import { PropertyLink } from "../../core/entities/PropertyLink"
import { ArrowLongRight } from "../../assets/icons/ArrowLongRight"
import { NavLink } from "react-router-dom"


export const HeroSearchBar = () => {
    const [autocomplete, setAutocomplete] = useState<PropertyLink[] | []>([])
    const [query, setQuery] = useAtom(queryAtom)
    const [controllerData] = useAtom(controllerAtom)
    const onChangeHandler = useCallback(
        _debounce((event: ChangeEvent<HTMLInputElement>) => {
            setQuery(event.target.value)
        }, 500),
        []
    )
    useEffect(() => {
        if(query != "") {
            createAutocomplete()
        }
    }, [query])
    function createAutocomplete() {
        setAutocomplete(controllerData.autocompleteFindPropertyLink(query).execute())
    }

    return (
        <div className="mt-2 flex bg-white rounded-full">
            <div className="h-auto px-6 rounded-full bg-icon-widget-gold flex items-center">
                <MagnifyGlassIcon classNames="w-8 h-8 text-white font-bold" />
            </div>
            <div className="w-full relative">
                <input type="search" 
                    placeholder="Search css properties here..."
                    onChange={onChangeHandler}
                    className="py-[14px] px-4 bg-white h-12 max-w-md w-full font-outfit text-sm font-medium rounded-full indent-2 focus-visible:outline-none"
                />
                {autocomplete.length > 0 &&
                    <AutocompleteResponseList autocomplete={autocomplete} /> 
                }
            </div>
        </div>
    )
}

export const AutocompleteResponseList = ({ autocomplete }: {autocomplete: PropertyLink[] | []}) =>  {
    return (
        <ul className="absolute top-12 left-0 z-30 py-4 bg-white rounded-md w-[350px] autocomplete-box-shadow">
            {autocomplete.map((item, key) => (
                <AutocompleteResponseItem
                    key={key}
                    item={item}
                    itemKey={key}
                />
            ))}
        </ul>
    )
}

export const AutocompleteResponseItem = ({ item, itemKey }: { item: PropertyLink, itemKey: number}) => {
    const [controllerData] = useAtom(controllerAtom)
    const courseFounded = controllerData.listCourses().find((course) => course.id === item.courseID)
    const moduleFounded = courseFounded?.modules.find((module) => module.id === item.moduleID)
    return (
        <li className={(itemKey === 0) ? `bg-inherit py-[7px] px-5 overflow-hidden group`: `bg-inherit py-[7px] mx-5 overflow-hidden group border-t-[1px] border-borderLine`} 
            key={`autocomplete-${itemKey}`}>
            <NavLink to={`/courses/${item.courseID}/modules/${item.moduleID}`} 
            state={{"property": moduleFounded?.property}}
            className="font-outfit text-sm font-normal text-secondary group-hover:text-primary capitalize flex gap-2">
                {item.name}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center">
                    <ArrowLongRight classNames={`w-5 h-5 text-primary`} />
                </span>
            </NavLink>
        </li>
    )
}