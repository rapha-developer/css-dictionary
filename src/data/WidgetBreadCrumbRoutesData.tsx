import { widgetBreadCrumb } from "../types/widgetBreadCrumb";


export const BreadCrumbCoursesRoute: widgetBreadCrumb =  {
    historic: [
        {
            url: "/",
            text: "home"
        }
    ],
    actual: {
        url: "/courses",
        text: "courses"
    }
}
export const BreadCrumbLessonsRoute: widgetBreadCrumb =  {
    historic: [
        {
            url: "/",
            text: "home"
        },
        {
            url: "/courses",
            text: "courses"
        }
    ],
    actual: {
        url: "/courses/courses-one",
        text: "lessons"
    }
}