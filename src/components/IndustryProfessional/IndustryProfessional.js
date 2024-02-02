import React from "react";

const IndustryProfessional = ({ users, arrow, subTitle }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center pt-16 gap-8">
        {users.map((el, i) => (
          <div className="relative" key={i}>
            {el}
            <div className="absolute top-[0] left-2/4 -translate-x-1/2 translate-y-[calc(-100%-13px)]">
              {arrow}
            </div>
          </div>
        ))}
      </div>{" "}
      <p className="text-[#000] text-center text-[16px] not-italic font-normal leading-[137.5%]">
        {subTitle}
      </p>
    </div>
  );
};

export default IndustryProfessional;
/*
import React from "react";
import styles from "./IndustryProfessional.module.css";
import UserIcon from "../../images/UserIcon";
import BidirectionArrow from "../../images/BidirectionArrow";

const IndustryProfessional = () => {
  const data = [<UserIcon />, <UserIcon />, <UserIcon />, <UserIcon />];
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-center pt-16 gap-5">
        {data.map((el, i) => (
          <div className="relative" key={i}>
            {el}
            <div className="absolute top-[0] left-2/4 -translate-x-1/2 translate-y-[calc(-100%-10px)]">
              <BidirectionArrow />
            </div>
          </div>
        ))}
      </div>{" "}
      <p className="text-[#000] text-center text-[16px] not-italic font-normal leading-[137.5%]">
        Industry Professionals
      </p>
    </div>
  );
};

export default IndustryProfessional;
import React from "react";
import styles from "./IndustryProfessional.module.css";

const IndustryProfessional = ({ users, arrow, subTitle }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        {users.map((el, i) => (
          <div className={styles.iconContainer} key={i}>
            {el}
            <div className={styles.arrow}>{arrow}</div>
          </div>
        ))}
      </div>{" "}
      <p className={styles.title}>{subTitle}</p>
    </div>
  );
};

export default IndustryProfessional;
/*

*/
