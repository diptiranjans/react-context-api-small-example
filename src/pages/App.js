import React, { Component } from "react";
import { UseProvider } from "../UseContext";
import MyClass from "../components/MyClass";

class App extends Component {
  render() {
    const user = { name: "Salman", loggedIn: false };
    return (
      <div>
        <UseProvider value={user}>
          <MyClass />
        </UseProvider>
      </div>
    );
  }
}

export default App;
