export type CourseCard = {
    image: string
    category: string
    title: string
    url: string
    author: {
        gravatar: string
        name: string
    },
    price: "free" | "paid"
    numberLessons?: string | null
}