import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { leftData } from "../properties/l/data/left";
import { letterSpacingData } from "../properties/l/data/letterSpacing";
import { lineHeightData } from "../properties/l/data/lineHeight";
import { listStyleData } from "../properties/l/data/listStyle";
import { listStyleImageData } from "../properties/l/data/listStyleImage";
import { listStylePositionData } from "../properties/l/data/listStylePosition";
import { listStyleTypeData } from "../properties/l/data/listStyleType";

import { propertiesStartWithLCourseInfo } from "./info/propertiesStartWithLInfo";

export const propertiesThatStartWithL: CourseProps = {
    name: "Propriedades CSS que começam com L",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        leftData,
        letterSpacingData,
        lineHeightData,
        listStyleData,
        listStyleImageData,
        listStylePositionData,
        listStyleTypeData
    ]),
    info: propertiesStartWithLCourseInfo
}