import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { imageRenderingData } from "../properties/i/data/imageRendering";
import { inlineSizeData } from "../properties/i/data/inlineSize";
import { insetData } from "../properties/i/data/inset";
import { insetBlockData } from "../properties/i/data/insetBlock";
import { insetBlockEndData } from "../properties/i/data/insetBlockEnd";
import { insetBlockStartData } from "../properties/i/data/insetBlockStart";
import { insetInlineData } from "../properties/i/data/insetInline";
import { insetInlineEndData } from "../properties/i/data/insetInlineEnd";
import { insetInlineStartData } from "../properties/i/data/insetInlineStart";
import { isolationData } from "../properties/i/data/isolation";

import { propertiesStartWithICourseInfo } from "./info/propertiesStartWithIInfo";

export const propertiesThatStartWithI: CourseProps = {
    name: "Propriedades CSS que começam com I",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        imageRenderingData,
        inlineSizeData,
        insetData,
        insetBlockData,
        insetBlockEndData,
        insetBlockStartData,
        insetInlineData,
        insetInlineEndData,
        insetInlineStartData,
        isolationData
    ]),
    info: propertiesStartWithICourseInfo
}