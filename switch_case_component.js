import { useState, Children } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const CustomSwitch = ({ children, value }) => {
  const passedCase = [];
  const defaultCase = [];
  Children.forEach(children, (e) => {
    if (e.type.name === "CustomCase") {
      if (typeof e.props.value === "function") {
        if (e.props.value(value)) {
          passedCase.push(e);
        }
      } else if (value === e.props.value) {
        passedCase.push(e);
      }
    } else if (e.type.name === "DefaultCase") {
      defaultCase.push(e);
    }
  });
  console.log(passedCase, defaultCase);
  if (passedCase.length > 0) {
    return passedCase;
  } else {
    return defaultCase;
  }
};

const CustomCase = ({ children }) => {
  return <>{children}</>;
};

const DefaultCase = ({ children }) => {
  return <>{children}</>;
};

function App() {
  return (
    <CustomSwitch value="20">
      <CustomCase value={(e) => e < 10}>
        <div>Hello 20</div>
      </CustomCase>
      <CustomCase value="20">Hello 20</CustomCase>
      <CustomCase value="30">Hello 30</CustomCase>
      <CustomCase value="10">
        <div>Hello 10</div>
      </CustomCase>
      <DefaultCase>Hello 40</DefaultCase>
    </CustomSwitch>
  );
}

export default App;
