import { Link } from 'react-router'
// import { Link } from 'react-dom'

export default function Navbar() { 
return (
    <nav className="navbar flex justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Gamerz</h1>
        <input className="ml-4 p-1 rounded" type="text" placeholder="Search..." />
      </div>
      <div>
            {/* <Link to="/game vault" className="mx-2">Game Vault</Link>
            <Link to="/future plays" className="mx-2">Future Plays</Link>
            <Link to="/about" className="mx-2">About</Link>
            <Link to="/logout" className="mx-2">Log Out</Link>
          <Link to="/login" className="mx-2">Log In</Link> */}

      </div>
    </nav>
  )};