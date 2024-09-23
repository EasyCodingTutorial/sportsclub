import React from 'react'

import styles from './Match.module.css'

interface MatchProps {
    Team1: string,
    Team2: string,
    Team1Alt?: string,
    Team2Alt?: string,
}

export const Match = (
    {
        Team1,
        Team2,
        Team1Alt,
        Team2Alt
    }: MatchProps
) => {
    return (
        <div className={styles.Match}>
            <div className={styles.Row}>
                <div>
                    <img src={Team1} alt={Team1Alt} />
                </div>
                <div>
                    <img src="/assets/vslogo.png" alt={Team2Alt} />
                </div>
                <div>
                    <img src={Team2} alt="" />
                </div>
            </div>

            <h6>Upcoming Match</h6>

        </div>
    )
}
