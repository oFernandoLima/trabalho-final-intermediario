import styles from "./styles.module.css"
import AdbIcon from "@mui/icons-material/Adb"

export function Footer() {
  const pages = ["Início", "Produtos", "Fale conosco"]
  const products = [
    "Tênis para corrida",
    "Tênis para academia",
    "Sneakers",
    "Casual",
  ]
  const supports = ["Ajuda com produto", "Nossos serviços", "Fale conosco"]

  return (
    <footer className={styles["footer"]}>
      <section className={styles["section-footer"]}>
        <AdbIcon sx={{ mr: 1 }} />

        <div className={styles["container-list-items"]}>
          <p>Empresa</p>
          <ul>
            {pages.map((page) => (
              <li key={page}>{page}</li>
            ))}
          </ul>
        </div>

        <div className={styles["container-list-items"]}>
          <p>Produtos</p>
          <ul>
            {products.map((prodcut) => (
              <li key={prodcut}>{prodcut}</li>
            ))}
          </ul>
        </div>

        <div className={styles["container-list-items"]}>
          <p>Suporte</p>
          <ul>
            {supports.map((support) => (
              <li key={support}>{support}</li>
            ))}
          </ul>
        </div>
      </section>

      <p className={styles["copyright"]}>
        Todos os direitos reservados © 2025
      </p>
    </footer>
  )
}
