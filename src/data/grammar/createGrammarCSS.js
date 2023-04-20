
const Positions = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3,
    fifth: 4
}
const Languages = {
    css: "css",
    html: "html",
    git: "git"
}
const createGrammarLanguageCSS = [
    {
        regex:/(\.\w+)\[/g,
        data: (data) => {
            return `<span class="token selector-name">${data[Positions.second]}</span>[`
        }
    },
    {
        regex: /(data-\w+)=/g,
        data: (data) => {
            return `<span class="token attr-name">${data[Positions.second]}</span><span class="token punctuation attr-equals">=</span>`
        }
    },
    {
        regex: /\[([a-zA-Z*-]{1,})=/g,
        data: (data) => {
            return `<span class="token punctuation">[</span><span class="token attr-name">${data[Positions.second]}</span><span class="token punctuation attr-equals">=</span>`
        }
    },
    {
        regex: /(\'\w+\')\]/g,
        data: (data) => {
            return `<span class="token attr-value">${data[Positions.second]}</span><span class="token punctuation">]</span>`
        }
    },
    {
        regex: /(\'\w+\')\;/g,
        data: (data) => {
            return `<span class="token attr-value">${data[Positions.second]}</span><span class="token punctuation">;</span>`
        }
    },
    {
        regex: /(\"[a-zA-z-*]{1,}\")/g,
        data: (data) => {
            return `<span class="token attr-value">${data[Positions.second]}</span>`
        }
    },
    {
        regex: /\((\w+)\)/g,
        data: (data) => {
            return `<span class="token attr-parentheses">(</span><span class="token attr-parentheses-value">${data[Positions.second]}</span><span class="token attr-parentheses">)</span>`
        }
    },
];
export {
    Positions,
    Languages,
    createGrammarLanguageCSS
}