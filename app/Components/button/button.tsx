import React from 'react'

import Link from 'next/link'

import styles from './button.module.css'


interface Props {
    LinkText: string,
    LinkTo: string,
}

export const Button = (
    {
        LinkText,
        LinkTo
    }: Props
) => {
    return (
        <Link href={LinkTo} className={styles.Btn}>{LinkText}</Link>
    )
}
