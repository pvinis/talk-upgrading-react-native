const blue = '#3AD'


const accent = blue
const background = '#222'
const text = '#aaa'


export const myTheme = {
    fonts: {
        heading: 'Iosevka Web',
        body: 'Iosevka Web',
        monospace: 'Iosevka Web',
    },
    colors: {
        text,
        background,
        primary: 'red',
    },
    styles: {
        root: {
            fontFamily: 'Iosevka Web',
            fontWeight: 300, // light
        },
        h1: {
            color: accent,
            fontWeight: 700, // bold
        },
        h2: {
            color: accent,
            fontWeight: 300, // light
            marginTop: 0,
        },
        h3: {
            fontWeight: 300, // light
            marginTop: 0,
        },
        h4: {
            fontWeight: 300, // light
            marginTop: 0,
        },
        inlineCode: {
            color: accent,
        },
        code: {
            color: accent,
            fontSize: '30px',
        },
        a: {
            color: accent,
        },
        p: {
            textAlign: 'center',
        },
    },
}
