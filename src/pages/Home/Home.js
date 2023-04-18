import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <p className={styles.img}>
      <img src="pessoal.jpg" alt="foto pessoal" />  
        <h1>Ruan Rodrigues dos Santos</h1>
        <div>
          <ul>
            <p>
            Estou em busca de uma oportunidade na 
            Área de Desenvolvimento web. Atualmente 
            estou cursando Análise Desenvolvimento de 
            Sistema na faculdade Descomplica.
            </p>
          </ul>
        </div>
      </p>
    </div>
  )
}

export default Home