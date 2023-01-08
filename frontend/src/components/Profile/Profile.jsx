import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../store/user-context";
import Card from "../../UI/Card";
import classes from "./Profile.module.css";
import userPic from "../../assets/240_F_215844325_ttX9YiIIyeaR7Ne6EaLLjMAmy4GvPC69.jpg";

function Profile() {
  const { id } = useContext(UserContext);
  const [user, setUser] = useState(null);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [login, setLogin] = useState("");
  const [city, setCity] = useState("");
  const [isFormActive, setIsFormActive] = useState(false);
  let errorMessage = "";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/users/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUser(data);
      setCity(data.city.charAt(0).toUpperCase() + data.city.slice(1));
      setLogin(data.login);
      setFirstname(
        data.firstname.charAt(0).toUpperCase() + data.firstname.slice(1)
      );
      setLastname(
        data.lastname.charAt(0).toUpperCase() + data.lastname.slice(1)
      );
    };
    fetchData();
  }, []);

  const firstnameChangeHandler = (event) => {
    setUser((prev) => ({ ...prev, firstname: event.target.value }));
  };
  const lastnameChangeHandler = (event) => {
    setUser((prev) => ({ ...prev, lastname: event.target.value }));
  };

  const loginChangeHandler = (event) => {
    setUser((prev) => ({ ...prev, login: event.target.value }));
  };

  const cityChangeHandler = (event) => {
    setUser((prev) => ({ ...prev, city: event.target.value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    try {
      fetch(`http://localhost:8080/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...user,
        }),
      });
    } catch (error) {
      errorMessage = error.message;
    }
    setFirstname(
      user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1)
    );
    setLastname(user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1));
    setLogin(user.login);
    setCity(user.city.charAt(0).toUpperCase() + user.city.slice(1));
  };

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <Card classNames={classes.profile}>
      <div>
        <h1>
          {`Bienvenue,
          ${firstname} ${lastname}`}
        </h1>
      </div>
      <h2>Mes infos</h2>
      <div className={classes["profile-section"]}>
        <img src={userPic} alt="user" />
        <div>
          <p>
            <strong>Prénom:</strong> {firstname}
          </p>
          <p>
            <strong>Nom:</strong> {lastname}
          </p>
          <p>
            <strong>Login:</strong> {login}
          </p>
          <p>
            <strong>Ville:</strong> {city}
          </p>
        </div>
      </div>
      <button type="button" onClick={() => setIsFormActive((prev) => !prev)}>
        {isFormActive ? "Fermer" : "Modifier"}
      </button>
      {errorMessage && <p>{errorMessage}</p>}
      {isFormActive && (
        <form onSubmit={submitHandler}>
          <label htmlFor="firstname">Prénom</label>
          <input
            type="text"
            id="firstname"
            value={user.firstname}
            onChange={firstnameChangeHandler}
          />
          <label htmlFor="lastname">Nom</label>
          <input
            type="text"
            id="lastname"
            value={user.lastname}
            onChange={lastnameChangeHandler}
          />
          <label htmlFor="login">Nom d'utilisateur</label>
          <input
            type="text"
            id="login"
            value={user.login}
            onChange={loginChangeHandler}
          />
          <label htmlFor="city">Ville</label>
          <input
            type="text"
            id="city"
            value={user.city}
            onChange={cityChangeHandler}
          />
          <button type="submit">Confirmer</button>
        </form>
      )}
    </Card>
  );
}

export default Profile;
