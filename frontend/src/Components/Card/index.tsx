import React, { FunctionComponent } from 'react';

interface ILink {
  href: string;
  text: string;
}

interface IProps {
  shadow?: boolean;
  title: string;
  description: string;
  link?: ILink;
  size: 'big' | 'medium' | 'small';
}

const Card: FunctionComponent<IProps> = () => {
  // ~~~~~ Redux state ~~~~~

  // ~~~~~ Hooks ~~~~~

  // ~~~~~ Cmp state ~~~~~

  // ~~~~~ Refs ~~~~~

  // ~~~~~ Effects ~~~~~

  // ~~~~~ Handlers ~~~~~

  return <div></div>;
};

export default Card;
