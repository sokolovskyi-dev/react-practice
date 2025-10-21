import useLocalStorage from "hooks/useLocalStorage";
// import { useState, useEffect } from "react";

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");

  // useEffect(() => {
  //   window.localStorage.setItem("email", JSON.stringify(email));
  // }, [email]);

  // useEffect(() => {
  //   window.localStorage.setItem("password", JSON.stringify(password));
  // }, [password]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;

      case "password":
        setPassword(event.target.value);
        break;

      default:
        return;
    }
  };

  return (
    <form>
      <label>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
      </label>

      <label>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
