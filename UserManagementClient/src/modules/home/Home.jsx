import React from 'react';
import EnterUserInfo from "../enterUserInfo/enterUserInfo";
import DisplayUserInfo from "../displayUserInfo/displayUserInfo";
export const Home = () => {
  return (
    <>
      <div>User Management Application</div>
      <table>
        <tr>
          <td> <EnterUserInfo /></td>
          <td> <DisplayUserInfo /></td>
        </tr>
      </table>


    </>
  );
};

export default Home;
