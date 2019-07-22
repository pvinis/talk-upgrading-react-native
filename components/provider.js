import React from 'react'

import { Footer } from './footer'


export const Provider = ({ children, theme, index, slides }) => (
    <div css={{
        a: {
            color: theme.colors.link,
            textDecoration: 'none',
        },
    }}>
        {children}
        <Footer theme={theme} index={index} />
    </div>
)
