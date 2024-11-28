import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { verticalAlignData } from "../properties/v/data/verticalAlign";
import { visibilityData } from "../properties/v/data/visibility";

import { propertiesStartWithVCourseInfo } from "./info/propertiesStartWithVInfo";

export const propertiesThatStartWithV: CourseProps = {
    name: "Propriedades CSS que começam com V",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        verticalAlignData,
        visibilityData
    ]),
    info: propertiesStartWithVCourseInfo
}