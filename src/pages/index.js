import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';

import styles from './index.module.css';

const features = [
  {
    title: 'Нормативная база',
    description: (
      <>Федеральные законы и приказы, региональная специфика РТ</>
    ),
    to: '/docs/normative/federal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 3v18" />
        <path d="M5 21h14" />
        <path d="M4 7h16" />
        <path d="M6 7l-3.5 6a3.5 3.5 0 0 0 7 0L6 7z" />
        <path d="M18 7l-3.5 6a3.5 3.5 0 0 0 7 0L18 7z" />
      </svg>
    ),
  },
  {
    title: 'Документация и шаблоны',
    description: (
      <>План работы, журнал учёта, 10 готовых шаблонов .docx</>
    ),
    to: '/docs/documents/perechen',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4z" />
        <path d="M14 3v4h4" />
        <path d="M9 12h6" />
        <path d="M9 16h6" />
      </svg>
    ),
  },
  {
    title: 'Направления работы',
    description: (
      <>Диагностика, консультирование, коррекция, ППк</>
    ),
    to: '/docs/work/napravleniya',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="5" r="2.2" />
        <circle cx="5.5" cy="19" r="2.2" />
        <circle cx="18.5" cy="19" r="2.2" />
        <path d="M12 7.2v4.8" />
        <path d="M12 12l-6.5 4.8" />
        <path d="M12 12l6.5 4.8" />
      </svg>
    ),
  },
  {
    title: 'Специфика Татарстана',
    description: (
      <>Закон об образовании РТ, Республиканская ПМПК, двуязычная среда</>
    ),
    to: '/docs/normative/tatarstan',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21.5s-7-6.2-7-11.5a7 7 0 1 1 14 0c0 5.3-7 11.5-7 11.5z" />
        <circle cx="12" cy="10" r="2.6" />
      </svg>
    ),
  },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <Heading as="h1" className={styles.heroTitle}>
        {siteConfig.title}
      </Heading>
      <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
      <Link className={styles.cta} to="/docs/intro">
        Начать знакомство
      </Link>
    </header>
  );
}

function Feature({ title, description, to, icon }) {
  return (
    <Link to={to} className={styles.card}>
      <div className={styles.tile}>{icon}</div>
      <Heading as="h2" className={styles.cardTitle}>
        {title}
      </Heading>
      <p className={styles.cardText}>{description}</p>
    </Link>
  );
}

function HelpStrip() {
  return (
    <section className={styles.strip}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.8 2.1z" />
      </svg>
      <span>
        Детский телефон доверия <strong>8-800-2000-122</strong> · Единый номер
        экстренных служб <strong>112</strong>
      </span>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="База знаний педагога-психолога"
      description="Единая страница для педагога-психолога школы: нормативные акты РФ и Республики Татарстан, форматы документов, инструкции и базовые алгоритмы работы.">
      <HomepageHeader />
      <main>
        <section className={styles.cards}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </section>
      </main>
      <HelpStrip />
    </Layout>
  );
}
