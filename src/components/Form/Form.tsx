import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";
import { FormEvent, useState, ChangeEvent } from "react";

import style from "./Form.module.css";

interface FormProps {
  onSubmit: (query: string) => void;
}

export default function Form({ onSubmit }: FormProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    
    if (!searchValue.trim()) {
      toast.error("Please enter a search term");
      return;
    }

    onSubmit(searchValue.trim());
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        value={searchValue}
        onChange={handleInputChange}
        autoFocus
      />

      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>
    </form>
  );
}
