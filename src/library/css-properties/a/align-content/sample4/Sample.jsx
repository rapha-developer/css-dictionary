
import UiTemplateSetInnerHTML from '../../../../../components/ui/templateSetInner/UiTemplateSetInnerHTML'
import UiElement from '../../../../../components/ui/element/UiElement'
import htmlRaw from './sample.html?raw'
import styles from './style.css?inline'
import './style.css'
function Sample() {
    const sampleComponent = <UiTemplateSetInnerHTML html={htmlRaw} />
    return (
        <UiElement 
            codeCSS={styles}
            codeHTML={htmlRaw}
            component={sampleComponent}
        />
    )
}
export default Sample