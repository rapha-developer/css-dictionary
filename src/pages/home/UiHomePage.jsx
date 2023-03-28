
import UiSidebar from '../../components/sidebar/UiSidebar'
import UiKnowledgeSample from './../knowledge/sample/UiKnowledgeSample';
import styles from './style.module.css'
function UiHomePage() {
    return (
        <section className={styles.homepage}>
            <UiSidebar />
            <UiKnowledgeSample 
            
            />
        </section>
    )
}
export default UiHomePage