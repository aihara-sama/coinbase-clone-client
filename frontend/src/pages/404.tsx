import React from 'react';

const _404 = () => {
  React.useEffect(() => {
    document.title = '404';
  }, []);

  return <h1>404</h1>;
};

export default _404;
