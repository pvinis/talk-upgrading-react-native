// const base = {
//     monospace: 'Iosevka, Menlo',
// }

// export const eightiesDark = {
//     ...base,

//     colors: {
//         text: '#d3d0c8',
//         background: '#2d2d2d',
//         // caret: d3d0c8
//         // background: 515151
//         // foreground: 6699cc
//         // foreground: 66cccc
//         // foreground: 747369
//         // foreground: 99cc99
//         // foreground: a09f93
//         // foreground: cc99cc
//         // foreground: d27b53
//         // foreground: d3d0c8
//         // foreground: f2777a
//         // foreground: f99157
//         // foreground: ffcc66
//     },
// }

import React from 'react'

const Provider = props => (
    <div>
        {props.children}
        <div
            css={{
                position: 'fixed',
                right: 0,
                bottom: 0,
                margin: 16,
            }}
        >
      Put your name here
        </div>
    </div>
)

export default {
    Provider,
}
