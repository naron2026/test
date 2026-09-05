function NavBar() {
  return (
    <div className="navbar bg-green-600 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl text-white">MASTER POS</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>POS</a>
          </li>
          <li>
            <a>ADMIN</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
