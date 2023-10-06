import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Routing',
    Svg: require('@site/static/img/routing.png').default,
    description: (
      <>
        TASKANA can route Tasks into different Workbaskets according to customized rules automatically.
      </>
    ),
  },
  {
    title: 'Monitoring',
    Svg: require('@site/static/img/monitoring-logo.png').default,
    description: (
      <>
        You can monitor the current state of work including tasks, their states, their due dates etc..
      </>
    ),
  },
  {
    title: 'Workbasket',
    Svg: require('@site/static/img/WorkbasketNew.png').default,
    description: (
      <>
        A Workbasket is a list of Tasks that has specified access rights and other attributes.
      </>
    ),
  },
  {
    title: 'Prioritization, Sorting & Filtering',
    Svg: require('@site/static/img/PriorityNew.png').default,
    description: (
      <>
        Tasks can be prioritized based on their attributes or manually.
      </>
    ),
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} />
      </div>
      <div className="text--center padding-horiz--lg">
        <h3>{title}</h3>
        <div className={styles.featureText}>
          <p>{description}</p>
        </div>
      </div>
    </div >
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
