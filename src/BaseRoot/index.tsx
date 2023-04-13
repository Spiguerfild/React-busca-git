import React, { Children } from "react"
type BaseRootProps = {
children: React.ReactNode,
}
import './style.css'

export function BaseRoot({children}: BaseRootProps){
    return(
        <>
        <div className="Base-raiz">
        {children}
        </div>
        </>
    )
}