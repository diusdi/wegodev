import { useState } from "react";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import SearchInput from "./components/FormInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import Empty from "./components/Empty";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    { title: "Susu Ultra", count: 1 },
    { title: "Tahu Sumedang", count: 1 },
    { title: "Semangka", count: 1 },
  ]);

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];
    newTodos[index].count += 1;
    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];
    if (newTodos[index].count > 1) {
      newTodos[index].count -= 1;
    } else {
      newTodos.splice(index, 1);
    }
    setTodos(newTodos);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value) {
      alert("List wajib diisi!");
      return;
    }

    const inputTodo = {
      title: value,
      count: 1,
    };

    const newTodos = [...todos, inputTodo];
    setTodos(newTodos);
    setValue("");
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, todo) => {
      return total + todo.count;
    }, 0);

    return totalCounts;
  };

  return (
    <>
      <Navbar />
      <Container>
        <SearchInput onSubmit={handleSubmit} onChange={(e) => setValue(e.target.value)} value={value} />

        <Info todosLength={todos.length} totalCounts={getTotalCounts()} onDelete={() => setTodos([])} />

        {todos.length > 0 ? <Todos todos={todos} onAddition={handleAdditionCount} onSubstraction={handleSubstractionCount} /> : <Empty />}
      </Container>
    </>
  );
}

export default App;
