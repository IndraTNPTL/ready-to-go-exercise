import { useState } from "react";
import Buttons from "./Buttons";

const StartingConsole = () => {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  return (
    <main>
      <section>
        <Buttons state={switch1} setState={setSwitch1} />
        <Buttons state={switch2} setState={setSwitch2} />
        <Buttons state={switch3} setState={setSwitch3} />
      </section>
      <div className="section-right">
        {switch1 && switch2 && switch3 ? (
          <p className="launching">LAUNCHING 🚀 !</p>
        ) : (
          <p className="no-way">NOT READY 🚫</p>
        )}
      </div>
    </main>
  );
};

export default StartingConsole;
