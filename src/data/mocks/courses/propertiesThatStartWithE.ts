import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { emptyCellsData } from "../properties/e/data/emptyCells";

import { propertiesStartWithECourseInfo } from "./info/propertiesStartWithEInfo";

export const propertiesThatStartWithE: CourseProps = {
    name: "Propriedades CSS que começam com E",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        emptyCellsData
    ]),
    info: propertiesStartWithECourseInfo
}