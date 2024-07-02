
export type PropertyTemplateProps = {
    property: CopyAndPasteTemplateProps
}
export type InheritTemplateProps = {
    property: CopyAndPasteTemplateProps
    inheritValue: string | number
}
export type CopyAndPasteTemplateProps = {
    name: string
    value: string
}