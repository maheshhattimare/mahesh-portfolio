const conf = {
  emailjsPublicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  emailjsTemplateId: String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  emailjsServiceId: String(import.meta.env.VITE_EMAILJS_SERVICE_ID),
};
export default conf;
