"use client";

import travelLogo from "../../../../public/logo/test_logo.svg";
import Image from "next/image";
import styles from "./header.component.module.scss";
import { RouterPath } from "@/shared/constants/router.const";
import { useRouter } from "@/i18n/routing";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/en/auth/login" || pathname === "/en/auth/signup";

  if (isAuthPage) {
    return null;
  }

  const goSignIn = () => {
    router.push(RouterPath.SIGNIN);
  };

  const goSignUp = () => {
    router.push(RouterPath.SIGNUP);
  };

  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.header_main}>
          <div className={styles.header_wrapper}>
            <div className={styles.header_items}>
              <div className={styles.header_logo}>
                <Image
                  alt=""
                  src={travelLogo}
                  className={styles.logo}
                  width={200}
                  height={100}
                />
              </div>
              <div className={styles.header_category}>
                <div className={styles.category_items}>
                  <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                      <a href="" className={styles.nav_link}>
                        Home
                      </a>
                    </li>
                    <li className={styles.nav_item}>
                      <a href="" className={styles.nav_link}>
                        Services
                      </a>
                    </li>
                    <li className={styles.nav_item}>
                      <a href="" className={styles.nav_link}>
                        Tours
                      </a>
                    </li>
                    <li className={styles.nav_item}>
                      <a href="" className={styles.nav_link}>
                        News
                      </a>
                    </li>
                    <li className={styles.nav_item}>
                      <a href="" className={styles.nav_link}>
                        Faqs
                      </a>
                    </li>
                    <li className={styles.nav_item}>
                      <a href="" className={styles.nav_link}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.header_auth_option}>
                <div className={styles.auth_option_wrapper}>
                  <div className={styles.auth_option_items}>
                    <button>
                      <span className="circle1"></span>
                      <span className="circle2"></span>
                      <span className="circle3"></span>
                      <span className="circle4"></span>
                      <span className="circle5"></span>
                      <span className="text" onClick={goSignIn}>
                        Signin
                      </span>
                    </button>
                    <button>
                      <span className="circle1"></span>
                      <span className="circle2"></span>
                      <span className="circle3"></span>
                      <span className="circle4"></span>
                      <span className="circle5"></span>
                      <span className="text" onClick={goSignUp}>
                        Singup
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
