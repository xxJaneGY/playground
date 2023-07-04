interface Props {
  todo: string;
  index: number;
  handleDelete: (index: number) => void;
}

export const TodoItem = ({ todo, index, handleDelete }: Props) => {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => handleDelete(index)}>DELETE</button>
    </div>
  );
};
