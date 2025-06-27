const Nav = () => {
  return (
    <nav className="nav-fixed py-5 bg-black/50 md:bg-transparent">
      <div className="flex-center justify-between px-5 md:px-0">
        <div className="md:p-5">
          <h1>Raf</h1>
        </div>
        <div className="flex md:p-5 gap-3 md:gap-10">
          <a href="#" className="Clickable px-2">
            Home
          </a>
          <a href="#">Project</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
