
import StyleHeader from "../../components/header/StyleHeader"
import { createStyleHeader } from '../../../../data/constants'
function StyleTypographyPage() {
    return (
        <div className="styleTypographyPage">
            <StyleHeader 
                text__secondary={createStyleHeader.typography.text__secondary}
                text__primary={createStyleHeader.typography.text__primary}
                text__tertiary={createStyleHeader.typography.text__tertiary}
            />
        </div>
    )
}
export default StyleTypographyPage