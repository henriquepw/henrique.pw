import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import axios from 'axios';

import DynamicInput from '@/components/atoms/DynamicInput';

import tryGet from '@/utils/tryGet';

import { InputData } from '@/interfaces/input';

import { Container } from './styles';

interface ContactFormProps {
  submitText: string;
  inputs: InputData[];
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

    const [, error] = await tryGet(axios.post('/api/sendEmail', data));

    if (error) {
      console.warn(error.message);
    }
  }

  return (
    <Container onSubmit={handleSendEmail}>
      {inputs.map((input) => (
        <DynamicInput key={input.id} type={input.type} name={input.slug}>
          {input.title}
        </DynamicInput>
      ))}

      <button type="submit">
        {submitText}
        <FiArrowRight size={24} />
      </button>
    </Container>
  );
};

export default ContactForm;
