import React, { useEffect } from 'react';
import { navigate } from 'gatsby';

export default function NotFound() {
  useEffect(() => navigate('/'), []);

  return <div />;
}
