import React from 'react'

import styles from './OurClasses.module.css'

// for Components
import { Content } from '../Content/Content'
import { Box } from '../Box/Box'

// Class Data
import { ClassData } from '@/Static/classData'


export const OurClasses = () => {
    return (
        <div className={styles.OurClasses}>
            <Content
                h6Text='Our Classes'
            />

            <div className={styles.Row}>
                {
                    ClassData.map((I) => (
                        <Box
                            ImgUrl={I.classImgUrl}
                            ImgAlt={I.className}
                            className={I.className}
                            classDesc={I.classDesc}
                        />

                    ))
                }
            </div>

        </div>
    )
}
