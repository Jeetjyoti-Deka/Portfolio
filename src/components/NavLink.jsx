const NavLink = (link) => {
  return (
    <div>
      <a href={link.route}>{link.label}</a>
    </div>
  );
};
export default NavLink;
