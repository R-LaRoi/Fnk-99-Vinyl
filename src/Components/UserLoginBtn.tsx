import { useAuth0 } from "@auth0/auth0-react";

interface UserLoginBtnProps {
text: string
}


export function UserLoginBtn({text}: UserLoginBtnProps) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <button className="bg-gray-900 hover:bg-stone-700 text-white font-bold py-2 px-4 rounded" onClick={() => loginWithRedirect()}>
              {text}
            </button>
        )

  )

    }
 


