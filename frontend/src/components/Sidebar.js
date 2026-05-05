import { NavLink } from "react-router-dom";

const navItems = [
  { path: "/", label: "Home", icon: "🏠" },
  { path: "/users", label: "Users", icon: "👥" },
  { path: "/table", label: "Table", icon: "📋" },
  { path: "/settings", label: "Settings", icon: "⚙️" },
    { path: "/admin", label: "Admin", icon: "⚙️" },
    { path: "/employee", label: "Employee", icon: "⚙️" },

];

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul className="sidebar-nav">
        {navItems.map((item) => (
          <li key={item.path} className="sidebar-nav-item">
            <NavLink
              to={item.path}
              end
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <span className="sidebar-icon">{item.icon}</span>
              <span className="sidebar-label">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
