import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div>
      <section className={styles.welcome}>
        <h1>Bem-Vindo à MedJunior</h1>
      </section>
      <section className={styles.infoSection}>
        <div className={styles.about}>
          <h2>Sobre nós</h2>
          <div>
            <p>
              A MedJunior é uma empresa júnior composta integralmente por alunos
              de medicina. A criação da empresa se deu após o questionamento de
              alunos que estavam preocupados com seu futuro após a formatura,
              estudantes que buscavam fazer mais pela medicina e pela saúde como
              um todo. Com total apoio da UFRJ e dos professores do departamento
              de medicina surgiu a MedJunior, empresa federada à{" "}
              <span>RioJúnior</span> e criada em Outubro de 2014 que desde então
              vem fazendo história pela medicina do estado do Rio de Janeiro e
              pelo resto do Brasil
            </p>
          </div>
        </div>
        <div className={styles.value}>
          <div>
            <h3>Missão:</h3>
            <p>
              Transformar o futuro da medicina através de ideias inovadoras,
              soluções práticas e acessibilidade.
            </p>
          </div>
          <div>
            <h3>Visão:</h3>
            <p>
              Formentar jovens acadêmicos com vontade de aprender e fazer o bem,
              buscando sempre um futuro melhor.
            </p>
          </div>
          <div>
            <h3>Valores:</h3>
            <ul>
              <li>Transparência e ética</li>
              <li>Dedicação e garantia de qualidade</li>
              <li>Confiança e confiabilidade</li>
              <li>Jogar de Udyr</li>
            </ul>
          </div>
        </div>
      </section>
      <section className={styles.contactSection}>
        <form action="#">
          <h2>Contato</h2>
          <label htmlFor="name">Nome:</label>
          <input id="name" type="text" placeholder="João da Silva" />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" placeholder="nome@email.com" />
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            placeholder="Digite sua mensagem"
            rows="5"
          ></textarea>
        </form>
      </section>
    </div>
  );
};
