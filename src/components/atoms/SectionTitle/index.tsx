import { Container } from './styles';

interface SectionTitleProps {
  isRight?: boolean;
  children: React.ReactNode;
}

function SectionTitle({ children, isRight }: SectionTitleProps) {
  return <Container isRight={isRight}>{children}</Container>;
}

export default SectionTitle;
