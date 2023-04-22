
import UiTab from '../tab/UiTab';
import UiPresentation from './../presentation/UiPresentation';

function UiElement({component, codeHTML, codeCSS}) {
    return (
        <div className="uiElement">
            <UiPresentation 
                component={component}
            />
            <UiTab
                codeCSS={codeCSS}
                codeHTML={codeHTML}
            />
        </div>
    )
}
export default UiElement