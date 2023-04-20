
import { useState } from 'react'
import styles from './style.module.css'
import UiCode from '../code/UiCode'
function UiTab({codeCSS, codeHTML}) {
    const [isFirstTabActive, setIsFirstTabActive] = useState(true)
    function handleActiveTab() {
        setIsFirstTabActive((prevTabState) => !prevTabState) 
    }  
    const accordionTitles = {
        first: "styles.css",
        second: "index.html"
    }
    return (
        <div className="uiTab" 
            role="tablist"
            aria-orientation="horizontal"
            data-orientation="horizontal">
            <div className={styles.uiTab__buttons}>
                <button className={styles.uiTab__btn}
                        role="tab"
                        data-active={isFirstTabActive}
                        onClick={() => handleActiveTab()}>
                    <span>{accordionTitles.first}</span>
                </button>
                <button className={styles.uiTab__btn}
                        role="tab"
                        data-active={!isFirstTabActive}
                        onClick={() => handleActiveTab()}>
                    <span>{accordionTitles.second}</span>
                </button>
            </div>
            <div className="uiTab__items">
                <div id={`language-css-id`} 
                    className={styles.uiTab__content}
                    data-visible={isFirstTabActive}>
                    <UiCode
                        code={codeCSS} 
                        language="css" 
                    />
                </div>

                <div id={`language-html-id`} 
                    className={styles.uiTab__content}
                    data-visible={!isFirstTabActive}>
                    <UiCode 
                        code={codeHTML} 
                        language="html" 
                    />
                </div>
            </div>
        </div>
    )
}
export default UiTab