import React from "react";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

import { AiOutlineDownload, AiFillMobile, AiFillStar } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";

import image_get_on_google_play from "../../../../assets/device-info/image_get_on_google_play.png";
import image_huawei_app_gallery from "../../../../assets/device-info/image_huawei_app_gallery.png";

import "./styles.css";

const reviews = [
  {
    id: 0,
    name: "Simon Powell",
    review:
      "Can't say enough good things about this tool. Now all I have to do is root this blade a51 and I can enjoy full functionality and diagnostic bliss at long last. Truly inspired, thankyou.",
  },
  {
    id: 1,
    name: "Pranav Upadhyay",
    review:
      "This app is really amazing and helpful. User interface of the app is great and easy to use. I get all my system details in it and also I can check in my system performance. Overall u should give it a try and it will be very helpful.",
  },
  {
    id: 2,
    name: "Cristine E. Wright",
    review:
      "Clean and informative interface. Even the add placement is non-obtusive. Generally, I hate adds and rather support developers so I paid the $2 for the add free version. Well worth it and earned on their end.",
  },
];

const DeviceInfoStats = () => {
  return (
    <>
      <div className="device-info-reviews" id="reviews">
        <h2 className="reviews-heading">Reviews</h2>
        <div className="reviews-holder">
          {reviews.map(({ id, name, review }) => (
            <div key={id} className="review">
              <h4>{name}</h4>
              <div className="star-holder">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <p>{review}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="device-info-stats">
        <h2 className="stats-heading">Stats</h2>
        <div className="stats-holder">
          <div className="stat">
            <AiOutlineDownload className="icon" />
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div>
                  {isVisible ? <CountUp end={105745} duration={1} /> : "105745"}
                </div>
              )}
            </VisibilitySensor>
            <h4>Downloads</h4>
          </div>
          <div className="stat">
            <AiFillMobile className="icon" />
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div>
                  {isVisible ? <CountUp end={20780} duration={1} /> : "20780"}
                </div>
              )}
            </VisibilitySensor>
            <h4>Active Devices</h4>
          </div>
          <div className="stat">
            <BsPencilSquare className="icon" />
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <div>
                  {isVisible ? <CountUp end={2714} duration={1} /> : "2714"}
                </div>
              )}
            </VisibilitySensor>
            <h4>Reviews</h4>
          </div>
          <div className="stat">
            <AiFillStar className="icon" />
            <div>4.64</div>
            <h4>Average Rating</h4>
          </div>
        </div>
        <div className="device-info-download-img-holder">
          <a
            href="https://play.google.com/store/apps/details?id=com.toralabs.deviceinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="device-info-download-img-1"
          >
            <img src={image_get_on_google_play} />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.toralabs.deviceinfo"
            target="_blank"
            rel="noopener noreferrer"
            className="device-info-download-img-2"
          >
            <img src={image_huawei_app_gallery} />
          </a>
        </div>
      </div>
    </>
  );
};

export default DeviceInfoStats;
