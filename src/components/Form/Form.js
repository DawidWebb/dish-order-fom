import { Form, Field } from "react-final-form";
import { useHistory } from "react-router-dom";
import { addOrder } from "../../data/actions";
import { useDispatch } from "react-redux";
import { Button } from "../../components";

import styles from "./form.module.scss";

const required = (value) => (value ? undefined : "Pole wymagane");

const From = () => {
  const dispatch = useDispatch();

  const history = useHistory();

  const onSubmit = (values) => {
    const orderObject = {
      name: values.nameOfDish,
      preparation_time: values.duration,
      type: values.typeOfDish,
      no_of_slices: !values.noOfSlice ? null : Number(values.noOfSlice),
      diameter: !values.rangeOfSize ? null : Number(values.rangeOfSize),
      spiciness_scale: !values.spicinesScale
        ? null
        : Number(values.spicinesScale),
      slices_of_bread: !values.slicesOfBread
        ? null
        : Number(values.slicesOfBread),
    };
    dispatch(addOrder(orderObject));
    history.push("/order");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>Formularz zamówień</h2>
      </div>
      <div className={styles.form}>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form
              onSubmit={(event) => {
                const promise = handleSubmit(event);
                promise &&
                  promise.then(() => {
                    form.reset();
                  });
                return promise;
              }}
            >
              <div className={styles.basicSelect}>
                <Field name="nameOfDish" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>nazwa dania</label>
                      <input type="text" {...input} />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="duration" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>czas przygotowania</label>
                      <input type="time" {...input} step="1" />
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="typeOfDish" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <label>wybierz danie</label>
                      <select {...input}>
                        <option></option>
                        <option value="pizza">pizza</option>
                        <option value="soup">zupa</option>
                        <option value="sandwich">kanapka</option>
                      </select>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
                    </div>
                  )}
                </Field>
              </div>
              <div className={styles.specialSelect}>
                {values.typeOfDish === "pizza" ? (
                  <div>
                    <Field name="noOfSlice" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>ilość kawałków</label>
                          <input type="number" {...input} />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="rangeOfSize" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>średnica</label>
                          <input
                            type="range"
                            min="25"
                            max="155"
                            step="10"
                            {...input}
                          />
                          <pre>{values.rangeOfSize} cm</pre>
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                ) : (
                  ""
                )}
                {values.typeOfDish === "soup" ? (
                  <div>
                    <Field name="spicinesScale" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>skala ostrości</label>
                          <input
                            type="range"
                            min="1"
                            max="10"
                            step="1"
                            value="1"
                            {...input}
                          />
                          <pre>{values.spicinesScale} </pre>
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                ) : (
                  ""
                )}
                {values.typeOfDish === "sandwich" ? (
                  <div>
                    <Field name="slicesOfBread" validate={required}>
                      {({ input, meta }) => (
                        <div>
                          <label>ilość kromek</label>
                          <input type="number" {...input} />
                          {meta.error && meta.touched && (
                            <span>{meta.error}</span>
                          )}
                        </div>
                      )}
                    </Field>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className={styles.operationButtons}>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                  className={styles.resetButton}
                >
                  reset
                </button>
                <Button type="submit" disabled={submitting} name="wyślij" />
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
};

export default From;
