import Image from "next/image";
import Card from "../../Card/page";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-center justify-center p-6 ">
        <div className=" bg-slate-200 p-12 rounded-lg shadow-lg max-w-4x1 w-full flex items-center justify-center border-4 border-sky-300">
          <div className=" w-52 h-42 ml-8 mt-8 pl-3 pt-4 text-blue-800 bg-sky-200 ">
            <Card name="Anum" rollno={123456} day="Monday" age={20} class={4} />
          </div>
          <br />
          <div className=" w-52 h-42 ml-8 mt-8 pl-3 pt-4 text-blue-800 bg-sky-200  ">
            <Card
              name="Noor"
              rollno={122222}
              day="Tuesday"
              age={21}
              class={4}
            />{" "}
          </div>{" "}
          <br />
          <div className=" w-52 h-42 ml-8 mt-8 pl-3 pt-4 text-blue-800 bg-sky-200 ">
            <Card
              name="Ather"
              rollno={66666}
              day="Wednesday"
              age={22}
              class={4}
            />{" "}
          </div>
          <div className=" w-52 h-42 ml-8 mt-8 pl-3 pt-4 text-blue-800 bg-sky-200 ">
            <Card
              name="Saeed"
              rollno={454545}
              day="Thursday"
              age={23}
              class={4}
            />{" "}
          </div>
          <div className=" w-52 h-42 ml-8 mt-8 pl-3 pt-4 text-blue-800 bg-sky-200 ">
            <Card
              name="Ahmed"
              rollno={558855}
              day="Friday"
              age={24}
              class={4}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
