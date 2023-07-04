import { ChangeEvent, FormEvent } from "react";

interface Props {
  value: string;
  handleChangeText: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAdd: (e: FormEvent<HTMLFormElement>) => void;
}

export const AddItem = ({ value, handleChangeText, handleAdd }: Props) => {
  return (
    <form onSubmit={handleAdd}>
      <input type="text" value={value} onChange={handleChangeText} />
      <button type="submit" onClick={() => handleAdd}>
        ADD
      </button>
    </form>
  );
};
