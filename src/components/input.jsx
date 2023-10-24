import { useEffect, useState } from "react";
import "../styles/input.css";

function Input(props) {
  const [query, setQuery] = useState(props.data[props.query]);
  const [options, setOptions] = useState(props.options);
  const [selected, setSelected] = useState(false);
  const [placeholder] = useState(props.placeholder ?? "Write here your place!")

  useEffect(() => {
    setOptions(props.options);
  }, [props.options]);

  const updateQuery = (newQuery) => {
    setSelected(true)
    setQuery(newQuery);
    props.onSearch(newQuery);
  };

  function sendData(e) {
    const target = e.target.innerText;
    updateQuery(target);
    props.onChangeData(options.find((item) => item[props.query] === target));
    setSelected(false)
  }

  return (
    <div className="search">
      <input
        className="input"
        value={query}
        onChange={(e) => updateQuery(e.target.value)}
        placeholder={placeholder}
      />
      {options.length > 0 && selected && (
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
      )}
    </div>
  );
}

export default Input;
