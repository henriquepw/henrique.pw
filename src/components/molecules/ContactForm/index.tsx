import React from 'react';

import axios from 'axios';

import DynamicInput from '@/components/atoms/DynamicInput';

import { Container } from './styles';

interface ContactFormProps {
  submitText: string;
  inputs: Array<{
    id: string;
    slug: string;
    title: string;
    type: 'text' | 'textarea';
  }>;
}

const ContactForm: React.FC<ContactFormProps> = ({ inputs, submitText }) => {
  async function handleSendEmail(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const formInputs = Array.from(
      event.currentTarget.getElementsByTagName('input'),
    );

    const formTextAreas = Array.from(
      event.currentTarget.getElementsByTagName('textarea'),
    );

    const inputList = [...formInputs, ...formTextAreas];

    const data = inputList.reduce(
      (result, input) => ({
        ...result,
        [input.name]: input.value,
      }),
      {} as Record<string, string>,
    );

    try {
      const response = await axios.post('/api/sendEmail', data);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container onSubmit={handleSendEmail}>
      {inputs.map((input) => (
        <DynamicInput key={input.id} type={input.type} name={input.slug}>
          {input.title}
        </DynamicInput>
      ))}

      <button type="submit">{submitText}</button>
    </Container>
  );
};

export default ContactForm;
