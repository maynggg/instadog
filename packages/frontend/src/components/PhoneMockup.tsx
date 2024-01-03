import styles from "./PhoneMockUp.module.css";
import Image from "next/image";

const PhoneMockUp = () => {
  return (
    <div className={styles.phoneMockUp}>
      <Image src="/phoneMockup.png" layout="fill" objectFit="contain" alt="phone screen mockup" />
    </div>
  );
};

export default PhoneMockUp;
