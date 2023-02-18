import React from 'react'

type Props = {
    className?: string
}

export default function Circle({ className }: Props) {
    return (
        <svg className={`${className ? className : ''}`} width="177" height="177" viewBox="0 0 177 177" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="88.5" transform="matrix(-1 0 0 1 88.5 88.5)" fill="url(#paint0_linear_26_123)"/>
            <defs>
                <linearGradient id="paint0_linear_26_123" x1="133.197" y1="20.1136" x2="26.3712" y2="167.614" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#313131"/>
                    <stop offset="1" stopColor="#303030" stopOpacity="0"/>
                </linearGradient>
            </defs>
        </svg>
  )
}