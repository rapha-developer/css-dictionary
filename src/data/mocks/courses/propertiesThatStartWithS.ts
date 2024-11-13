import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { scaleData } from "../properties/s/data/scale";
import { scrollbarColorData } from "../properties/s/data/scrollbarColor";
import { scrollBehaviorData } from "../properties/s/data/scrollBehavior";

import { propertiesStartWithSCourseInfo } from "./info/propertiesStartWithSInfo";

export const propertiesThatStartWithS: CourseProps = {
    name: "Propriedades CSS que começam com S",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        scaleData,
        scrollBehaviorData,
        scrollbarColorData
    ]),
    info: propertiesStartWithSCourseInfo
}