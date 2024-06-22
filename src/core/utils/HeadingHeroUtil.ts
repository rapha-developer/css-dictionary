import { v4 as uuidV4 } from "uuid"

export type HeadingHeroUtilProps = {
    id?: string
    title: string
    subtitle: string
    description: {
        head: string
        body: string
    }
}

export class HeadingHeroUtil  {
    private _id: string
    private _title: string
    private _subtitle: string
    private _description: {
        head: string
        body: string
    }
    constructor({
        id,
        title,
        subtitle,
        description
    }: HeadingHeroUtilProps) {
        this._id = id ?? uuidV4()
        this._title = title
        this._subtitle = subtitle
        this._description = description
    }

    public get id(): string {
        return this._id
    }

    public get title(): string {
        return this._title
    }

    public get subtitle(): string {
        return this._subtitle
    }
    
    public get description(): HeadingHeroUtilProps['description'] {
        return this._description
    }
    
    headingHeroViewModel(): HeadingHeroUtilProps {
        return {
            title: this._title,
            subtitle: this._subtitle,
            description: this._description
        }
    }
}

export type repositoryHeadingHeroProps = {
    [key: string]: HeadingHeroUtilProps
}
export const repositoryHeadingHeroUtils: repositoryHeadingHeroProps = {
    homeCourses: (new HeadingHeroUtil(
        {
            subtitle: "cursos em destaque",
            title: "Encontre seu curso preferido",
            description: {
                head: "Cada curso contém vários módulos, mostrando cada propriedade CSS detalhadamente.",
                body: "Cada propriedade contém definição, valores e exemplos"
            }
        }
    )).headingHeroViewModel(),
    coursesListHero: (new HeadingHeroUtil(
        {
            subtitle: "cursos em destaque",
            title: "encontre seu curso na lista",
            description: {
                head: "Cada curso possui uma certa quantidade de módulos, demonstrando cada propriedade CSS.",
                body: "Cada propriedade contém definição, valores e exemplos"
            }
        }
    )).headingHeroViewModel()
}
