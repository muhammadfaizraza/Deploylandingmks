import React, { useEffect } from "react";
import "../../CSS/HomeCSS/blogs.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews, STATUSES } from "../../../redux/getReducer/getNewsSlice";
import ScrollContainer from "react-indiana-drag-scroll";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Blog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data: allnews, status } = useSelector((state) => state.news);

  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);
  const viewMore = (item) => {
    navigate("blogdetails", {
      state: {
        blogs: item,
      },
    });
  };

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

  const cookiedata = Cookies.get("i18next");
  return (
    <>
      <div className="BlogCard">
        <div className="blognews">
          <h1>{t("newsblogs")}</h1>
        </div>
        <div className="innerCardBlogs">
          {allnews === undefined ? (
            <></>
          ) : (
            <ScrollContainer className="scroll-container1">
              {allnews.map((item) => {
                return (
                  <div
                    className="singleCardBlogs"
                    onClick={() => viewMore(item)}
                  >
                    <img src={item.image} alt="" />
                    <h2
                      style={{
                        maxWidth: "500px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {cookiedata === "en" ? item.TitleEn : item.TitleAr}
                    </h2>
                    <h3
                      style={{
                        maxWidth: "500px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {cookiedata === "en"
                        ? item.SecondTitleEn
                        : item.SecondTitleAr}
                    </h3>
                  </div>
                );
              })}
            </ScrollContainer>
          )}
        </div>
      </div>
    </>
  );
};
export default Blog;
