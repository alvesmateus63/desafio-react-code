import React from "react";
import styles from "./memberCard.module.scss";

const MemberCard = ({ name, email, cargo, aniversario, departamentos }) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.memberIdentifier}>
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
      <div className={styles.memberDep}>
        <div className={styles.depContainer}>
          <p className={styles.cardSubtitle}>Departamento:</p>
          <div>
            {departamentos.map((dep, index) => (
              <p key={index}>{dep}</p>
            ))}
          </div>
        </div>
        <div>
          <p className={styles.cardSubtitle}>Cargo:</p>
          <p>{cargo}</p>
        </div>
      </div>
      <div className={styles.memberBirthday}>
        <p className={styles.cardSubtitle}>Aniversário: </p>
        <p>{aniversario}</p>
      </div>
    </div>
  );
};

export default MemberCard;
