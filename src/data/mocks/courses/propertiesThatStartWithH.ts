import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { heightData } from "../properties/h/data/height";
import { hyphensData } from "../properties/h/data/hyphens";

import { propertiesStartWithHCourseInfo } from "./info/propertiesStartWithHInfo";

export const propertiesThatStartWithH: CourseProps = {
    name: "Propriedades CSS que começam com H",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        heightData,
        hyphensData
    ]),
    info: propertiesStartWithHCourseInfo
}