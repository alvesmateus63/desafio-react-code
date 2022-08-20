import React from "react";
import styles from "./NewsLetter.module.scss";

const NewsLetter = () => {
  return (
    <form>
      <label htmlFor="name">Nome*</label>
      <input id="name" type="text" />
      <label htmlFor="email">Email*</label>
      <input id="email" type="email" />
    </form>
  );
};

export default NewsLetter;
