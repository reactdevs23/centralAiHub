import React, { useRef, useEffect, useState } from "react";
import styles from "./DataBase.module.css";

const Database = ({
  title,
  titleColor,
  leftData,
  rightData,
  borderColor,
  smallBoxBg,
}) => {
  const [maxWidth, setMaxWidth] = useState(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftWidth = leftRef.current
      ? getComputedStyle(leftRef.current).width
      : 0;
    const rightWidth = rightRef.current
      ? getComputedStyle(rightRef.current).width
      : 0;

    setMaxWidth(Math.max(parseFloat(leftWidth), parseFloat(rightWidth)));
  }, [leftData, rightData]);

  return (
    <div className="flex justify-center items-center gap-[32px] w-full">
      <div
        ref={leftRef}
        className=" rounded-full [box-shadow:2px_2px_24px_0px_rgba(0,_0,_0,_0.1)] min-w-[130px]  min-h-[130px] flex items-center flex-col justify-center gap-[10px] max-w-[200px] p-[20px] border-[1px] border-[var(--borderColor)]  aspect-square "
        style={{
          background: leftData.bgColor,
          borderColor: leftData.borderColor,
          minWidth: maxWidth ? `${maxWidth}px` : "auto",
        }}
      >
        <div className={styles.icon}>{leftData.icon}</div>
        <h4
          className="text-center text-[16px] not-italic font-bold leading-[22px]"
          dangerouslySetInnerHTML={{ __html: leftData.info }}
        ></h4>
      </div>
      <div
        className="bg-[var(--primaryColor)] p-[18px] w-full max-w-[390px] rounded-[30px] flex flex-col gap-[15px]"
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
        ref={rightRef}
        className="  rounded-full [box-shadow:2px_2px_24px_0px_rgba(0,_0,_0,_0.1)] min-w-[130px]  min-h-[130px] flex items-center flex-col justify-center gap-[10px] max-w-[200px] p-[17px] border-[1px] border-[var(--borderColor)]  aspect-square "
        style={{
          background: rightData.bgColor,
          borderColor: rightData.borderColor,
          minWidth: maxWidth ? `${maxWidth}px` : "auto",
        }}
      >
        <div className={styles.icon}>{rightData.icon}</div>
        <h4
          dangerouslySetInnerHTML={{ __html: rightData.info }}
          className="text-center   text-[16px] not-italic font-bold leading-[22px]"
        ></h4>
      </div>
    </div>
  );
};

export default Database;
