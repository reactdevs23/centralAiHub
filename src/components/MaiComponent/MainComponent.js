import React from "react";

import styles from "./MainComponent.module.css";
import Database from "../Database/Database";
import IndustryProfessional from "../IndustryProfessional/IndustryProfessional";
const MainComponent = ({
  title,
  titleColor,
  data,
  dataBaseData,
  downArrow,
  centerImage,
  shadowImage,
  label,
  labelColor,
}) => {
  return (
    <div
      className={`bg-[var(--mainBg)] relative z-10 flex py-24  flex-col justify-center items-center min-h-screen w-full`}
    >
      <div
        className={styles.container}
        style={{ marginTop: data.length === 3 && "180px" }}
      >
        {data.map((el, i) => (
          <div
            key={i}
            className={[
              styles.circle,
              data.length === 2 && styles.onlyTwoItems,
              data.length === 3 && styles.onlyThreeItems,
              styles[`circle-${i + 1}`],
            ].join(" ")}
          >
            {el.icon}
            <div className={[styles.arrow, styles[`arrow-${i + 1}`]].join(" ")}>
              {el.arrow}
            </div>{" "}
            <p className={[styles.info, styles[`info-${i + 1}`]].join(" ")}>
              {el.info}
            </p>
          </div>
        ))}

        <div
          style={{}}
          className="relative  w-60	h-60 bg-[var(--secondaryColor)] rounded-full flex justify-center items-center"
        >
          <div
            className="flex flex-col gap-5 w-[83%] h-[83%] bg-[var(--primaryColor)] justify-center items-center rounded-full"
            style={{ "--titleColor": titleColor }}
          >
            {centerImage}
            <p
              style={{ color: titleColor }}
              className={` text-center font-bold text-lg leading-tight`}
            >
              {title}
            </p>
            <div
              className={[
                "absolute w-full  left-1/2 -translate-x-1/2  ",
                styles.shadow,
              ].join(" ")}
            >
              {shadowImage}
              <div className={styles.bottomArrow}>{downArrow}</div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Database {...dataBaseData} />
      <IndustryProfessional
        users={dataBaseData.users}
        arrow={dataBaseData.bidirectionalArrow}
        subTitle={dataBaseData.subTitle}
        subTitleColor={dataBaseData.subTitleColor}
      />
      {/* <p
        className={styles.label}
        style={{ "--labelColor": dataBaseData.subTitleColor }}
      >
        {dataBaseData.subTitle}
      </p> */}
    </div>
  );
};

export default MainComponent;
