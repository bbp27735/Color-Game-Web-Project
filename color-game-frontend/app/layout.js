import { UserProvider } from "./context/UserContext";
export const metadata = {
  title: 'Color Web Clicker',
  description: 'A fun color clicking game!',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <UserProvider>
        {children} {/*Wrap everything in the UserProvider context*/}
      </UserProvider>
      </body>
    </html>
  );
}
