import Button from "../Button/Button";
import styles from "./Error.module.css";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  function HandleGoBack() {
    navigate(-1);
  }
  return (
    <div className={styles.error}>
      <div>
        <Button type={"error"} event={HandleGoBack}>
          &larr; Go back
        </Button>
        <p>{error.data || error.message}</p>
      </div>
      <h1>Something went wrong 😢</h1>
    </div>
  );
}

export default Error;
