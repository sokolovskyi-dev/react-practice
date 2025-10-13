import { useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("56465");

  const handleEmailChange = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  return (
    <form>
      <label>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}
