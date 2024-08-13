import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { directionData } from "../properties/d/data/direction";
import { displayData } from "../properties/d/data/display";

import { propertiesStartWithDCourseInfo } from "./info/propertiesStartWithDInfo";

export const propertiesThatStartWithD: CourseProps = {
    name: "Propriedades CSS que começam com D",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        directionData,
        displayData
    ]),
    info: propertiesStartWithDCourseInfo
}