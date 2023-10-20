import { useState } from "react";
import "../styles/input.css";

function Input(props) {
  const [query, setQuery] = useState(props.data[props.query]);
  const [options, setOptions] = useState(props.options);

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
    setOptions(options.sort(compare));
  };

  function sendData(e) {
    const target = e.target.innerText;
    updateQuery(target);
    props.onChangeData(options.find((item) => item[props.query] === target));
  }

  function compare(a, b) {
    const similitudA = a.name.includes(query) ? 1 : 0;
    const similitudB = b.name.includes(query) ? 1 : 0;
    return similitudB - similitudA;
  }

  return (
    <div className="search">
      <input
        className="input"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />
      <div className="list">
        <ul>
          {options.map((item) => {
            return (
              <li
                key={item[props.query]}
                className="itemList"
                onClick={sendData}
              >
                {item[props.query]}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Input;
