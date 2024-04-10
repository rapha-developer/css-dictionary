import { paramsToLazyRoutes } from "../types/paramsToLazyRoutes"

export function paramsToBuildRoute(params: paramsToLazyRoutes) {
    if (params.lectureID?.charAt(0)) {
        const names = params.lectureID.split('-').map((item) => item.charAt(0).toLocaleUpperCase() + item.slice(1))
        const firstLetter = params.lectureID.charAt(0)
        const componentName = names.reduce((acc, current) => acc + current, '')
        
        return {
            firstLetter: firstLetter,
            componentName: componentName
        }
    }
    return {
        firstLetter: 'u',
        componentName: '404'
    }
}