import { NowRequest, NowResponse } from '@vercel/node';
import axios from 'axios';

export default async (
  request: NowRequest,
  response: NowResponse,
): Promise<NowResponse> => {
  const emailData = {
    service_id: process.env.EMAILJS_SERVICE_ID,
    template_id: process.env.EMAILJS_TEMPLATE_ID,
    user_id: process.env.EMAILJS_USER_ID,
    accessToken: process.env.EMAILJS_ACCESS_TOKEN,
    template_params: request.body,
  };

  try {
    const result = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      emailData,
    );

    return response.json(result.data);
  } catch (error) {
    return response
      .status(error.response?.status || 500)
      .json({ messagem: error });
  }
};