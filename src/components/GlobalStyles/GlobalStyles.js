import React, { memo } from 'react';
import General from './General';
import Font from './Font';

function GlobalStyles() {
  return (
    <React.Fragment>
      <General />
      <Font />
    </React.Fragment>
  );
}

export default memo(GlobalStyles);
