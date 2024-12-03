import React from 'react';
import ExternalSVG from './External.svg';
import ZoomableImage from '../theme/MDXComponents/Img';
import Styles from './button.module.css';

export default function RecipeCallout({children, link}) {
  return (
    <div className={Styles.container}>
      <div className={Styles.subContainer}>
        <p className={Styles.heading}>
          Run this recipe on OSS repos at scale with the Moderne SaaS.
        </p>
        <div>
          <a href={link} target='_blank' className={Styles.link}>
            Run this recipe here <ExternalSVG />
          </a>
        </div>
      </div> 
      <div>
        <ZoomableImage src={require('../../static/img/run-at-scale.png').default} />
      </div>
    </div>
  );
}
