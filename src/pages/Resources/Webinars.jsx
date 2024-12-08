import { BBButton } from "@components";
import { EBooksData, Icons } from "@constants";
import { Avatar, Button } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Resources.module.css";
import { WebinarCover } from "@images";
import clsx from "clsx";

export const Webinars = () => {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={1}
      breakpoints={{
        575: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        991: {
          slidesPerView: 2.5,
          spaceBetween: 14,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 14,
        },
        1365: {
          slidesPerView: 3.5,
          spaceBetween: 18,
        },
        1439: {
          slidesPerView: 4,
          spaceBetween: 22,
        },
        1599: {
          slidesPerView: 4.5,
          spaceBetween: 33,
        },
      }}
      className={styles.resourcesSlider}
    >
      {EBooksData &&
        EBooksData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className={clsx(styles.resourcesCard, "")}>
                <Avatar
                  className={styles.resourceAvatar}
                  style={{
                    borderRadius: "var(--space-xl)",
                    color: item.iconColor,
                    backgroundColor: item.iconBGColor,
                  }}
                  shape="square"
                  size={55}
                  icon={item.icon}
                />
                <img src={WebinarCover} alt="" />
                <h3
                  style={{ color: item.iconColor }}
                  className="fw-semibold my-3"
                >
                  Guide to save max tax
                </h3>
                <div className="d-flex align-items-center mt-auto">
                  {item.isVideo && (
                    <Button
                      style={{ color: item.iconColor }}
                      shape="circle"
                      size="large"
                      type="text"
                      icon={Icons.Video}
                    />
                  )}
                  {item.isDocument && (
                    <Button
                      style={{ color: item.iconColor }}
                      shape="circle"
                      size="large"
                      type="text"
                      icon={Icons.Document}
                    />
                  )}
                  <BBButton
                    className="clr-primary ms-auto"
                    icon={Icons.ArrowRight}
                    style={{ backgroundColor: "#E7E7E7" }}
                    shape="circle"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};
