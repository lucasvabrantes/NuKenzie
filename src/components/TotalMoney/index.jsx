import styles from "./style.module.css";

export const TotalMoney = ({ listTransactions }) => {
  const totalAmount = listTransactions.reduce((previousValue, currentValue) => {
    if (currentValue.type == "Entrada") {
      return previousValue + Number(currentValue.value);
    } else if (currentValue.type == "Despesa") {
      return previousValue - Number(currentValue.value);
    }
  }, 0);

  return (
    <>
      {totalAmount != 0 ? (
        <div className={styles.totalBox}>
          <div className={styles.totalText}>
            <p className="title three">Valor total:</p>
            <p className="paragraph small">O valor total se refere ao saldo</p>
          </div>
          <strong>
            {totalAmount.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
