import BasicTable from "../../components/Table"
import Button from "@mui/material/Button"

import styles from "./styles.module.css"

const headers = [
  { field: "product", headerName: "Produto" },
  { field: "brand", headerName: "Marca" },
  { field: "value", headerName: "Valor" },
  { field: "actions", headerName: "Ações" },
]

export function Products() {
  return (
    <section style={{ padding: "20px" }}>
      <div className={styles["content-header"]}>
        <h2>Produtos registrados</h2>

        <Button title="Cadastrar produto" variant="contained" color="primary">
          Cadastrar produto
        </Button>
      </div>
      <BasicTable headers={headers} />
    </section>
  )
}
