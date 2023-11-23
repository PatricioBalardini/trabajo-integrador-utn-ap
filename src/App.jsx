import { useState, useEffect } from "react";
import { Container } from "./components/Container";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { VisibilityControl } from "./components/VisibilityControl";
import "./App.css";


export const App = () => {
  const [taskItems, setTasksItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName)) {
      setTasksItems([...taskItems, { name: taskName, done: false }]);
    }
  };

  const toggleTask = (task) => {
    setTasksItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );
  };

  const cleanTasks = () => {
    setTasksItems(taskItems.filter((task) => !task.done));
    setShowCompleted(false);
  };

  return (
    <main className="bg-dark vh-100 text-white">
      {" "}
      <Container>
        <TaskForm createNewTask={createNewTask} />
        <TaskList tasks={taskItems} toggleTask={toggleTask} />
        <VisibilityControl
          description="Completas"
          isChecked={showCompleted}
          callback={(checked) => setShowCompleted(checked)}
          cleanTasks={cleanTasks}
        />
        {showCompleted && (
          <TaskList
            tasks={taskItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </Container>
    </main>
  );
};
