export const List = ({
  listTransactions,
  removeTransactionFromListTransactions,
}) => {
  return (
    <>
      {listTransactions.length > 0 ? (
        <ul>
          {listTransactions.map((transaction) => {
            return (
              <li
                className={
                  transaction.type == "Entrada" ? "card-green" : "card-white"
                }
                key={transaction.id}
              >
                <div className="leftSide">
                  <p className="title three">{transaction.description}</p>
                  <small className="card-typeOfvalue">{transaction.type}</small>
                </div>
                <div className="rightSide">
                  <p className="card-amount">
                    {Number(transaction.value).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                  <button
                    onClick={() =>
                      removeTransactionFromListTransactions(transaction.id)
                    }
                    className="btn sm"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="title two">Você ainda não possui nenhum lançamento</p>
      )}
    </>
  );
};
