import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { logout, user } = useAuth0();

  return (
    <nav
      class="navbar fixed-top navbar-dark bg-dark"
      style={{ padding: "1rem" }}
    >
      <a class="navbar-brand">
        <span style={{ color: "rgb(49 228 228)" }}>Bond's J Securities</span> |
        <span style={{ fontSize: '15px', marginLeft: '6px' }}>Welcome to your dashboard {user?.email || ""}!</span>
      </a>
      <form class="d-flex" role="search">
        <button
          class="btn btn-danger"
          onClick={() => logout({ logoutParams: { returnTo: "/" } })}
          type="submit"
        >
          Logout
        </button>
      </form>
    </nav>
  );
};

export default Navbar;
