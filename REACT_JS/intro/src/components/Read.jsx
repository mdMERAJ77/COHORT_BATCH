const Read = (props) => {
  const users = props.users;
  //   const setusers = props.setusers;

  let updateUser = users.map((currElem, index) => {
    return <li key={index}>{currElem.name}</li>;
  });
  return (
    <div>
      <h1>User Data</h1>
      <ol>{updateUser}</ol>
    </div>
  );
};

export default Read;
