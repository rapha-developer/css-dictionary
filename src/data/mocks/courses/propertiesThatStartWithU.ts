import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { unicodeBidiData } from "../properties/u/data/unicodeBidi";
import { userSelectData } from "../properties/u/data/userSelect";

import { propertiesStartWithUCourseInfo } from "./info/propertiesStartWithUInfo";

export const propertiesThatStartWithU: CourseProps = {
    name: "Propriedades CSS que começam com U",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        unicodeBidiData,
        userSelectData
    ]),
    info: propertiesStartWithUCourseInfo
}