import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as never)) notFound();

  return {
    messages: (await import(`../../lang/${locale}.json`)).default,
  };
});
