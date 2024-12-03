import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { zIndexData } from "../properties/z/data/zIndex";
import { zoomData } from "../properties/z/data/zoom";

import { propertiesStartWithZCourseInfo } from "./info/propertiesStartWithZInfo";

export const propertiesThatStartWithZ: CourseProps = {
    name: "Propriedades CSS que começam com Z",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        zIndexData,
        zoomData
    ]),
    info: propertiesStartWithZCourseInfo
}