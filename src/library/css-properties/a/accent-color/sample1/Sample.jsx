
import UiElement from '../../../../../components/ui/element/UiElement'
import './style.css'
import styles from './style.css?inline'
function Sample() {
    const sample = generateSample()
    function generateSample() {
        return (
            <div className="box background" data-color="blue"></div>
        )
    }
    return (
        <UiElement 
            codeCSS={styles}
            component={sample}
        />
    )
}
export default Sample