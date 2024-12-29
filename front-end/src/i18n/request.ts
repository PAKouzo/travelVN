import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;
  if (!locale || !routing.locales.includes(locale as 'en' || 'vi')) {
    locale = routing.defaultLocale;
  }

  return {
    messages: (await import(`../../lang/${locale}.json`)).default,
  };
});
