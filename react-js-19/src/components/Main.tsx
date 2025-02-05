interface IUserInfo {
  email?: string;
  location?: string;
  user?: string;
}
const usersInfo = [
  { email: "ssk66221@gmail.com", location: "USA", user: "John" },
  { email: "ssk66221@gmail.com", location: "USA", user: "John" },
  { email: "ssk66221@gmail.com", location: "USA", user: "John" },
  { email: "ssk66221@gmail.com", location: "USA", user: "John" },
];

const App = () => {
  return (
    <main>
      {usersInfo?.map(({ user, email, location }: IUserInfo) => (
        <ul key={Math.random()}>
          <li>{user}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  );
};

export default App;
