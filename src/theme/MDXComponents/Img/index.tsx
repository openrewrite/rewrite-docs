import React from 'react';
import clsx from 'clsx';
import type {Props} from '@theme/MDXComponents/Img';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

import styles from './styles.module.css';

function transformImgClassName(className?: string): string {
  return clsx(className, styles.img);
}

export default function ZoomableImage(props: Props) {
  return (
    <Zoom>
      <img
        decoding="async"
        loading="lazy"
        {...props}
        className={transformImgClassName(props.className)}
      />
    </Zoom>
  )
} 