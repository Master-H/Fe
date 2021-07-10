import React from 'react'
import {str} from './a'
// import {str} from '@/components/a'
export default function demo() {
    const text:string = 'i am demo'
    enum Test{
        a=2,
        b=3
    }
    return (
        <div>
           {text}
           <h1>{str}</h1>
           <h1>dd:{Test.b}</h1>
        </div>
    )
}
