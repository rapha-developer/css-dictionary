import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { resizeData } from "../properties/r/data/resize";
import { rightData } from "../properties/r/data/right";
import { rotateData } from "../properties/r/data/rotate";
import { rowGapData } from "../properties/r/data/rowGap";

import { propertiesStartWithRCourseInfo } from "./info/propertiesStartWithRInfo";

export const propertiesThatStartWithR: CourseProps = {
    name: "Propriedades CSS que começam com R",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        resizeData,
        rightData,
        rotateData,
        rowGapData
    ]),
    info: propertiesStartWithRCourseInfo
}