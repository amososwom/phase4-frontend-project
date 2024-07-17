import React from 'react'

function Myreview({ comment, username}) {
  let defaultimg = "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg";

  return (
    <div className="rediv">
    <div className="combined">
      <div className="reuser">
      <img src={defaultimg} alt="" />
    </div>
    <span>{username}</span>
    </div>
    <div className="redesc">
      <span>{comment}</span>
    </div>
</div>
  )
}

export default Myreview