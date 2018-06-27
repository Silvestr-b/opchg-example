import * as React from 'react'
const BEMClasses: any = require('bemclasses');


try {
   (window as any).BEMClasses = BEMClasses
} catch {
   (global as any).BEMClasses = BEMClasses
}


export declare interface Mods {
   [modName: string]: string | boolean | number
}

export declare interface Mix {
   block?: string
   elem?: string
   mods?: Mods
}

declare module 'react' {
   interface HTMLAttributes<T> extends React.DOMAttributes<T> {
       block?: string
       elem?: string
       mods?: Mods,
       mix?: Mix | Mix[] 
   }
}
