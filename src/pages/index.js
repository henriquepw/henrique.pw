import Loadable from 'react-loadable';

import Loading from '~/atoms/Loading';

const LoadableMain = Loadable({
  loader: () => import('../organismis/Main'),
  loading: Loading,
});

export default LoadableMain;
