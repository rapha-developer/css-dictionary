import { FooterHeading } from "../types/footerHeading";
import { FooterMenu } from "../types/footerMenu";
import { FooterProfileInfo } from "../types/footerProfileInfo";


export const FooterFirstMenu: FooterMenu = {
    title: "resources",
    menu: [
        {
            url: "#",
            text: "about"
        },
        {
            url: "#",
            text: "contact"
        },
        {
            url: "#",
            text: "refund"
        },
        {
            url: "#",
            text: "help center"
        },
        {
            url: "#",
            text: "returns police"
        },
        {
            url: "#",
            text: "term conditions"
        },
    ]
}

export const FooterSecondMenu: FooterMenu = {
    title: "courses",
    menu: [
        {
            url: "#",
            text: "life coach"
        },
        {
            url: "#",
            text: "business coach"
        },
        {
            url: "#",
            text: "health coach"
        },
        {
            url: "#",
            text: "development"
        },
        {
            url: "#",
            text: "web design"
        },
        {
            url: "#",
            text: "SEO optimize"
        },
    ]
}

export const footerAboutData: FooterHeading = {
    title: "about us",
    text: "when an unknown printer took galley of type and scrambled it to make pspecimen bookt has."
}
export const footerNewsData: FooterHeading = {
    title: "join our newsletter",
    text: "nown printer took galley type and scrambled it to make following with us"
}

export const footerProfileData: FooterProfileInfo = {
    address: "São Paulo, brazil (south America)",
    languages: "javascript, PHP, java, mysql.",
}
export const footerFormData = {
    form: {
        type: "email",
        placeholder: "Your email here.."
    },
    button: {
        text: "sign up"
    },
    footerText: "we only send interesting and relevant emails."
}
export const footerCopyrightData = {
    text: "© 2024 CSS Dictionary. All Rights Reserved by Rapha Developer"
}