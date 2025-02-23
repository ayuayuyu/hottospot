import styles from "./Search.module.scss";
import { Icon } from "@iconify/react";
import { auth } from "../firebase/api/firebase";
import defalutImg from "../../public/img/defalutIcon.png";
import { useNavigate } from "react-router-dom";

const getUserInfo = () => {
  return auth.currentUser;
};

const Search = () => {
  const user = getUserInfo();
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Icon
          icon="heroicons:magnifying-glass-16-solid"
          style={{
            fontSize: "24px",
            color: "#293641",
          }}
        />
        場所を検索...
      </div>
      <img
        onClick={() => {
          navigate("/profile");
        }}
        style={{ width: "48px", height: "48px", borderRadius: "100px" }}
        src={user.photoURL || defalutImg}
        alt="user"
        className={styles.photo}
      />
    </div>
  );
};
export default Search;
