
import StyleHeader from "../../components/header/StyleHeader"
import { createStyleHeader } from '../../../../data/constants'
import StyleTypography from "../../components/typography/StyleTypography"
function StyleTypographyPage() {
    return (
        <div className="styleTypographyPage">
            <StyleHeader 
                text__secondary={createStyleHeader.typography.text__secondary}
                text__primary={createStyleHeader.typography.text__primary}
                text__tertiary={createStyleHeader.typography.text__tertiary}
            />
            <StyleTypography />
        </div>
    )
}
export default StyleTypographyPage