import React from 'react'

import styles from './MainBg.module.css'

// for Components
import { Button } from '../button/button'

interface MainBgProps {
    h6Text: string,
    h5Text: string,
    LinkText: string,
    LinkTo: string,
}


export const MainBg = (
    {
        h6Text,
        h5Text,
        LinkText,
        LinkTo
    }: MainBgProps
) => {
    return (
        <div className={styles.MainBg}>
            <div>
                <h6>{h6Text}</h6>
                <h5>{h5Text}</h5>
                <Button
                    LinkText={LinkText}
                    LinkTo={LinkTo}
                />
            </div>
        </div>
    )
}
