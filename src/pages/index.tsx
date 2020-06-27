import Loadable from 'react-loadable';

import Loading from '~/components/atoms/Loading';

const LoadableMain = Loadable({
  loader: () => import('../components/organisms/Main'),
  loading: Loading,
});

export default LoadableMain;
