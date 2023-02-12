import React from 'react';
import Default from './Default';
import HasEnded from './HasEnded';
import Soon from './Soon';

export default function BoxMenu(props) {
  switch (props?.type) {
    case 1:
      return <Default {...props} />;
    case 2:
      return <HasEnded {...props} />;
    case 3:
      return <Soon {...props} />;
    default:
      return <Default {...props} />;
  }
}
