import React from 'react'

import styles from './ShopNow.module.css'

// For Components
import { Content } from '../Content/Content'
import { Box } from '../Box/Box'


// For Data
import { shopData } from '@/Static/shopData'

export const ShopNow = () => {
    return (
        <div className={styles.ShopNow}>
            <Content
                h6Text='Our Classes'
            />

            <div className={styles.Row}>
                {
                    shopData.map((I) => (
                        <Box
                            Id={I.id}
                            ImgUrl={I.img}
                            ImgAlt={I.name}
                            className={I.name}
                            classDesc={I.Desc}
                        />

                    ))
                }
            </div>

        </div>
    )
}
