import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

import tryGet from '@/utils/tryGet';

export default async (
  request: NowRequest,
  response: NowResponse,
): Promise<NowResponse> => {
  const emailData = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_USER_ID,
    template_params: request.body,
  };

  const [result, error] = await tryGet(
    axios.post('https://api.emailjs.com/api/v1.0/email/send', emailData),
  );

  if (error) {
    return response.status(500).json({ messagem: error });
  }

  return response.json(result);
};
