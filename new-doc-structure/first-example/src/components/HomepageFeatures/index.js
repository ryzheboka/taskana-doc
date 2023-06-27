import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Distribution',
    Svg: require('@site/static/img/distribution.png').default,
    description: (
      <>
        TASKANA can be configured to distribute tasks from one workbasket to multiple others.
      </>
    ),
  },
  {
    title: 'Monitoring',
    Svg: require('@site/static/img/Monitoring.png').default,
    description: (
      <>
        You can monitor the current state of work including tasks, their states, their due dates etc..
      </>
    ),
  }
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <img className={styles.featureSvg} src={Svg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
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
