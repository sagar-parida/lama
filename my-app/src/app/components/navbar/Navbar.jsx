import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

const links = [
    {
        id: 1,
        title: 'Home',
        url: '/'
    },
    {
        id: 2,
        title: 'Portfolia',
        url: '/portfolio'
    },
    {
        id: 3,
        title: 'Blog',
        url: '/blog'
    },
    {
        id: 4,
        title: 'About',
        url: '/about'
    },
    {
        id: 5,
        title: 'Contact',
        url: '/contact'
    },
    {
        id: 6,
        title: 'Dashboard',
        url: '/dashboard'
    }
]

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href={'/'} className={styles.logo}>Thunder Below</Link>
            <div className={styles.links}>
                {
                    links.map(link => {
                        return <Link href={link.url} className={styles.link} key={link.id}>{link.title}</Link>
                    })
                }
                <button className={styles.logout}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar