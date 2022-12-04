const LOCATE_PATHS: Record<string, string> = {
  pt: 'pt-BR',
  en: 'en-US',
};

interface ToastMessage {
  email: {
    error: string;
    success: string;
  };
}

export const TOAST_MESSAGES: Record<string, ToastMessage> = {
  pt: {
    email: {
      error: 'Houve um erro ao enviar seu e-mail, tente novamente.',
      success: 'Seu e-mail foi enviado com sucesso!',
    },
  },
  en: {
    email: {
      error: 'There was an error sending your email, try again',
      success: 'Your email has been sent successfully!',
    },
  },
};

export function formatLocation(locate = ''): string {
  return LOCATE_PATHS[locate] || locate;
}
