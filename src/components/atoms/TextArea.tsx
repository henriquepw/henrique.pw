import React, { useImperativeHandle, useRef } from 'react';

import { InputRef } from '@/interfaces/input';

type TextAreaProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

const TextArea: React.ForwardRefRenderFunction<InputRef, TextAreaProps> = (
  props,
  ref,
) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  function getValue(): string {
    return textAreaRef.current?.value;
  }

  useImperativeHandle(ref, () => ({ getValue }));

  return <textarea {...props} ref={textAreaRef} />;
};

export default React.forwardRef(TextArea);
