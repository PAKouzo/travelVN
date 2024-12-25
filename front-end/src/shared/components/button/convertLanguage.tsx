"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export default function ConvertLanguage() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      const newPathname = pathname.replace(`/${locale}`, "");
      router.replace(`/${nextLocale}${newPathname}`);
    });
  };

  return (
    <select onChange={handleChange} value={locale}>
      <option value="en">English</option>
      <option value="vi">Vietnamese</option>
    </select>
  );
}
