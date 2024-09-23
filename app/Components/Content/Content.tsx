import React from 'react'

import styles from './Content.module.css'

interface Props {
    h6Text: string,
}

export const Content = (
    {
        h6Text
    }: Props
) => {
    return (
        <div className={styles.Content}>
            <h6>{h6Text}</h6>
        </div>
    )
}
