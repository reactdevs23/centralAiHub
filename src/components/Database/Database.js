import React from "react";
import styles from "./DataBase.module.css";

const Database = ({
  title,
  titleColor,
  leftData,
  rightData,
  borderColor,
  smallBoxBg,
}) => {
  return (
    <div className="flex justify-between items-center gap-[32px]">
      <div
        className="left flex-1 rounded-full [box-shadow:2px_2px_24px_0px_rgba(0,_0,_0,_0.1)] min-w-[130px] h-[130px] flex items-center flex-col justify-center gap-[10px] p-[12px] border-[1px] border-[var(--borderColor)] "
        style={{
          background: leftData.bgColor,
          borderColor: leftData.borderColor,
        }}
      >
        <div className={styles.icon}>{leftData.icon}</div>
        <h4 className="text-center text-[16px] not-italic font-bold leading-[22px]">
          {leftData.info}
        </h4>
      </div>
      <div
        className="bg-[var(--primaryColor)] p-[18px] w-full min-w-[390px] rounded-[30px] flex flex-col gap-[15px] max-auto"
        style={{ "--borderColor": borderColor, "--smallBoxBg": smallBoxBg }}
      >
        <div className="grid grid-cols-[0.8fr_1.2fr_1.6fr] rounded-[8px] border-[1px] border-[var(--borderColor)] bg-[var(--primaryColor)] w-full">
          <div className={[styles.firstColumn, styles.column].join(" ")}>
            {Array.from({ length: 5 }, (_, i) => (
              <div className={styles.row} key={i}>
                <div className={styles.bar}></div>
              </div>
            ))}
          </div>
          <div className={[styles.secondColumn, styles.column].join(" ")}>
            {" "}
            {Array.from({ length: 5 }, (_, i) => (
              <div className={styles.row} key={i}>
                <div className={styles.bar}></div>
              </div>
            ))}
          </div>
          <div className={[styles.thirdColumn, styles.column].join(" ")}>
            {" "}
            {Array.from({ length: 5 }, (_, i) => (
              <div className={styles.row} key={i}>
                <div className={styles.bar}></div>
              </div>
            ))}
          </div>
        </div>
        <h2
          className={`text-[${titleColor}] text-center text-[18pt] not-italic font-semibold leading-[22pt]`}
        >
          {" "}
          {title}
        </h2>
      </div>{" "}
      <div
        className="right flex-1 rounded-full [box-shadow:2px_2px_24px_0px_rgba(0,_0,_0,_0.1)] min-w-[130px] h-[130px] flex items-center flex-col justify-center gap-[10px] p-[12px] border-[1px] border-[var(--borderColor)]  "
        style={{
          background: rightData.bgColor,
          borderColor: rightData.borderColor,
        }}
      >
        <div className={styles.icon}>{rightData.icon}</div>
        <h4 className="text-center text-[16px] not-italic font-bold leading-[22px]">
          {rightData.info}
        </h4>
      </div>
    </div>
  );
};

export default Database;
