/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const withEnhanced = <T,>(Component: any) => {
  return function WrapComponent(props: T): JSX.Element {
    const router = useRouter();
    const searchParams = useSearchParams();
    const pathName = usePathname();

    return (
      <Component
        {...props}
        router={router}
        pathName={pathName}
        searchParams={searchParams}
      />
    );
  };
};
