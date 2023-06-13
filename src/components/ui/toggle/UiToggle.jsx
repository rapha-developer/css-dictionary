
import { useState } from 'react'
import styles from './style.module.css'
function UiToggle({checkLanguage}) {
    const [isToTranslate, setIsToTranslate] = useState(false)
    checkLanguage(isToTranslate)
    function changeIsToTranslate() {
        setIsToTranslate(prevState => !prevState)
    }
    const language = (isToTranslate) ? 'Português' : 'English'
    return (
        <div className="uiToggle">

            <input 
                type="checkbox"
                className={styles.uiToggle__checkbox} 
                id="uiToggle__switch" 
                onClick={changeIsToTranslate}
            />
            <label htmlFor="uiToggle__switch"
                className={styles.uiToggle__label}
                >
            <span 
                className={styles.uiToggle__language}
            >{language}</span>Toggle</label>
        </div>
    )
}
export default UiToggle