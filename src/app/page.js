import { Header } from "./components/Header";
import { TaskInput } from "./components/TaskInput";
import { Task } from "./components/Task";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a Book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer year="2023" fullname="Patiphan Klinhom" studentId="650610781" />
    </div>
  );
}
