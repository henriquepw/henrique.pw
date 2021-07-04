const LOCATE_PATHS = {
  pt: 'pt-BR',
  en: 'en-US',
};

export const TOAST_MESSAGE = {
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

export function formatLocation(locate: string): string {
  return LOCATE_PATHS[locate] || locate;
}
