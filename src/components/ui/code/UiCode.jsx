
import { renderToString } from 'react-dom/server'
import { useEffect } from 'react'
import { createGrammarLanguageCSS, Positions } from '../../../data/grammar/createGrammarCSS'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import './UiCodeStyles.css'
function UiCode(props) {
    const languages = {css: "css", html: "html"}

    useEffect(() => {
        if (props.language === languages.css) {
            updateGrammarCSS()
        }
        Prism.highlightAll();
    },[])
    function updateGrammarCSS() {
        createGrammarLanguageCSS.forEach((grammarItem) => {
            const regexItem = grammarItem.regex
            Prism.hooks.add('after-highlight', function(env) {
                env.highlightedCode  = env.highlightedCode.replace(
                    regexItem,
                    function(match) {
                        const PartsOfSelector = [...match.matchAll(regexItem)][Positions.first]
                        return grammarItem.data(PartsOfSelector)
                    }
                )
                env.element.innerHTML = env.highlightedCode  
            })
        });
    }
    const code = (props.language === languages.html) ? renderToString(props.code) : props.code
    return (
        <div className="uiCode">
            <pre className="uiCode__block">
                <code className={`language-${props.language}`}>
                    {code}
                </code>
            </pre>
        </div>
    )
}
export default UiCode