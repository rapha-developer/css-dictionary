import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { accentColorData } from "../properties/a/data/accentColor";
import { alignContentData } from "../properties/a/data/alignContent";
import { alignItemsData } from "../properties/a/data/alignItems";
import { allData } from "../properties/a/data/all";
import { animationData } from "../properties/a/data/animation";
import { animationDelayData } from "../properties/a/data/animationDelay";
import { animationDirectionData } from "../properties/a/data/animationDirection";
import { animationDurationData } from "../properties/a/data/animationDuration";
import { animationFillModeData } from "../properties/a/data/animationFillMode";
import { animationIterationCountData } from "../properties/a/data/animationIterationCount";
import { animationNameData } from "../properties/a/data/animationName";
import { animationPlayStateData } from "../properties/a/data/animationPlayState";
import { animationTimingFunctionData } from "../properties/a/data/animationTimingFunction";
import { aspectRatioData } from "../properties/a/data/aspectRatio";

import { propertiesStartWithACourseInfo } from "./info/propertiesStartWithAInfo";

export const propertiesThatStartWithA: CourseProps = {
    name: "Propriedades CSS que começam com A",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        accentColorData,
        alignContentData,
        alignItemsData,
        allData,
        animationData,
        animationDelayData,
        animationDirectionData,
        animationDurationData,
        animationFillModeData,
        animationIterationCountData,
        animationNameData,
        animationPlayStateData,
        animationTimingFunctionData,
        aspectRatioData
    ]),
    info: propertiesStartWithACourseInfo
}