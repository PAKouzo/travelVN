"use client";

import styles from "./footer.component.module.scss";
import { Row, Col } from "antd";
import FacebookIcon from "../icons/facebook/facebook.component";
import InstagramIcon from "../icons/instagram/instagram.component";
import LinkedInIcon from "../icons/linkedin/linkedin.component";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const isAuthPage =
    pathname === "/en/auth/login" || pathname === "/en/auth/signup";

  if (isAuthPage) {
    return null;
  }

  return (
    <>
      <div className={styles.footer_container}>
        <div className={styles.footer_main}>
          <div className={styles.footer_wrapper}>
            <Row className={styles.footer_content}>
              <Col span={6} className={styles.infor_1}>
                <h4 className={styles.title}>Thông tin liên hệ</h4>
                <div className={styles.contact_infor}>
                  <div className={styles.item}>
                    <strong>Địa chỉ</strong>
                    Tòa nhà CIC Tower, 1 Nguyễn Thị Duệ, Cầu Giấy,
                    <br />
                    Hà Nội
                  </div>
                  <div className={styles.item}>
                    <strong>Email</strong>
                    dotrunghieuxk@gmail.com
                  </div>
                  <div className={styles.item}>
                    <strong>Hotline</strong>
                    +84961436448
                  </div>
                  <div className={styles.item}>
                    <strong>Thời gian hỗ trợ</strong>
                    7h30 - 22h00 các ngày trong tuần
                  </div>
                </div>
              </Col>
              <Col span={18} className={styles.infor_2}>
                <Row className={styles.infor_2_wrapper}>
                  <Col span={8} className={styles.instructions}>
                    <h4 className={styles.title}>Hướng dẫn</h4>
                    <div className={styles.item_wrapper}>
                      <a href="" className={styles.item}>
                        Home
                      </a>
                      <a href="" className={styles.item}>
                        Services
                      </a>
                      <a href="" className={styles.item}>
                        Tours
                      </a>
                      <a href="" className={styles.item}>
                        News
                      </a>
                      <a href="" className={styles.item}>
                        Faqs
                      </a>
                      <a href="" className={styles.item}>
                        Contact
                      </a>
                    </div>
                  </Col>
                  <Col span={8} className={styles.detail_infor}>
                    <h4 className={styles.title}>Thông tin cần biết</h4>
                    <div className={styles.item_wrapper}>
                      <a href="" className={styles.item}>
                        About us
                      </a>
                      <a href="" className={styles.item}>
                        Câu hỏi thường gặp
                      </a>
                      <a href="" className={styles.item}>
                        Điều khoản
                      </a>
                      <a href="" className={styles.item}>
                        Quy chế hoạt động
                      </a>
                      <a href="" className={styles.item}>
                        Contact
                      </a>
                    </div>
                  </Col>
                  <Col span={8} className={styles.links}>
                    <div className={styles.social_media}>
                      <h4 className={styles.title}>Kết nối</h4>
                      <div className={styles.item_container}>
                        <div className={styles.item_wrapper}>
                          <FacebookIcon />
                          <InstagramIcon />
                          <LinkedInIcon />
                        </div>
                      </div>
                    </div>
                    {/* <div className={styles.pay_method}>
                      <h4 className={styles.title}>Phương thức thanh toán</h4>
                      <div className={styles.item_container}>
                        <div className={styles.item_wrapper}>
                          <a href="" className={styles.item}>
                            Momo
                          </a>
                          <a href="" className={styles.item}>
                            VNPAY
                          </a>
                          <a href="" className={styles.item}>
                            VISA
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
