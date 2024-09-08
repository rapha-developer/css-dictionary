import { createModulesList } from "../../../core/utils/CreateModulesList";
import { CourseProps } from "../../../types/CourseProps";
import { gapData } from "../properties/g/data/gap";
import { gridData } from "../properties/g/data/grid";
import { gridAreaData } from "../properties/g/data/gridArea";
import { gridAutoColumnsData } from "../properties/g/data/gridAutoColumns";
import { gridAutoFlowData } from "../properties/g/data/gridAutoFlow";
import { gridAutoRowsData } from "../properties/g/data/gridAutoRows";
import { gridColumnData } from "../properties/g/data/gridColumn";
import { gridColumnEndData } from "../properties/g/data/gridColumnEnd";
import { gridColumnStartData } from "../properties/g/data/gridColumnStart";
import { gridRowData } from "../properties/g/data/gridRow";
import { gridRowEndData } from "../properties/g/data/gridRowEnd";
import { gridRowStartData } from "../properties/g/data/gridRowStart";
import { gridTemplateData } from "../properties/g/data/gridTemplate";
import { gridTemplateAreasData } from "../properties/g/data/gridTemplateAreas";
import { gridTemplateColumnsData } from "../properties/g/data/gridTemplateColumns";
import { gridTemplateRowsData } from "../properties/g/data/gridTemplateRows";

import { propertiesStartWithGCourseInfo } from "./info/propertiesStartWithGInfo";

export const propertiesThatStartWithG: CourseProps = {
    name: "Propriedades CSS que começam com G",
    category: "css course",
    author: {
        gravatar: "https://avatars.githubusercontent.com/u/91702283?v=4",
        name: "raphael moreira"
    },
    price: "free",
    modules: createModulesList([
        gapData,
        gridData,
        gridAreaData,
        gridAutoColumnsData,
        gridAutoFlowData,
        gridAutoRowsData,
        gridColumnData,
        gridColumnEndData,
        gridColumnStartData,
        gridRowData,
        gridRowEndData,
        gridRowStartData,
        gridTemplateData,
        gridTemplateAreasData,
        gridTemplateColumnsData,
        gridTemplateRowsData
    ]),
    info: propertiesStartWithGCourseInfo
}