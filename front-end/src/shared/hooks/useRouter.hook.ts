import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter as useNextRouter } from "next/navigation";

export function useRouter(): AppRouterInstance {
  const router = useNextRouter();

  return {
    ...router,
    push: (href, options) => {
      if (!href.endsWith("/")) {
        href += "/";
      }
      return router.push(href, options);
    },
  };
}
