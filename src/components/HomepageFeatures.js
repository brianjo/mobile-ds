import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'PyTorch Ecosystem',
    Svg: require('../../static/img/pt-eco.svg').default,
    description: (
      <>
        Seamlessly go from training a model to deploying it, while staying entirely within the PyTorch ecosystem.
      </>
    ),
  },
  {
    title: 'End-to-End Workflow ',
    Svg: require('../../static/img/pt-workflow.svg').default,
    description: (
      <>
        PyTorch Mobile provides an end-to-end workflow that simplifies the research to production environment for mobile devices.
      </>
    ),
  },
  {
    title: 'Privacy by Design',
    Svg: require('../../static/img/pt-secure.svg').default,
    description: (
      <>
        PyTorch Mobile paves the way for privacy-preserving features via federated learning techniques.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
