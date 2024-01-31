import React from 'react';

function MemberButton({ member, onClick }) {
  return <button onClick={onClick}>{member}</button>;
}

export default MemberButton;
