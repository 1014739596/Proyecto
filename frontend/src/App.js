import React from 'react';
import UserList from './components/userList';
import Login from "./components/Login";

function App() {
return (
<div>
<h1>React + MySQL Example</h1>

<UserList />
</div>
);
return (
    <div>
      <Login />
    </div>
  );
}

export default App;