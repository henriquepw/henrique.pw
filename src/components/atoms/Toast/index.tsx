import { FiX } from 'react-icons/fi';

import type { Variants } from 'framer-motion';

import { useToast } from '@/hooks/useToast';

import { Container, Content } from './styles';

const variants: Variants = {
  show: {
    y: 0,
  },
  hide: {
    y: 100,
  },
};

function Toast() {
  const { message, animationControls } = useToast();

  function handleCloseToast() {
    animationControls.start('hide');
  }

  return (
    <Container initial="hide" animate={animationControls} variants={variants}>
      <Content>
        {message}
        <FiX size={24} onClick={handleCloseToast} />
      </Content>
    </Container>
  );
}

export default Toast;
