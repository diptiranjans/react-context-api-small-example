import React from "react";
import UseContext, { UseConsumer } from "../UseContext";

class MyClass extends React.Component {
  static contextType = UseContext; //if use this line comment below MyClass.contextType = UseContext;
  render() {
    const value = this.context;
    return (
      <UseConsumer>
        {value => {
          return (
            <div>
              {value.name} is {value.loggedIn ? "loggedIn" : "loggedOut"}
            </div>
          );
        }}
      </UseConsumer>
    );
  }
}
//MyClass.contextType = UseContext; // if use this line then comment static line
/* this will also work
<UseConsumer>
{props => {
          return <div>{props.name}</div>
        }}
</UseConsumer>
*/
export default MyClass;
