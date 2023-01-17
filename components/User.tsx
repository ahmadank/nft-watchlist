import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "../styles/Header.module.css";
import { getUserInfo } from "../functions/query";
import { useState, useEffect } from "react";

function User(props: any) {
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");
  useEffect(() => {
    async function getData() {
      const user = await getUserInfo(props.session.user.id);
      setUserName(user[0].full_name);
      setUserImage(user[0].avatar_url);
    }
    getData();
  }, []);
  return (
    <div className={styles.user}>
      {userImage != null ? (
        <img
          src={userImage}
          style={{
            borderRadius: "50%",
            maxWidth: "30px",
            maxHeight: "30px",
            marginRight: "10px",
          }}
        />
      ) : (
        <AccountCircleIcon />
      )}
      <p>Welcome {userName}</p>
    </div>
  );
}
export default User;
