
import UiTemplateSetInnerHTML from '../../../../../../components/ui/templateSetInner/UiTemplateSetInnerHTML'
import htmlRaw from '../sample.html?raw'
import '../style.css'
function SampleThumbnail() {
    return (
        <UiTemplateSetInnerHTML 
            html={htmlRaw}
        />
    )
}
export default SampleThumbnail