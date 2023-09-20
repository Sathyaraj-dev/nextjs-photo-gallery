import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const About  = () => {
  return (
    <>
    <div className={styles.container}>About page</div>
    <Link href="/">Back to Home</Link>
    </>
  )
}

export default About