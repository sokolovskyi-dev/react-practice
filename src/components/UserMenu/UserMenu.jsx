import { useContext } from "react";
import ctx from "context/authContext";

export default function UserMenu() {
  const { user, logIn, logOut } = useContext(ctx);

  return (
    <div>
      <button type="button" onClick={logIn}>
        Войти
      </button>

      {user && (
        <>
          <p>{user}</p>
          <button type="button" onClick={logOut}>
            Выйти
          </button>
        </>
      )}
    </div>
  );
}
