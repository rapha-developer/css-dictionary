
import StyleColor from './components/colors/StyleColor'
import StyleHeader from './components/header/StyleHeader'
import { createStyleHeader, createStyleColor } from '../../data/constants'
import StyleColorPage from './pages/colors/StyleColorPage'
import StyleTypographyPage from './pages/typography/StyleTypographyPage'
import UiSidebar from '../../components/sidebar/UiSidebar'
function StylePage() {
    return (
        <div className="stylePage">
            <UiSidebar />
            {/* <StyleColorPage />
            <StyleTypographyPage /> */}
        </div> 
    )
}
export default StylePage