import React from 'react'

import styles from './ContactForm.module.css'
import { Content } from '../Content/Content'

export const ContactForm = () => {
    return (
        <div className={styles.ContactForm}>
            <Content h6Text='Contact us' />
            <div className={styles.Row}>

                <div>
                    <form>
                        <input type="text" placeholder='Name' required />
                        <input type="email" placeholder='Email' required />
                        <input type="text" placeholder='Subject' required />
                        <textarea placeholder='Message' />
                        <button>Submit</button>
                    </form>
                </div>
                <div>
                    <img src="/assets/joinus.png" alt="" />
                </div>
            </div>

        </div>
    )
}
