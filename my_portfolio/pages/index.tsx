import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rulof&apos;s Portfolio 📃</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <header className={styles.header}>
        <Image
        width={40}
        height={40}
        alt=''
        draggable='false'
        className={styles.logo}
        src='/professional_logo.png'>
        </Image>
        
        <h1 className={styles.title}>
          <span><span className={styles.tilde_highlight}>~</span> Hello World!_</span>
        </h1>

        <div className={styles.right_align}>
          <a href='https://www.linkedin.com/in/rulof-vd-merwe/'>
            <Image
            width={40}
            height={40}
            alt=''
            className={styles.icon}
            src='/linkedin_icon.png'>
            </Image>
          </a>
        </div>
      </header>

      <main className={styles.main}>
      <Image
      className={styles.shell_background}
      src="/../public/lighter_background.png"
      alt=''
      width={40}
      height={40}>

      </Image>
        {/* <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>

      <footer className={styles.footer}>
        howdy 🤠 (this is also a placeholder)
      </footer>
    </div>
  )
}
