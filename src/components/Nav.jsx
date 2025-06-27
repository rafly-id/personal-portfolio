const Nav = () => {
  return (
    <nav className="nav-fixed py-2">
      <div className="flex-center md:justify-between">
        <div className="hidden md:inline p-5">
          <h1>Raf</h1>
        </div>
        <div className="flex p-5 gap-10">
          <a href="" className="Clickable px-2">
            Home
          </a>
          <a href="">Project</a>
          <a href="">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
