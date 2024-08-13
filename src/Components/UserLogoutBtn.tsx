import { useAuth0 } from "@auth0/auth0-react";

export function UserLogoutBtn() {
  const { user, logout, isAuthenticated } = useAuth0();
 
 return (
        isAuthenticated && (
        <>
        <h2>{user?.name}</h2>
            <button onClick={() => logout()}>
              Log Out
            </button>
            </>
        )

  )}
