import { UserProvider } from "./context/UserContext";
import { ChatProvider } from "./context/ChatContext";
export const metadata = {
  title: 'Color Web Clicker',
  description: 'A fun color clicking game!',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
      <UserProvider>
        <ChatProvider>
        {children} {/*Wrap everything in the UserProvider context*/}
        </ChatProvider>
      </UserProvider>
      </body>
    </html>
  );
}
