import styles from "./body.module.scss";
import { Col, Row, Space } from "antd";
import Image from "next/image";
import travelBanner from "@/public/images/banner.svg";
import first_step from "@/public/images/step_1.webp";
import second_step from "@/public/images/step_2.webp";
import third_step from "@/public/images/step_3.webp";
import { ArrowRightOutlined } from "@ant-design/icons";
import CardComponent from "@/shared/components/card/card.component";

const Body = () => {
  return (
    <>
      <div className={styles.body_container}>
        <div className={styles.body_main}>
          <div className={styles.body_wrapper}>
            <div className={styles.body_banner}>
              <Image alt="" src={travelBanner} className={styles.banner} />
            </div>
            <div className={styles.section_step}>
              <div className={styles.section_step_main}>
                <div className={styles.step_wrapper}>
                  <div className={styles.step_title}>
                    <h2>Booking with VN-Travel</h2>
                    <p>
                      Chỉ với 3 bước đơn giản và dễ dàng có ngay trải nghiệm
                      tuyệt vời
                    </p>
                  </div>
                  <div className={styles.content_steps}>
                    <Row className={styles.content_steps_wapper}>
                      <Col span={8} className={styles.step}>
                        <div className={styles.number_thumb}>
                          <div className={styles.number}>1</div>
                          <Image
                            alt=""
                            src={first_step}
                            className={styles.banner}
                          />
                        </div>
                        <div className={styles.step_infor}>
                          <h3>Chọn địa điểm</h3>
                          <p>
                            Hãy chọn bất cứ đâu bạn muốn đến,
                            <br /> việc còn lại hãy để VN-Travel!
                          </p>
                        </div>
                      </Col>
                      <Col span={8} className={styles.step}>
                        <div className={styles.number_thumb}>
                          <div className={styles.number}>2</div>
                          <Image
                            alt=""
                            src={second_step}
                            className={styles.banner}
                          />
                        </div>
                        <div className={styles.step_infor}>
                          <h3>Đặt vé</h3>
                          <p>
                            VN-Travel sẽ hỗ trợ bạn đặt vé trực tiếp
                            <br />
                            nhanh chóng và thuận tiện
                          </p>
                        </div>
                      </Col>
                      <Col span={8} className={styles.step}>
                        <div className={styles.number_thumb}>
                          <div className={styles.number}>3</div>
                          <Image
                            alt=""
                            src={third_step}
                            className={styles.banner}
                          />
                        </div>
                        <div className={styles.step_infor}>
                          <h3>Thanh toán</h3>
                          <p>
                            Hoàn thành bước thanh toán và sẵn sàng
                            <br />
                            cho chuyến đi của bạn
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section_tour_good_price}>
              <div className={styles.tour_good_price_wrapper}>
                <div className={styles.block_title}>
                  <Row>
                    <Col span={12}>
                      <h2>
                        <a href="">Tour giá tốt</a>
                      </h2>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                      <a href="">
                        <Space>
                          Xem thêm
                          <ArrowRightOutlined />
                        </Space>
                      </a>
                    </Col>
                  </Row>
                  <p>Hơn 1000 tour đa dạng giá tốt</p>
                </div>
                <div className={styles.block_product}>
                  <Row className={styles.product_wrapper}>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className={styles.section_tour_good_price}>
              <div className={styles.tour_good_price_wrapper}>
                <div className={styles.block_title}>
                  <Row>
                    <Col span={12}>
                      <h2>
                        <a href="">Giá siêu ưu đãi có hạn</a>
                      </h2>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                      <a href="">
                        <Space>
                          Xem thêm
                          <ArrowRightOutlined />
                        </Space>
                      </a>
                    </Col>
                  </Row>
                  <p>Hơn 1000 tour đa dạng giá tốt</p>
                </div>
                <div className={styles.block_product}>
                  <Row className={styles.product_wrapper}>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className={styles.section_tour_good_price}>
              <div className={styles.tour_good_price_wrapper}>
                <div className={styles.block_title}>
                  <Row>
                    <Col span={12}>
                      <h2>
                        <a href="">Tour trong nước</a>
                      </h2>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                      <a href="">
                        <Space>
                          Xem thêm
                          <ArrowRightOutlined />
                        </Space>
                      </a>
                    </Col>
                  </Row>
                  <p>Hơn 1000 tour đa dạng giá tốt</p>
                </div>
                <div className={styles.block_product}>
                  <Row className={styles.product_wrapper}>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                    <Col className={styles.product_item}>
                      <CardComponent />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
