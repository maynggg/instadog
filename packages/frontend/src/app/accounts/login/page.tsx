import styles from "./styles.module.css";
import LogInForm from "@/components/LogInForm";
import Link from "next/link";
import Image from "next/image";
import PhoneMockUp from "@/components/PhoneMockup";

const LogIn = () => {
  return (
    <div className={styles.loginPage}>
      <PhoneMockUp />
      <div className={styles.logInPanel}>
        <div className={styles.logInInputArea}>
          <Image
            className={styles.appLogo}
            src="/logo.svg"
            width={200}
            height={100}
            alt="instadog logo"
            priority={true}
          />
          <LogInForm />
          <div className={styles.dividerGroup}>
            <div className={styles.dividerLine}></div>
            <p className={styles.dividerText}>OR</p>
            <div className={styles.dividerLine}></div>
          </div>
          <button className={styles.oAuthButton}>
            <Image src="/facebookLogo.png" width={25} height={25} alt="facebook logo" />
            <span className={styles.oAuthButtonText}>Log in with Facebook</span>
          </button>
        </div>
        <div className={styles.signUpCTA}>
          <p className={styles.signUpCTAText}>
            Don&apos;t have an account?{" "}
            <Link className={styles.signUpCTALink} href="/accounts/signup">
              Sign up
            </Link>
          </p>
        </div>
        <div className={styles.appDownloadCTA}>
          <p className={styles.appDownloadCTAText}>Get the app.</p>
          <div className={styles.appDownloadCTAIconGroup}>
            <Link className={styles.storeButton} href="https://apps.apple.com/us/app/instagram/id389801252?vt=lo">
              <Image src="/appStoreDownload.png" layout="fill" objectFit="contain" alt="app store download icon" />
            </Link>
            <Link
              className={styles.storeButton}
              href="https://play.google.com/store/apps/details?id=com.instagram.android"
            >
              <Image src="/googlePlayDownload.png" layout="fill" objectFit="contain" alt="google play download icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
