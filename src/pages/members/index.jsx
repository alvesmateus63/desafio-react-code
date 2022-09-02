import React from "react";
import styles from "./members.module.scss";
import MemberCard from "../../components/MemberCard";

export const Members = () => {
  const [members, setMembers] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("http://localhost:3000/members");
    const data = await response.json();
    setMembers(data);
  };

  return (
    <div className={styles.cardContainer}>
      {members.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          email={member.email}
          cargo={member.cargo}
          aniversario={member.aniversario}
          departamentos={member.departamentos}
        />
      ))}
    </div>
  );
};
