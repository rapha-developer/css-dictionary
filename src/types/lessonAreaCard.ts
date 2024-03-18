export type LessonsCourseCard = {
    heading?: string
    items: LessonsAreaElement[]
}
export type LessonsAreaElement = {
    label: 'lessons'| 'language' | 'level' | string
    value: string
}