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

      <main>
        <span className={styles.main}>
        <span><strong className={styles.tilde_highlight}>~ </strong>./introduction.sh</span>
        <span>
        Hello, my name is Rulof.<br/>
        I&apos;m a Software Engineer based In Somerset West.<br/><br/>
        
        &quot;I&apos;d say your interests are... programming and tech.<br/>
        Uhm, yeah... we don&apos;t really talk about anything else.&quot; - Anonymous Roomate<br/><br/>

        My dream job would be a software architecture of a big project.<br/><br/>
        
        Like any aspiring software wizard, I aspire to always find my answer 
        with the first google, 
        be able to answer my collgue&apos;s question and push my ticket before 1, 
        just in time for lunch.<br/><br/>

        As an aspiring human, I would like my work to be a nurturing and challenging
        environment to help me be the best software engineer I can be.<br/><br/>

        I hope that SOVTECH can provide this environment,<br/>
        and that together we get to build great software!<br/><br/>

        <span><strong className={styles.tilde_highlight}>~ </strong><span className={styles.yellow_highlight}>git</span> add .</span><br/>
        <span><strong className={styles.tilde_highlight}>~ </strong><span className={styles.yellow_highlight}>git</span> commit <span className={styles.darker_grey_highlight}>-m </span>
        <span className={styles.blue_highlight}>&quot;Hope to see you at the interview!&quot;</span></span><br/>
        <span><strong className={styles.tilde_highlight}>~ </strong><span className={styles.yellow_highlight}>git</span> push</span><br/>
        <span><strong className={styles.tilde_highlight}>~ </strong>exit</span>

        </span>
        
        </span>
      </main>

      <footer className={styles.footer}>
      ✨ Welcome to my footer✨
      </footer>
    </div>
  )
}
