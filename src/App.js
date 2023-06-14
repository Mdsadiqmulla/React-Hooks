import './App.css';

function App() {
  function formatUser(user) {
    return user.firstname + " " + user.lastname;
  }
  const user = {
    firstname: 'Sadiq',
    lastname: 'mulla'
  };
  return <div>Hello, {formatUser(user)}</div>
}

export default App;
