import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Head from '@docusaurus/Head'

import styles from './index.module.css';

export function Section({
  children,
  className = null,
  background = 'light',
}) {
  return (
    <section
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </section>
  );
}

function TwoColumns({columnOne, columnTwo, reverse=false}) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

function HeaderHero() {
  return (
    <Section background="dark">
      <TwoColumns
        reverse
        columnOne={
          <div>hi</div>
        }
        columnTwo={
          <>
            <h1 className="title">React Native</h1>
            <p className="tagline">Learn once, write&nbsp;anywhere.</p>
            <div className="buttons">
              {/* <HomeCallToAction /> */}
            </div>
          </>
        }
      />
    </Section>
  )
}

function SectionOne() {
  return (
    <Section background="light">
      <TwoColumns
        reverse
        columnOne={
          <img src="./img/panda-ai/Gemini_Generated_Image_9n48649n48649n48.jpeg" width={350} />
        }
        columnTwo={
          <>
            <h1 className="title">Plug-and-Play</h1>
            <p className="tagline">Build anything you want from a library of entities that include</p>
            <ul>
              <li>Apps</li>
              <li>Services</li>
              <li>Scaffolds</li>
              <li>Commands</li>
              <li>Routes</li>
              <li>Components</li>
            </ul>
          </>
        }
      />
    </Section>
  )
}

function SectionTwo() {
  return (
    <Section background="dark">
      <TwoColumns
        columnOne={
          <img src="./img/panda-ai/Gemini_Generated_Image_ifz801ifz801ifz8.jpeg" width={350} />
        }
        columnTwo={
          <>
            <h1 className="title">Develop Faster</h1>
            <ul>
              <li>Faster to design</li>
              <li>Faster to build</li>
              <li>Faster to market</li>
            </ul>
            {/* <h1 className="title">Technology Agnostic</h1>
            <p className="tagline">Bring your own favorite libraries to the party! Panda comes with its own favorites, but you can build your own entities using the libraries you prefer or use ones built by the community.</p> */}
          </>
        }
      />
    </Section>
  )
}

function SectionThree() {
  return (
    <Section background="light">
      <TwoColumns
        reverse
        columnOne={
          <img src="./img/panda-ai/Gemini_Generated_Image_3crkzu3crkzu3crk.jpeg" width={350} />
        }
        columnTwo={
          <>
            <h1 className="title">Easy Adoption</h1>
            <p className="tagline">Use as much or as little of Panda as you'd like. You can use single entities in your existing project or build your entire next application using Panda.</p>
          </>
        }
      />
    </Section>
  )
}

function BetaSection() {
  return (
    <Section background="dark">
      <h2 style={{ textAlign: 'center', margin: '0 50px' }}>
        Please note that Panda and its documentation are in alpha and will therefore be changing rapidly
      </h2>
    </Section>
  )
}

function CommandsSection() {
  return (
    <Section background="light">
      <TwoColumns
        // reverse
        columnOne={
          <div style={{ textAlign: 'center' }}>
            <img src="./img/code-256.png" width={250} />
          </div>
        }
        columnTwo={
          <>
            <h1 className="title" style={{ textAlign: 'center' }}>@panda/command</h1>
            <p className="tagline" style={{ textAlign: 'center' }}>
              Create a CLI or individual commands using the <strong>@panda/command</strong> library
              </p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/guides/cli">
                CLI Guide
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/docs/guides/command">
                Command Guide
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/entities/command/overview">
                Documentation
              </Link>
            </div>
          </>
        }
      />
    </Section>
  )
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const imgAttribution = 'Image by catalyststuff on Freepik'
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--8')}>
            <Heading as="h1" className="hero__title">
              {siteConfig.title}
            </Heading>
            <p className="hero__subtitle">{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Get Started
              </Link>
            </div>
          </div>
          <div className={clsx('col col--4')}>
            <img src="./img/panda-bamboo.jpg" alt={imgAttribution} width={250} />
          </div>
        </div>
        
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="">
      <HomepageHeader />
      <main>
        <BetaSection />
        <CommandsSection />
      </main>
    </Layout>
  );
}
