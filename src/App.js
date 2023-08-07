import logo from './logo.svg';
import './App.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <br/>
      <LogoutButton/>
      <br />
      <Profile/>
    </div>
  );
}

export default App;
