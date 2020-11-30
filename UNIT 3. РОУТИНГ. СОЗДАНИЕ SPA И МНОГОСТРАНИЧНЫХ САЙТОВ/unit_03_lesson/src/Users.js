import {useRouteMatch } from 'react-router-dom';


function Users() {
  let match = useRouteMatch();
  return (
    <>
      <h1>Users</h1>
      <ul>
        <li><a href={`${match.url}/ivanov`}>Ivanon</a></li>
        <li><a href={`${match.url}/petrov`}>Petrov</a></li>
      </ul>
    </>
  );
}

export default Users;
