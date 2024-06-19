import { v4 as uuidV4 } from "uuid"

export type socialMediaUtilProps = {
    id?: string
    heading: string
    description: string
    iconName: "rocket" | "codepen" | "github" | "behance" | "news"
    iconColor: "purple" | "red" | "pink" | "emerald" | "gold"
    url: string
} 
export class SocialMediaUtil {
    private _id: string;
    private _heading: string;
    private _description: string;
    private _iconName: "rocket" | "codepen" | "github" | "behance" | "news"
    private _iconColor: "purple" | "red" | "pink" | "emerald" | "gold"
    private _url: string

    constructor({
        id,
        heading,
        description,
        iconName,
        iconColor,
        url
    }: socialMediaUtilProps) {
        this._id = id ??  uuidV4()
        this._heading = heading
        this._description = description
        this._iconName = iconName
        this._iconColor = iconColor
        this._url = url
    }

    public get id(): string {
        return this._id
    }

    public get heading(): string {
        return this._heading
    }

    public get description(): string {
        return this._description
    }

    public get iconName(): socialMediaUtilProps['iconName'] {
        return this._iconName
    }

    public get iconColor(): socialMediaUtilProps['iconColor'] {
        return this._iconColor
    }
    
    public get url(): string {
        return this._url
    }
    
    socialMediaUtilViewModel(): socialMediaUtilProps {
        return {
            id: this._id,
            heading: this._heading,
            description: this._description,
            iconName: this._iconName,
            iconColor: this._iconColor,
            url: this._url
        }
    }
}

export const repositorySocialMediaUtils: socialMediaUtilProps[] = [
    (new SocialMediaUtil(
        {
            heading: 'meu Codepen',
            description: '+20 designs',
            iconColor: 'purple',
            iconName: "codepen",
            url: "https://codepen.io/rapha-developer"
        },
    )).socialMediaUtilViewModel(),
    (new SocialMediaUtil(
        {
            heading: 'meu Github',
            description: '+5 projetos',
            iconColor: 'red',
            iconName: "github",
            url: "https://github.com/rapha-developer/"
        },
    )).socialMediaUtilViewModel(),
    (new SocialMediaUtil(
        {
            heading: 'Meu Behance',
            description: '+30 posts',
            iconColor: 'pink',
            iconName: "behance",
            url: "https://www.behance.net/rapha-developer"
        },
    )).socialMediaUtilViewModel(),
    (new SocialMediaUtil(
        {
            heading: 'space flight news',
            description: 'Notícias espaciais',
            iconColor: 'emerald',
            iconName: "rocket",
            url: "https://github.com/rapha-developer/space-flight-news-react"
        },
    )).socialMediaUtilViewModel(),
    (new SocialMediaUtil(
        {
            heading: "Consume APi's",
            description: "Consumir três APi's",
            iconColor: 'gold',
            iconName: "news",
            url: "https://github.com/rapha-developer/APIs-to-consume"
        } 
    )).socialMediaUtilViewModel(),
]