import React from "react";
import styles from "./DataBase.module.css";

const Database = ({ title, leftData, rightData, borderColor, smallBoxBg }) => {
  return (
    <div className="flex justify-between items-center gap-[32px]">
      <div
        className="rounded-[103px] [box-shadow:2px_2px_24px_0px_rgba(0,_0,_0,_0.1)] min-w-[128px] h-[128px] flex items-center flex-col justify-center gap-[10px] p-[12px]"
        style={{
          background: leftData.bgColor,
          borderColor: leftData.borderColor,
        }}
      >
        <div>{leftData.icon}</div>
        <h4 className="text-center text-[16px] not-italic font-medium leading-[125%]">
          {leftData.info}
        </h4>
      </div>
      <div
        className="bg-[var(--primaryColor)] p-[18px] w-full min-w-[390px] rounded-[30px] flex flex-col gap-[15px]"
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
        <h2 className="text-[#000] text-center text-[18px] not-italic font-semibold leading-[122.222%]">
          {" "}
          {title}
        </h2>
      </div>{" "}
      <div
        className="rounded-[103px] [box-shadow:2px_2px_24px_0px_rgba(0,_0,_0,_0.1)] min-w-[128px] h-[128px] flex items-center flex-col justify-center gap-[10px] p-[12px]"
        style={{
          background: rightData.bgColor,
          borderColor: rightData.borderColor,
        }}
      >
        <div>{rightData.icon}</div>
        <h4 className="text-center text-[16px] not-italic font-medium leading-[125%]">
          {rightData.info}
        </h4>
      </div>
    </div>
  );
};

export default Database;
