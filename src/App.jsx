import { useState } from "react";
import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/List";
import { v4 as uuidv4 } from "uuid";
import "./styles/index.css";
import styles from "./styles/pages/home.module.css";

function App() {
  const [listTransactions, setListTransactions] = useState([]);

  const addTransactionToTheList = (formData) => {
    if (formData.type == "") {
      return;
    }
    const newTransaction = { ...formData, id: uuidv4() };

    const newTransactionComplete = [...listTransactions, newTransaction];
    setListTransactions(newTransactionComplete);
  }; 

  const removeTransactionFromListTransactions = (transactionId) => {
    const newTransactionList = listTransactions.filter(
      (transaction) => transaction.id !== transactionId
    );

    setListTransactions(newTransactionList);
  };

  return (
    <div className="App">
      <Header />
      <main className="container">
        <div className={styles.flexBox}>
          <div className={styles.left}>
            <Form
              setListTransactions={setListTransactions}
              addTransactionToTheList={addTransactionToTheList}
            />
            <TotalMoney listTransactions={listTransactions} />
          </div>

          <div className={styles.right}>
            <h3 className="title three summary">Resumo Financeiro:</h3>
            <List
              listTransactions={listTransactions}
              removeTransactionFromListTransactions={
                removeTransactionFromListTransactions
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
