
function UiTemplateSetInnerHTML({html}) {
    return (
        <div 
            dangerouslySetInnerHTML={{__html: html}} 
            className="UiPresentation__code"
        />
    )
}
export default UiTemplateSetInnerHTML