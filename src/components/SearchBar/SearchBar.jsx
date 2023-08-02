import styles from "./style.module.css";
import { useState } from "react";
import { Search as SearchIcon } from "react-bootstrap-icons";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <>
      <SearchIcon size={27} className={styles.icon} />
      <input
        onKeyUp={submit}
        onChange={handleChange}
        className={styles.input}
        type="text"
        value={value}
        placeholder={"Search a show you may like"}
      />
    </>
  );
}
