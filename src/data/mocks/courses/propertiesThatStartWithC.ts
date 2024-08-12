import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { captionSideData } from "../properties/c/data/captionSide";
import { caretColorData } from "../properties/c/data/caretColor";
import { charsetData } from "../properties/c/data/charset";
import { clearData } from "../properties/c/data/clear";
import { clipPathData } from "../properties/c/data/clipPath";
import { colorData } from "../properties/c/data/color";
import { colorSchemeData } from "../properties/c/data/colorScheme";
import { columnCountData } from "../properties/c/data/columnCount";
import { columnFillData } from "../properties/c/data/columnFill";
import { columnGapData } from "../properties/c/data/columnGap";
import { columnRuleData } from "../properties/c/data/columnRule";
import { columnsData } from "../properties/c/data/columns";
import { columnSpanData } from "../properties/c/data/columnSpan";
import { columnWidthData } from "../properties/c/data/columnWidth";
import { contentData } from "../properties/c/data/content";
import { cursorData } from "../properties/c/data/cursor";

import { propertiesStartWithCCourseInfo } from "./info/propertiesStartWithCInfo";

export const propertiesThatStartWithC: CourseProps = {
    name: "Propriedades CSS que começam com C",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        captionSideData,
        caretColorData,
        charsetData,
        clearData,
        clipPathData,
        colorData,
        colorSchemeData,
        columnCountData,
        columnFillData,
        columnGapData,
        columnRuleData,
        columnSpanData,
        columnWidthData,
        columnsData,
        contentData,
        cursorData
    ]),
    info: propertiesStartWithCCourseInfo
}