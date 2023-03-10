import React, { useEffect } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAds, STATUSES } from "../../../redux/getReducer/getAdsSlice";

import Cookies from "js-cookie";
import Carousel from "react-bootstrap/Carousel";

import DefaultImg from "../../../assets/default.png";
const Sponsor = () => {
  const dispatch = useDispatch();
  const { data: ads, status } = useSelector((state) => state.ads);
  const cookiedata = Cookies.get("i18next");

  useEffect(() => {
    dispatch(fetchAds());
  }, [dispatch]);

  if (status === STATUSES.LOADING) {
    return <></>;
  }

  if (status === STATUSES.ERROR) {
    return (
      <h2
        style={{
          margin: "100px",
        }}
      >
        Something went wrong!
      </h2>
    );
  }
  return (
    <>
      <div className="sponsor">
        <Carousel>
          {ads.map((item) => {
            return (
              <Carousel.Item interval={2000}>
                <a href={item.Url} target="_">
                  <div className="sponsorimg">
                    <img src={item.image ? item.image : DefaultImg} alt="" />
                    <h2 className="first-txt">
                      {cookiedata === "en" ? (
                        item.TitleEn === null ? (
                          <>N/A</>
                        ) : (
                          item.TitleEn
                        )
                      ) : item.TitleAr === null ? (
                        <>N/A</>
                      ) : (
                        item.TitleAr
                      )}
                    </h2>
                  </div>
                </a>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};
export default Sponsor;
