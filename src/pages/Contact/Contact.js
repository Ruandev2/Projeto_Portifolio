import styles from "./Contact.module.css";
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication';
const Contact = () => {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("")
    const user = {
      nome,
      tel,
      email
    }
    console.log(user)

    const res = await createUser(user);

    console.log(res);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

return (
  <div className={styles.contact}>
    <h1>Entre contato</h1>
    <form onSubmit={handleSubmit} >
      <label>Nome</label>
      <input type="text"
        name="name"
        required
        placeholder='Nome do Usuario'
        value={nome}
        onChange={(e) => setNome(e.target.value)} />
      <label>Tel:</label>
      <input type="number"
        name="number"
        required
        placeholder='Insira seu Telefone'
        value={tel}
        onChange={(e) => setTel(e.target.value)} />
      <label>E-mail:</label>
      <input type="email" name="email"
        required
        placeholder='Nome do Usuario'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <input type="submit" value="Enviar" />
    </form>
  </div>
)
}

export default Contact