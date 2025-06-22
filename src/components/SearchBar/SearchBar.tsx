import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const handleAction = async (formData: FormData) => {
    const query = (formData.get("query") as string).trim();

    if (!query) {
      toast.error("Please enter a search query.");
      return;
    }

    onSubmit(query);
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} action={handleAction}>
        <input
          type="text"
          name="query"
          placeholder="Search movies..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Search
        </button>
      </form>
    </header>
  );
}
