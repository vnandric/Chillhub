/* eslint-disable @next/next/no-img-element */
import styles from "./navbar.module.scss";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";

import { signIn, signOut, useSession } from "next-auth/react";

const Component = () => {
  const { data: session, status } = useSession();

  return (
    <nav className={styles.Nav}>
      <div className={styles.left}>
        <img src="/chillhub.png" alt="jpg" />
      </div>
      
      <div className={styles.center}>
        <div className={styles.above}>
          <div className={styles.search}>
            <input type="text" />
            <button><FiSearch /></button>
          </div>
        </div>
      
        <div className={styles.below}>
          <div className={styles.favorieten}> 
            <Link href="#">Add more favorites</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.right}>
        <div className={styles.profile}>
          <div className={styles.box}>Logged in as: {session?.user?.name}</div>
          <BsFillPersonFill />
        </div>
        <div className={styles.manage}>
          <Link href="#">Manage account</Link>
        </div>
      </div>
    </nav>
  );
};
export default Component;