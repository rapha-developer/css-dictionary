export type widgetBreadCrumb = {
    historic: BreadCrumbItem[],
    actual: BreadCrumbItem
}
type BreadCrumbItem = {
    url: string
    text: string
}