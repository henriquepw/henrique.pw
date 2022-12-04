import { useRef } from 'react';

import { motion, useAnimation, Variants } from 'framer-motion';

import type { InputRef } from '@/interfaces/input';

import Input from '../Input';
import TextArea from '../TextArea';

import { Container } from './styles';

interface InputProps {
  type: 'text' | 'textarea';
  name: string;
  children: string;
}

const goUp: Variants = {
  standard: {
    top: '50%',
    y: '-50%',
    fontSize: '1.125rem',
    opacity: 1,
  },
  focus: {
    top: -8,
    y: '-100%',
    fontSize: '1rem',
    opacity: 0.6,
  },
};

const inputs = {
  text: Input,
  textarea: TextArea,
};

const DynamicInput: React.FC<InputProps> = ({ type, name, children }) => {
  const CurrentInput = inputs[type];

  const inputRef = useRef<InputRef>(null);

  const animationControl = useAnimation();

  function handleFocus() {
    animationControl.start('focus');
  }

  function handleBlur() {
    if (!inputRef.current?.getValue()) {
      animationControl.start('standard');
    }
  }

  return (
    <Container>
      <motion.label
        variants={goUp}
        animate={animationControl}
        initial="standard"
        htmlFor={`input-${children}`}
      >
        {children}
      </motion.label>
      <CurrentInput
        name={name}
        ref={inputRef}
        id={`input-${children}`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Container>
  );
};

export default DynamicInput;
