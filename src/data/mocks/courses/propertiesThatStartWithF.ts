import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { filterData } from "../properties/f/data/filter";
import { flexData } from "../properties/f/data/flex";
import { flexBasisData } from "../properties/f/data/flexBasis";
import { flexDirectionData } from "../properties/f/data/flexDirection";
import { flexFlowData } from "../properties/f/data/flexFlow";
import { flexGrowData } from "../properties/f/data/flexGrow";
import { flexShrinkData } from "../properties/f/data/flexShrink";
import { flexWrapData } from "../properties/f/data/flexWrap";
import { floatData } from "../properties/f/data/float";
import { fontData } from "../properties/f/data/font";
import { fontFaceData } from "../properties/f/data/fontFace";
import { fontFamilyData } from "../properties/f/data/fontFamily";
import { fontSizeData } from "../properties/f/data/fontSize";
import { fontStretchData } from "../properties/f/data/fontStretch";
import { fontStyleData } from "../properties/f/data/fontStyle";
import { fontVariantData } from "../properties/f/data/fontVariant";
import { fontVariantCapsData } from "../properties/f/data/fontVariantCaps";
import { fontWeightData } from "../properties/f/data/fontWeight";

import { propertiesStartWithFCourseInfo } from "./info/propertiesStartWithFInfo";

export const propertiesThatStartWithF: CourseProps = {
    name: "Propriedades CSS que começam com F",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        filterData,
        flexData,
        flexBasisData,
        flexDirectionData,
        flexFlowData,
        flexGrowData,
        flexShrinkData,
        flexWrapData,
        floatData,
        fontData,
        fontFaceData,
        fontFamilyData,
        fontSizeData,
        fontStretchData,
        fontStyleData,
        fontVariantData,
        fontVariantCapsData,
        fontWeightData
    ]),
    info: propertiesStartWithFCourseInfo
}