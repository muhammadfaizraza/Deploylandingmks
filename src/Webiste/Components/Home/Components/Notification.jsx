import notificationIcon from "../../../assets/Notification.png";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

const Notification = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="notification">
        <OverlayTrigger
          overlay={
            <Tooltip className="TooltipTracker">{t("Notification")}</Tooltip>
          }
        >
          <span className="d-inline-block">
            <img
              src={notificationIcon}
              alt=""
              style={{
                cursor: "pointer",
              }}
            />
          </span>
        </OverlayTrigger>
      </div>
    </>
  );
};
export default Notification;
