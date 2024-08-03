import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { backdropFilterData } from "../properties/b/data/backdropFilter";
import { backfaceVisibilityData } from "../properties/b/data/backfaceVisibility";
import { backgroundData } from "../properties/b/data/background";
import { backgroundAttachmentData } from "../properties/b/data/backgroundAttachment";
import { backgroundBlendModeData } from "../properties/b/data/backgroundBlendMode";
import { backgroundClipData } from "../properties/b/data/backgroundClip";
import { backgroundColorData } from "../properties/b/data/backgroundColor";
import { backgroundImageData } from "../properties/b/data/backgroundImage";
import { backgroundOriginData } from "../properties/b/data/backgroundOrigin";
import { backgroundPositionData } from "../properties/b/data/backgroundPosition";
import { backgroundPositionXData } from "../properties/b/data/backgroundPositionX";
import { backgroundPositionYData } from "../properties/b/data/backgroundPositionY";
import { backgroundRepeatData } from "../properties/b/data/backgroundRepeat";
import { backgroundSizeData } from "../properties/b/data/backgroundSize";
import { blockSizeData } from "../properties/b/data/blockSize";
import { borderData } from "../properties/b/data/border";
import { borderBlockData } from "../properties/b/data/borderBlock";
import { borderBlockEndData } from "../properties/b/data/borderBlockEnd";
import { borderBlockStartData } from "../properties/b/data/borderBlockStart";
import { borderBottomData } from "../properties/b/data/borderBottom";
import { borderBottomLeftRadiusData } from "../properties/b/data/borderBottomLeftRadius";
import { borderBottomRightRadiusData } from "../properties/b/data/borderBottomRightRadius";
import { borderCollapseData } from "../properties/b/data/borderCollapse";
import { borderImageData } from "../properties/b/data/borderImage";
import { borderInlineData } from "../properties/b/data/borderInline";
import { borderInlineEndData } from "../properties/b/data/borderInlineEnd";
import { borderInlineStartData } from "../properties/b/data/borderInlineStart";
import { borderLeftData } from "../properties/b/data/borderLeft";
import { borderRadiusData } from "../properties/b/data/borderRadius";
import { borderRightData } from "../properties/b/data/borderRight";
import { borderSpacingData } from "../properties/b/data/borderSpacing";
import { borderStartEndRadiusData } from "../properties/b/data/borderStartEndRadius";
import { borderStartStartRadiusData } from "../properties/b/data/borderStartStartRadius";
import { borderTopData } from "../properties/b/data/borderTop";
import { borderTopLeftRadiusData } from "../properties/b/data/borderTopLeftRadius";
import { borderTopRightRadiusData } from "../properties/b/data/borderTopRightRadius";
import { bottomData } from "../properties/b/data/bottom";
import { boxDecorationBreakData } from "../properties/b/data/boxDecorationBreak";
import { boxReflectData } from "../properties/b/data/boxReflect";
import { boxShadowData } from "../properties/b/data/boxShadow";
import { boxSizingData } from "../properties/b/data/boxSizing";

import { propertiesStartWithBCourseInfo } from "./info/propertiesStartWithBInfo";

export const propertiesThatStartWithB: CourseProps = {
    name: "Propriedades CSS que começam com B",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        backdropFilterData,
        backfaceVisibilityData,
        backgroundData,
        backgroundAttachmentData,
        backgroundBlendModeData,
        backgroundClipData,
        backgroundColorData,
        backgroundImageData,
        backgroundOriginData,
        backgroundPositionData,
        backgroundPositionXData,
        backgroundPositionYData,
        backgroundRepeatData,
        backgroundSizeData,
        blockSizeData,
        borderData,
        borderBlockData,
        borderBlockEndData,
        borderBlockStartData,
        borderBottomData,
        borderBottomLeftRadiusData,
        borderBottomRightRadiusData,
        borderCollapseData,
        borderImageData,
        borderInlineData,
        borderInlineEndData,
        borderInlineStartData,
        borderLeftData,
        borderRadiusData,
        borderRightData,
        borderSpacingData,
        borderStartEndRadiusData,
        borderStartStartRadiusData,
        borderTopData,
        borderTopLeftRadiusData,
        borderTopRightRadiusData,
        bottomData,
        boxDecorationBreakData,
        boxReflectData,
        boxShadowData,
        boxSizingData
    ]),
    info: propertiesStartWithBCourseInfo
}