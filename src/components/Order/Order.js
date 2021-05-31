import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, BackButton } from "../../components";
import styles from "./order.module.scss";

const Order = () => {
  const order = useSelector((store) => store.order);

  const [showDretails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails((prev) => !prev);
  };

  const showOrder = !order.length
    ? ""
    : order.map((item) => (
        <div className={styles.order} key={item.preparation_time}>
          <div>
            <h3>Nazwa:</h3>
            <h3>{item.name}</h3>
          </div>
          <div>
            <p>czas przygotowania:</p>
            <p> {item.preparation_time}</p>
          </div>
          <div>
            <p>rodzaj dania:</p>
            <p> {item.type}</p>
          </div>

          {item.type === "pizza" ? (
            <div>
              <p>ilość kawałków: </p>
              <p>{item.no_of_slices}</p>
              <p>średnica: </p>
              <p>{item.diameter}cm</p>
            </div>
          ) : (
            ""
          )}
          {item.type === "soup" ? (
            <div>
              <p>ostrość: </p>
              <p>{item.spiciness_scale}</p>
            </div>
          ) : (
            ""
          )}
          {item.type === "sandwich" ? (
            <div>
              <p>ilość kanapek:</p>
              <p> {item.slices_of_bread}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      ));

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>Zamówienia</h2>
      </div>
      <div className={styles.orders}>{showOrder}</div>
      <BackButton />
    </div>
  );
};

export default Order;
