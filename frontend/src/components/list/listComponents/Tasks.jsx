import NamedLine from "./NamedLine";
import Task from "./Task";

export default function Tasks({ title }) {
  return (
    <div className={`h-1/2 xl:w-1/2 xl:h-full`}>
      <NamedLine content={title} />
      <div
        className={`list_1 flex flex-col py-2 gap-2 2xl:gap-4 h-full overflow-scroll`}
      >
        <Task content={"test"} />
        <Task
          content={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae ab nam blanditiis, earum mollitia officiis ut sunt cum beatae! Doloremque vero hic et sint aliquid cumque at illo vitae velit repellat amet laboriosam itaque corrupti ab impedit perspiciatis sed molestias error inventore harum quidem, placeat libero architecto possimus. Blanditiis quibusdam alias quisquam praesentium ducimus incidunt?"
          }
        />
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
        <Task content={"test"} />
      </div>
    </div>
  );
}
