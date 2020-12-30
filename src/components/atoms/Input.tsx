import React, { useImperativeHandle, useRef } from 'react';

import { InputRef } from '@/interfaces/input';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  props,
  ref,
) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function getValue(): string {
    return inputRef.current?.value;
  }

  useImperativeHandle(ref, () => ({ getValue }));

  return <input type="text" {...props} ref={inputRef} />;
};

export default React.forwardRef(Input);
