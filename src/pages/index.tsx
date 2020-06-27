import Loadable from 'react-loadable';

import loading from '~/components/atoms/Loading';

const LoadableMain = Loadable({
  loader: () => import('../components/organisms/Main'),
  loading,
});

export default LoadableMain;
