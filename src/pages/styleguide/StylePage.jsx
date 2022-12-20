
import StyleColor from './components/colors/StyleColor'
import StyleHeader from './components/header/StyleHeader'
import { createStyleHeader, createStyleColor } from '../../data/constants'
function StylePage() {
    return (
        <div className="stylePage">
            <StyleHeader 
                text__primary={createStyleHeader.colors.text__primary}
                text__secondary={createStyleHeader.colors.text__secondary}
                text__tertiary={createStyleHeader.colors.text__tertiary}
            />
            <StyleColor 
                text__primary={createStyleColor.primary.text__primary}
                text__secondary={createStyleColor.primary.text__secondary}
                palette={createStyleColor.primary.palette}
            />
            <StyleColor 
                text__primary={createStyleColor.secondary.text__primary}
                text__secondary={createStyleColor.secondary.text__secondary}
                palette={createStyleColor.secondary.palette}
            />
            <StyleColor 
                text__primary={createStyleColor.typography.text__primary}
                text__secondary={createStyleColor.typography.text__secondary}
                palette={createStyleColor.typography.palette}
            />
            <StyleColor 
                text__primary={createStyleColor.background.text__primary}
                text__secondary={createStyleColor.background.text__secondary}
                palette={createStyleColor.background.palette}
            />
        </div>
    )
}
export default StylePage