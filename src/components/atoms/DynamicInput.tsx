import React from 'react';

// import { Container } from './styles';

interface InputProps {
  type: 'text' | 'textarea';
}

interface InputComponentsProps {
  text: React.FC<React.HTMLAttributes<HTMLInputElement>>;
  textarea: React.FC<React.HTMLAttributes<HTMLTextAreaElement>>;
}

const inputs: InputComponentsProps = {
  text: (props) => <input type="text" {...props} />,
  textarea: (props) => <textarea {...props} />,
};

const DynamicInput: React.FC<InputProps> = ({ type, children }) => {
  const Input = inputs[type];

  return <Input>{children}</Input>;
};

export default DynamicInput;
