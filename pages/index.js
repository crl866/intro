import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.qaSection}>
        <div className={styles.qaContainer}>
          <p className={styles.intro}>Hello everyone! I'm Carl Anton, and I am 3rd year IT student.</p>
          <article className={styles.qaItem}>
            <h2 className={styles.qaQuestion}>
              When you think about a "perfect" website, are you more drawn to how it (UI/UX, animations, layouts) or how it (databases, user authentication, logic)? Explain why.
            </h2>
            <p className={styles.qaAnswer}>
              I lean toward UI/UX: thoughtful layouts, crisp typography, and purposeful motion. When the interface feels intuitive and responsive, the tech underneath disappears and the experience just flows.
            </p>
          </article>

          <article className={styles.qaItem}>
            <h2 className={styles.qaQuestion}>
              Are there specific technologies or frameworks you are eager to learn (e.g., React, Tailwind CSS, Node.js, Next.js)?
            </h2>
            <p className={styles.qaAnswer}>
              I want to get better with Next.js—digging into server components, routing, API routes, and caching—so I can handle data fetching, auth, and performance in one cohesive workflow.
            </p>
          </article>

          <article className={styles.qaItem}>
            <h2 className={styles.qaQuestion}>
              What is one specific feature you've seen on a modern website that you've always wondered how to build?
            </h2>
            <p className={styles.qaAnswer}>
              I'm curious about real-time collaborative editing (think multiplayer cursors and live text updates). I want to learn how to combine WebSockets, presence tracking, and optimistic UI to make it feel instant.
            </p>
            <p className={styles.sampleNote}>
              (This is a sample website - you'll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
            </p>
          </article>
        </div>
      </section>

    </Layout>
  );
}