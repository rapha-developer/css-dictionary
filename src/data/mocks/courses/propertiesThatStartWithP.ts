import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { paddingData } from "../properties/p/data/padding";
import { paddingBlockData } from "../properties/p/data/paddingBlock";
import { paddingBlockEndData } from "../properties/p/data/paddingBlockEnd";
import { paddingBlockStartData } from "../properties/p/data/paddingBlockStart";
import { paddingBottomData } from "../properties/p/data/paddingBottom";
import { paddingInlineData } from "../properties/p/data/paddingInline";
import { paddingInlineEndData } from "../properties/p/data/paddingInlineEnd";
import { paddingInlineStartData } from "../properties/p/data/paddingInlineStart";
import { paddingLeftData } from "../properties/p/data/paddingLeft";
import { paddingRightData } from "../properties/p/data/paddingRight";
import { paddingTopData } from "../properties/p/data/paddingTop";
import { perspectiveData } from "../properties/p/data/perspective";
import { perspectiveOriginData } from "../properties/p/data/perspectiveOrigin";
import { placeContentData } from "../properties/p/data/placeContent";
import { placeItemsData } from "../properties/p/data/placeItems";
import { placeSelfData } from "../properties/p/data/placeSelf";
import { pointerEventsData } from "../properties/p/data/pointerEvents";
import { positionData } from "../properties/p/data/position";

import { propertiesStartWithPCourseInfo } from "./info/propertiesStartWithPInfo";

export const propertiesThatStartWithP: CourseProps = {
    name: "Propriedades CSS que começam com P",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        paddingData,
        paddingBlockData,
        paddingBlockEndData,
        paddingBlockStartData,
        paddingBottomData,
        paddingInlineData,
        paddingInlineEndData,
        paddingInlineStartData,
        paddingLeftData,
        paddingRightData,
        paddingTopData,
        perspectiveData,
        perspectiveOriginData,
        placeContentData,
        placeItemsData,
        placeSelfData,
        pointerEventsData,
        positionData
    ]),
    info: propertiesStartWithPCourseInfo
}