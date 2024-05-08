import React from 'react';
import Image from 'next/image';

export default function MdxImage(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading, react/destructuring-assignment
  return <Image {...props} alt={props.alt} />;
}
