import React, { PropTypes } from "react";

const CardHappy = (props) => {
  return (
    <div className="birthdayCard">
      <div className="cardFront">
        <h3 className="happy">HAPPY BIRTHDAY BAO HUYNH!</h3>
        <div className="balloons">
          <div className="balloonOne" />
          <div className="balloonTwo" />
          <div className="balloonThree" />
          <div className="balloonFour" />
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY BAO HUYNH!</h3>
        <p>Gửi anh Bảo ,</p>
        <p>"Chúc anh tuổi mới rực rỡ trong học tập, công việc và tình yêu"</p>
        <p className="name">Anh Thư và Như Thảo</p>
      </div>
    </div>
  );
};

export default CardHappy;
