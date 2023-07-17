import React from "react";

function App() {
  const shirts = 4;
  const pants = 6;
  const website = "https://www.thinkful.com/";

  const element = (
    <main>
        <p className="paragraph">
          {" "}
          Purchased {shirts} shirts and {pants} pants for a total of {shirts + pants} items
        </p>
        <a href={website}>Website</a>
      </main>
      )
    return element;
}

export default App;