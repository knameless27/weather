import { useEffect, useState } from "react";
import "../styles/input.css";

function Input(props) {
  const [query, setQuery] = useState(props.data[props.query]);
  const [options, setOptions] = useState(props.options);

  useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
    props.onSearch(newQuery);
  };

  function sendData(e) {
    const target = e.target.innerText;
    updateQuery(target);
    props.onChangeData(options.find((item) => item[props.query] === target));
  }

  return (
    <div className="search">
      <input
        className="input"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
      />
      {
      options.length ? (
        <div className="list">
          <ul>
            {options.map((item, index) => {
              return (
                <li key={index} className="itemList" onClick={sendData}>
                  {item[props.query]}
                </li>
              );
            })}
          </ul>
        </div>
      ) : ''}
    </div>
  );
}

export default Input;
