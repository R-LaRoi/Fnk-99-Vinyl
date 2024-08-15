import { useAuth0 } from "@auth0/auth0-react";

interface UserLoginBtnProps {
  text: string
}


export function UserLoginBtn({ text }: UserLoginBtnProps) {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button className="hover:bg-pink-700 hover:text-white font-bold py-2 px-4 rounded-xl" onClick={() => loginWithRedirect()}>
        {text}
      </button>
    )

  )

}



