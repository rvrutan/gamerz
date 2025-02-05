import { Link } from 'react-router'
// import { Link } from 'react-dom'

export default function Navbar() { 
return (
<nav className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">GAMERZ</a>
  </div>
  <div className="form-control">
    <input
      type="text"
      placeholder="Search games..."
      className="input input-bordered"
    />
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>My Games</a></li>
      <li><a>Wishlist</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
</nav>    // <nav className="navbar flex justify-between p-4 bg-gray-800 text-white">
    //   <div className="flex items-center">
    //     <h1 className="text-xl font-bold">Gamerz</h1>
    //     <input className="ml-4 p-1 rounded" type="text" placeholder="Search..." />
    //   </div>
    //   <div>
    //         <Link to="/game vault" className="mx-2">Game Vault</Link>
    //         <Link to="/future plays" className="mx-2">Future Plays</Link>
    //         <Link to="/about" className="mx-2">About</Link>
    //         <Link to="/logout" className="mx-2">Log Out</Link>
    //       <Link to="/login" className="mx-2">Log In</Link>

    //   </div>
    // </nav>
  )};