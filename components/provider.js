import React from 'react'

import { Footer } from './footer'


export const Provider = props => {
    console.log({ props })
    return (
        <div>
            {props.children}
            <Footer />
        </div>
    )
}
