import { v4 as uuidV4 } from "uuid"

export type FooterUtilProps = {
    id?: string
    about: {
        title: string,
        text: string,
        address: string,
        languages: string[]
    }
    columns: FooterColumnUtilProps[]
    news: {
        title: string
        text: string
        warning: string
    }
    copyright: string
}
export class FooterUtil {
    private _id: string
    private _about: {
        _title: string,
        _text: string,
        _address: string,
        _languages: string[]
    }
    private _columns: FooterColumnUtil[]
    private _news: {
        _title: string,
        _text: string,
        _warning: string
    }
    private _copyright: string

    constructor({
        id,
        about,
        columns,
        news,
        copyright
    }: FooterUtilProps) {
        this._id = id ?? uuidV4()
        this._about = {
            _title: about.title,
            _text: about.text,
            _address: about.address,
            _languages: about.languages
        }
        this._news = {
            _title: news.title,
            _text: news.text,
            _warning: news.warning
        }
        this._columns = columns.map((column) => new FooterColumnUtil({
            id: column?.id,
            title: column.title,
            items: column.items
        }));
        this._copyright = copyright
    }

    public get id(): string {
        return this._id
    }

    public get about(): {
        _title: string,
        _text: string,
        _address: string,
        _languages: string[]
    } {
        return this._about
    }

    public get columns(): FooterColumnUtil[] {
        return this._columns
    }

    public get news(): {
        _title: string
        _text: string
        _warning: string
    } {
        return this._news
    }

    public get copyright(): string {
        return this._copyright
    }

    footerUtilViewModel(): FooterUtilProps {
        return {
            id: this?._id,
            about: {
                title: this._about._title,
                text: this._about._text,
                address: this._about._address,
                languages: this._about._languages
            },
            columns: this._columns.map((column) => column.footerColumnViewModel()),
            news: {
                title: this._news._title,
                text: this._news._text,
                warning: this._news._warning
            },
            copyright: this._copyright
        }
    }
}

export type FooterColumnUtilProps = {
    id?: string
    title: string
    items: FooterColumnItemUtilProps[]
}
export class FooterColumnUtil {
    private _id: string
    private _title: string
    private _items: FooterColumnItemUtil[]

    constructor({
        id,
        title,
        items
    }: FooterColumnUtilProps) {
        this._id = id ?? uuidV4()
        this._title = title
        this._items = items.map((item) => new FooterColumnItemUtil({
            id: item?.id,
            text: item.text,
            url: item.url
        }));
    }
    
    public get id(): string {
        return this._id
    }

    public get title(): string {
        return this._title
    }

    public get items(): FooterColumnItemUtil[] {
        return this._items
    }

    footerColumnViewModel(): FooterColumnUtilProps {
        return {
            id: this?._id,
            title: this._title,
            items: this._items.map((item) => item.footerColumnItemViewModel())
        }
    }
}

export type FooterColumnItemUtilProps = {
    id?: string
    url: string
    text: string
}
export class FooterColumnItemUtil {
    private _id: string
    private _url: string
    private _text: string

    constructor({
        id,
        url,
        text
    }: FooterColumnItemUtilProps) {
        this._id = id ?? uuidV4()
        this._url = url
        this._text = text
    }

    public get id(): string {
        return this._id
    }

    public get url(): string {
        return this._url
    }

    public get text(): string {
        return this._text
    }

    footerColumnItemViewModel(): FooterColumnItemUtilProps {
        return {
            id: this?._id,
            text: this._text,
            url: this._url
        }
    }
}
export type repositoryFooterUtilProps = {
    [key: string]: FooterUtilProps
}
export const repositoryFooterUtil: repositoryFooterUtilProps = {
    footer: new FooterUtil({
        about: {
            title: "about us",
            text: "CSS dictionary cataloga cada propriedade CSS, mostrando suas definições, valores & exemplos.",
            address: "São Paulo, brazil (south America)",
            languages: ["javascript", "PHP", "java", "mysql."]
        },
        columns: [
            {
                title: "referências",
                items: [
                    {
                        url: "https://www.w3schools.com/",
                        text: "w3schools"
                    },
                    {
                        url: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
                        text: "mdn web Docs"
                    },
                    {
                        url: "https://www.freecodecamp.org/",
                        text: "free code camp"
                    },
                    {
                        url: "https://tailwindcss.com/",
                        text: "tailwind css"
                    },
                    {
                        url: "https://cssreference.io/",
                        text: "css reference"
                    },
                ]
            },
            {
                title: "sitemap",
                items: [
                    {
                        url: "/",
                        text: "homepage"
                    },
                    {
                        url: "/courses",
                        text: "courses"
                    },
                    {
                        url: "/glossary",
                        text: "glossary"
                    },
                    {
                        url: "/about",
                        text: "about"
                    },
                ]
            }
        ],
        news: {
            title: "veja newsletter",
            text: "Uma Newsletter é uma forma de obter informações relevantes por e-mail",
            warning: "o email funciona apenas como ilustração"
        },
        copyright: "© 2024 CSS Dictionary. All Rights Reserved by Rapha Developer"
    }).footerUtilViewModel()
} 