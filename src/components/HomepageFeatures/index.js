import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'React.js',
    redirect: "/docs/category/react",
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default
  },

  {
    title: 'Javascript',
    redirect: "/docs/category/javascript",
    Svg: require('@site/static/img/js.svg').default

  },
];

function Feature({ Svg, title, redirect }) {
  return (
    <div className={clsx('col col--6')}>
      <a href={redirect}>

        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <Heading as="h3">{title}</Heading>
        </div>
      </a>
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
