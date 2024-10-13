import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";

import { marginData } from "../properties/m/data/margin";
import { marginBlockData } from "../properties/m/data/marginBlock";
import { marginBlockEndData } from "../properties/m/data/marginBlockEnd";
import { marginBlockStartData } from "../properties/m/data/marginBlockStart";
import { marginBottomData } from "../properties/m/data/marginBottom";
import { marginInlineData } from "../properties/m/data/marginInline";
import { marginInlineEndData } from "../properties/m/data/marginInlineEnd";
import { marginInlineStartData } from "../properties/m/data/marginInlineStart";
import { marginLeftData } from "../properties/m/data/marginLeft";
import { marginRightData } from "../properties/m/data/marginRight";
import { marginTopData } from "../properties/m/data/marginTop";
import { maxBlockSizeData } from "../properties/m/data/maxBlockSize";
import { maxHeightData } from "../properties/m/data/maxHeight";
import { maxInlineSizeData } from "../properties/m/data/maxInlineSize";
import { maxWidthData } from "../properties/m/data/maxWidth";
import { minBlockSizeData } from "../properties/m/data/minBlockSize";
import { minHeightData } from "../properties/m/data/minHeight";
import { minInlineSizeData } from "../properties/m/data/minInlineSize";
import { minWidthData } from "../properties/m/data/minWidth";
import { mixBlondeModeData } from "../properties/m/data/mixBlondeMode";

import { propertiesStartWithMCourseInfo } from "./info/propertiesStartWithMInfo";

export const propertiesThatStartWithM: CourseProps = {
    name: "Propriedades CSS que começam com M",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        marginData,
        marginBlockData,
        marginBlockEndData,
        marginBlockStartData,
        marginBottomData,
        marginInlineData,
        marginInlineEndData,
        marginInlineStartData,
        marginLeftData,
        marginRightData,
        marginTopData,
        maxHeightData,
        maxWidthData,
        maxBlockSizeData,
        maxInlineSizeData,
        minBlockSizeData,
        minInlineSizeData,
        minHeightData,
        minWidthData,
        mixBlondeModeData
    ]),
    info: propertiesStartWithMCourseInfo
}