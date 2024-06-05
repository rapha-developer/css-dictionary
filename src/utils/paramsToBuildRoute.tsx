import { paramsToLazyRoutes } from "../types/paramsToLazyRoutes"

type paramsToBuildRouteTypes = {
    firstLetter: string
    propertyClassName: string
    propertyName: string
}
export function paramsToBuildRoute(params: paramsToLazyRoutes): paramsToBuildRouteTypes {
    if (params.lectureID?.charAt(0)) {
        const names = params.lectureID.split('-').map((item) => item.charAt(0).toLocaleUpperCase() + item.slice(1))
        const firstLetter = params.lectureID.charAt(0)
        const propertyClassName = names.reduce((acc, current) => acc + current, '')
        const propertyName = names.reduce((acc, current) => acc + ' ' + current, '')
        return {
            firstLetter: firstLetter,
            propertyClassName: propertyClassName,
            propertyName: propertyName
        }
    }
    return {
        firstLetter: 'u',
        propertyClassName: '404',
        propertyName: 'undefined' 
    }
}