import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { tableLayoutData } from "../properties/t/data/tableLayout";
import { tabSizeData } from "../properties/t/data/tabSize";
import { textAlignData } from "../properties/t/data/textAlign";
import { textAlignLastData } from "../properties/t/data/textAlignLast";
import { textDecorationData } from "../properties/t/data/textDecoration";
import { textDecorationColorData } from "../properties/t/data/textDecorationColor";
import { textDecorationLineData } from "../properties/t/data/textDecorationLine";
import { textDecorationStyleData } from "../properties/t/data/textDecorationStyle";
import { textDecorationThicknessData } from "../properties/t/data/textDecorationThickness";
import { textEmphasisData } from "../properties/t/data/textEmphasis";
import { textEmphasisColorData } from "../properties/t/data/textEmphasisColor";
import { textEmphasisPositionData } from "../properties/t/data/textEmphasisPosition";
import { textEmphasisStyleData } from "../properties/t/data/textEmphasisStyle";
import { textIndentData } from "../properties/t/data/textIndent";
import { textOrientationData } from "../properties/t/data/textOrientation";
import { textOverflowData } from "../properties/t/data/textOverflow";
import { textShadowData } from "../properties/t/data/textShadow";
import { textTransformData } from "../properties/t/data/textTransform";
import { textUnderlineOffsetData } from "../properties/t/data/textUnderlineOffset";
import { textUnderlinePositionData } from "../properties/t/data/textUnderlinePosition";
import { topData } from "../properties/t/data/top";
import { transformData } from "../properties/t/data/transform";
import { transformOriginData } from "../properties/t/data/transformOrigin";
import { transformStyleData } from "../properties/t/data/transformStyle";
import { transitionData } from "../properties/t/data/transition";
import { transitionDelayData } from "../properties/t/data/transitionDelay";
import { transitionDurationData } from "../properties/t/data/transitionDuration";
import { transitionPropertyData } from "../properties/t/data/transitionProperty";
import { transitionTimingFunctionData } from "../properties/t/data/transitionTimingFunction";
import { translateData } from "../properties/t/data/translate";

import { propertiesStartWithTCourseInfo } from "./info/propertiesStartWithTInfo";

export const propertiesThatStartWithT: CourseProps = {
    name: "Propriedades CSS que começam com T",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        tabSizeData,
        tableLayoutData,
        textAlignData,
        textAlignLastData,
        textDecorationData,
        textDecorationColorData,
        textDecorationLineData,
        textDecorationStyleData,
        textDecorationThicknessData,
        textEmphasisData,
        textEmphasisColorData,
        textEmphasisPositionData,
        textEmphasisStyleData,
        textIndentData,
        textOrientationData,
        textOverflowData,
        textShadowData,
        textTransformData,
        textUnderlineOffsetData,
        textUnderlinePositionData,
        topData,
        transformData,
        transformOriginData,
        transformStyleData,
        transitionData,
        transitionDelayData,
        transitionDurationData,
        transitionPropertyData,
        transitionTimingFunctionData,
        translateData
    ]),
    info: propertiesStartWithTCourseInfo
}