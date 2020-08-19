import { useState, useEffect } from 'react';

import debounce from 'lodash.debounce';

function usePageHeight(): number {
  const [pageHeight, setPageHeight] = useState(window.innerHeight);

  /**
   * Set the page height when the window is resized.
   */
  useEffect(() => {
    const setCurrentHeight = debounce(
      () => setPageHeight(window.innerHeight),
      500,
    );

    window.addEventListener('resize', setCurrentHeight);

    return () => window.removeEventListener('resize', setCurrentHeight);
  }, []);

  return pageHeight;
}

export default usePageHeight;
