export default function Profile() {
  const name = "Ada Lovelace";
  const avatar = "https://i.imgur.com/MK3eW3Am.jpg";
  const theme = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
  };

  function Avatar({ person = { name: "Alan" }, size = 100 }) {
    return <img src={avatar} alt={person.name} width={size} />;
  }

  function Card({ children }) {
    return <div className="card">{children}</div>;
  }

  const isOnline = true;
  const showWarning = false;
  let status;
  if (isOnline) {
    status = <p>Online</p>;
  } else {
    status = <p>Offline</p>;
  }

  const people = [
    { id: 1, name: "Lovelace", profession: "mathematician" },
    { id: 2, name: "Turing", profession: "chemist" },
  ];
  const chemists = people.filter(p => p.profession === "chemist");
  const listItems = chemists.map(p => (
    <li key={p.id}>{p.name} - {p.profession}</li>
  ));

  function Recipe({ drinkers }) {
    return <p>{drinkers * 2} cups of water</p>;
  }

  return (
    <div style={theme}>
      <h1>{name}'s Profile</h1>
      <Avatar person={{ name }} size={120} />
      <Card>
        <p>Inside a Card!</p>
      </Card>
      {isOnline ? <p>✅ Ativo</p> : <p>❌ Inativo</p>}
      {showWarning && <p>Aviso!</p>}
      {status}
      <ul>{listItems}</ul>
      <Recipe drinkers={1} />
    </div>
  );
}
