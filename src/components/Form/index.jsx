import { useState } from "react";
import styles from "./style.module.css";

export const Form = ({ addTransactionToTheList }) => {
  const [formData, setFormData] = useState({
    description: "",
    value: "",
    type: "",
  });

  const submit = (event) => {
    event.preventDefault();

    addTransactionToTheList(formData);

    setFormData({
      description: "",
      value: "",
      type: "",
    });
  };

  return (
    <div className={styles.formBox}>
      <form className="form" onSubmit={submit}>
        <label htmlFor="description" className="paragraph">
          Descrição
        </label>
        <input
          className={styles.input}
          type="text"
          name="description"
          id="description"
          placeholder="Digite aqui sua descrição"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          required
        />
        <small className="paragraph small">Ex: Compra de sapatos</small>

        <label htmlFor="value" className="paragraph">
          Valor (R$)
        </label>
        <input
          className={styles.input}
          type="number"
          name="value"
          id="value"
          placeholder="Digite aqui o valor da transação"
          value={formData.value}
          onChange={(e) => setFormData({ ...formData, value: e.target.value })}
          required
        />

        <label htmlFor="type" className="paragraph">
          Tipo de valor
        </label>
        <select
          value={formData.type}
          onChange={(event) =>
            setFormData({ ...formData, type: event.target.value })
          }
        >
          <option value="">Escolha aqui o tipo de valor</option>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
        <button className="btn lg" type="submit">
          Inserir Valor
        </button>
      </form>
    </div>
  );
};
