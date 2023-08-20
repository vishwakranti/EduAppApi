import logo from '../assets/logo.jpeg';

export default function Home(){
    return <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>WELCOME TO EDU APP</p>
    <p style={{textAlign: 'center'}}>A portal to all your educational needs.</p>
    <p style={{textAlign: 'center'}}>View details about the course and join the ones you like!</p>
  </header>
}