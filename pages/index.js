import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${styles.intro}`}>
        <p>Hi, I’m Carl Anton David—a 3rd year IT student.</p>
        <p>I balance UI polish with logical thinking, enjoy building small utility tools, and recharge with lo-fi playlists, story-driven games, and the occasional food trip for kare-kare or sisig.</p>
        <p className={styles.sampleNote}>(This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={styles.cards}>
        <article className={styles.card}>
          <h2 className={utilStyles.headingLg}>Current focus</h2>
          <p>Sharpening product thinking, shipping small UX improvements daily, and pairing those with maintainable front-end code.</p>
        </article>
        <article className={styles.card}>
          <h2 className={utilStyles.headingLg}>What I enjoy</h2>
          <p>Rapid prototyping in Next.js, layering subtle motion, and making component systems that feel coherent on both desktop and mobile.</p>
        </article>
      </section>

      <section className={styles.qa}>        
        <h2 className={utilStyles.headingLg}>Quick answers</h2>
        <ol className={styles.qaList}>
          <li>
            <p className={styles.question}>When you think about a "perfect" website, are you more drawn to how it (UI/UX, animations, layouts) or how it (databases, user authentication, logic)? Explain why.</p>
            <p className={styles.answer}>I lean toward UI/UX: thoughtful layouts, crisp typography, and purposeful motion. When the interface feels intuitive and responsive, the tech underneath disappears and the experience just flows.</p>
          </li>
          <li>
            <p className={styles.question}>Are there specific technologies or frameworks you are eager to learn (e.g., React, Tailwind CSS, Node.js, Next.js)?</p>
            <p className={styles.answer}>I want to get better with Next.js—digging into server components, routing, API routes, and caching—so I can handle data fetching, auth, and performance in one cohesive workflow.</p>
          </li>
          <li>
            <p className={styles.question}>What is one specific feature you’ve seen on a modern website that you’ve always wondered how to build?</p>
            <p className={styles.answer}>I’m curious about real-time collaborative editing (think multiplayer cursors and live text updates). I want to learn how to combine WebSockets, presence tracking, and optimistic UI to make it feel instant.</p>
          </li>
        </ol>
      </section>
    </Layout>
  );
}