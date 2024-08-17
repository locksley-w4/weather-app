import React from "react";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import MySelect from "./UI/MySelect/MySelect";

const InputForm = ({ params, setParams, updateFnc }) => {
  return (
    <form className="inputForm">
      <label htmlFor="query" style={{}}>
        <h3>Запрос</h3>
      </label>
      <MyInput
        id="query"
        placeholder="Tashkent"
        className="queryInput"
        value={params.query}
        onChange={(ev) => {
          setParams({ ...params, query: ev.target.value });
        }}
      />
      <label htmlFor="days" style={{ flex: "40% 0 0" }}>
        <h3>Кол-во дней</h3>
      </label>{" "}
      <label htmlFor="land" style={{ flex: "40% 0 0" }}>
        <h3>Язык</h3>
      </label>
      <MyInput
        type="number"
        id="days"
        placeholder="Number of Days(5, 7..)"
        style={{ width: "30%" }}
        value={params.days}
        min={5}
        max={15}
        onChange={(ev) => {
          setParams({
            ...params,
            days: ev.target.value <= 15 ? ev.target.value : 15,
          });
        }}
      />
      <MySelect
        id="land"
        style={{ marginLeft: "auto", width: "30%" }}
        options={{ ru: "Русский", en: "English" }}
        onChange={(ev) => {
          setParams({ ...params, lang: ev.target.value });
        }}
      />
      <MyButton
        type="submit"
        style={{ flex: "100% 0 1", marginLeft: "auto" }}
        onClick={(ev) => {
          ev.preventDefault();
          updateFnc();
        }}>
        Update
      </MyButton>
    </form>
  );
};

export default InputForm;
