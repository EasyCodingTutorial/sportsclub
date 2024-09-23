import React from 'react'

import styles from './Box.module.css'

interface BoxProps {
    ImgUrl: string,
    ImgAlt?: string,
    className: string,
    classDesc: string,
}

export const Box = (
    {
        ImgUrl,
        ImgAlt,
        className,
        classDesc
    }: BoxProps
) => {
    return (
        <div className={styles.Box}>
            <img src={ImgUrl} alt={ImgAlt} />
            <div className={styles.BoxContent}>
                <h6>{className}</h6>
                <p>
                    {classDesc}
                </p>
            </div>
        </div>
    )
}
