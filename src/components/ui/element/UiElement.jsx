
import UiTab from '../tab/UiTab';
import UiPresentation from './../presentation/UiPresentation';

function UiElement({component, codeCSS}) {
    return (
        <div className="uiElement">
            <UiPresentation 
                component={component}
            />
            <UiTab
                codeCSS={codeCSS}
                codeHTML={component}
            />
        </div>
    )
}
export default UiElement