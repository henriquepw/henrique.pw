import { motion } from 'framer-motion';

interface PlayButtonProps {
  children: React.ReactNode;
}

const animationVariants = {
  hover: { scale: 1.3 },
  tap: { scale: 0.95 },
};

function PlayButton({ children }: PlayButtonProps) {
  return (
    <motion.span variants={animationVariants} whileHover="hover" whileTap="tap">
      {children}
    </motion.span>
  );
}

export default PlayButton;
