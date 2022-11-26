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
          <p style={{ marginTop: "300px", fontSize: "35px" }}>
            "Wishing you a fantastic birthday and wonderful year ahead. Make
            every day count"
          </p>
        </div>
      </div>
      <div className="cardInside">
        <h3 className="back">HAPPY BIRTHDAY BAO HUYNH!</h3>
        <p>Gửi anh Bảo ,</p>
        <p>
          "Chúc anh tuổi 25 rực rỡ hơn nữa với thật nhiều niềm vui và hạnh phúc!
          Đặc biệt là phải giữ gìn sức khoẻ anh nha !"
        </p>
        <p className="name">Anh Thư và Như Thảo</p>
        <img
          src={require("./images/File8.png")}
          style={{ width: "60%", marginTop: "50px" }}
        />
      </div>
    </div>
  );
};

export default CardHappy;
