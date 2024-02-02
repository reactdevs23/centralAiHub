import React from "react";
import CenterImage from "../../images/CenterImge";
import Shadow from "../../images/Shadow";
import styles from "./MainComponent.module.css";
import Database from "../Database/Database";
import IndustryProfessional from "../IndustryProfessional/IndustryProfessional";
const MainComponent = ({ data, dataBaseData, downArrow }) => {
  return (
    <div className="flex py-24  flex-col justify-center items-center min-h-screen w-full">
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

        <div className="relative  w-60	h-60 bg-[var(--secondaryColor)] rounded-full flex justify-center items-center">
          <div className="flex flex-col gap-5 w-[83%] h-[83%] bg-[var(--primaryColor)] justify-center items-center rounded-full">
            <CenterImage color="#93DEF7" />
            <p className="text-black text-center font-semibold text-lg leading-tight">
              Central AI Hub
            </p>
            <div
              className={[
                "absolute w-full  left-1/2 -translate-x-1/2  ",
                styles.shadow,
              ].join(" ")}
            >
              <Shadow firstColor="#98A2B3" secondColor="#EFF7F9" />
              <div className="absolute bottom-1/5 left-2/4 -translate-x-1/2">
                {downArrow}
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Database {...dataBaseData} />
      <IndustryProfessional
        users={dataBaseData.users}
        arrow={dataBaseData.bidirectionalArrow}
        subtitle={dataBaseData.subTitle}
      />
    </div>
  );
};

export default MainComponent;
