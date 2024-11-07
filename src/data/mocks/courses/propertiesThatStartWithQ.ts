import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { quotesData } from "../properties/q/data/quotes";

import { propertiesStartWithQCourseInfo } from "./info/propertiesStartWithQInfo";

export const propertiesThatStartWithQ: CourseProps = {
    name: "Propriedades CSS que começam com Q",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        quotesData
    ]),
    info: propertiesStartWithQCourseInfo
}