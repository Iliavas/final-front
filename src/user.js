function User(props) {
  console.log(localStorage.user);

  function SignOut() {
    localStorage.removeItem("email");
    localStorage.removeItem("pts");
    localStorage.removeItem("password");
    props.func();
  }

  return (
    <div>
      <div>{localStorage.getItem("email")}</div>
      <div>{localStorage.getItem("pts")} pts</div>
      <button onClick={SignOut}>Sign out</button>
    </div>
  );
}

export default User;