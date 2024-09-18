import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { justifyContentData } from "../properties/j/data/justifyContent";
import { justifyItemsData } from "../properties/j/data/justifyItems";
import { justifySelfData } from "../properties/j/data/justifySelf";

import { propertiesStartWithJCourseInfo } from "./info/propertiesStartWithJInfo";

export const propertiesThatStartWithJ: CourseProps = {
    name: "Propriedades CSS que começam com J",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        justifyContentData,
        justifyItemsData,
        justifySelfData
    ]),
    info: propertiesStartWithJCourseInfo
}