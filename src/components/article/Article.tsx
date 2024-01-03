import { ArticleExamples } from "./ArticleExamples"
import { ArticleTitle } from "./ArticleTitle"
import { ArticleValues } from "./ArticleValues"


export const Article = () => {
    return (
        <div className="h-auto ml-28 md:ml-32 py-10 flex flex-grow flex-col items-center">
            <ArticleTitle />
            <ArticleExamples />
            <ArticleValues />
        </div>
    )
}
