import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";
import i18next from "i18next";
import classNames from "classnames";

const languages = [
  {
    code: "en",
    name: "En",
    country_code: "gb",
  },
  {
    code: "ar",
    name: "Ar",
    dir: "rtl",
    country_code: "sa",
  },
];

const Language = () => {
  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <>
      <>
        <div className="language">
          <div className="dropdown">
            <button
              className="btn btn-link dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {currentLanguageCode}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {languages.map(({ code, name, country_code }) => (
                <li key={country_code}>
                  <p
                    className={classNames("dropdown-item lgpointer", {
                      disabled: currentLanguageCode === code,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(code);
                      // window.location.reload();
                    }}
                  >
                    {name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    </>
  );
};
export default Language;
