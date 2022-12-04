import { useState } from 'react';
import { FiArrowRight, FiLoader } from 'react-icons/fi';

import axios from 'axios';

import DynamicInput from '@/components/atoms/DynamicInput';

import { useToast } from '@/hooks/useToast';

import tryGet from '@/utils/tryGet';

import { InputData } from '@/interfaces/input';

import { loaderAnimate, loaderTransition } from './animations';

import { Container, LoaderIndicator } from './styles';

interface ContactFormProps {
  submitText: string;
  inputs: InputData[];
}

function ContactForm({ inputs, submitText }: ContactFormProps) {
  const { displayToast } = useToast();
  const [isLoading, setLoading] = useState(false);

  async function handleSendEmail(
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();
    setLoading(true);

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
      displayToast(messages => messages.email.error);
      setLoading(false);
      return;
    }

    setLoading(false);
    displayToast(messages => messages.email.success);
  }

  return (
    <Container onSubmit={handleSendEmail}>
      {inputs.map(input => (
        <DynamicInput key={input.id} type={input.type} name={input.slug}>
          {input.title}
        </DynamicInput>
      ))}

      <button type="submit">
        <span>{submitText}</span>
        {isLoading ? (
          <LoaderIndicator
            animate={loaderAnimate}
            transition={loaderTransition}
          >
            <FiLoader size={24} />
          </LoaderIndicator>
        ) : (
          <FiArrowRight size={24} />
        )}
      </button>
    </Container>
  );
}

export default ContactForm;
