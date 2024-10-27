import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { objectFitData } from "../properties/o/data/objectFit";
import { objectPositionData } from "../properties/o/data/objectPosition";
import { offsetPositionData } from "../properties/o/data/offsetPosition";
import { opacityData } from "../properties/o/data/opacity";
import { orderData } from "../properties/o/data/order";
import { outlineData } from "../properties/o/data/outline";
import { outlineOffsetData } from "../properties/o/data/outlineOffset";
import { overflowData } from "../properties/o/data/overflow";
import { overflowAnchorData } from "../properties/o/data/overflowAnchor";
import { overflowWrapData } from "../properties/o/data/overflowWrap";
import { overflowXData } from "../properties/o/data/overflowX";
import { overflowYData } from "../properties/o/data/overflowY";

import { propertiesStartWithOCourseInfo } from "./info/propertiesStartWithOInfo";

export const propertiesThatStartWithO: CourseProps = {
    name: "Propriedades CSS que começam com O",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        objectFitData,
        objectPositionData,
        offsetPositionData,
        opacityData,
        orderData,
        outlineData,
        outlineOffsetData,
        overflowData,
        overflowAnchorData,
        overflowWrapData,
        overflowXData,
        overflowYData
    ]),
    info: propertiesStartWithOCourseInfo
}