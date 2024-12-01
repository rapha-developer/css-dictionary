import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { whiteSpaceData } from "../properties/w/data/whiteSpace";
import { widthData } from "../properties/w/data/width";
import { windowsData } from "../properties/w/data/windows";
import { wordBreakData } from "../properties/w/data/wordBreak";
import { wordSpacingData } from "../properties/w/data/wordSpacing";
import { wordWrapData } from "../properties/w/data/wordWrap";
import { writingModeData } from "../properties/w/data/writingMode";

import { propertiesStartWithWCourseInfo } from "./info/propertiesStartWithWInfo";

export const propertiesThatStartWithW: CourseProps = {
    name: "Propriedades CSS que começam com W",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        whiteSpaceData,
        windowsData,
        widthData,
        wordBreakData,
        wordSpacingData,
        wordWrapData,
        writingModeData
    ]),
    info: propertiesStartWithWCourseInfo
}