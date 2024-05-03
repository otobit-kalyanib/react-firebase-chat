import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img className="img" src="./avatar.png" alt="" />
        <h4>Jane Doe</h4>
        <p className="p">Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span className="span">Chat Settings</span>
            <img className="img" src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span className="span">Privacy & help</span>
            <img className="img" src="./arrowUp.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span className="span">Shared photos</span>
            <img className="img" src="./arrowDown.png" alt="" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img className="img"
                  src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg"
                  alt=""
                />
                <span className="span">sdfsf2_sd.png</span>
              </div>
              <img className="icon" src="./download.png" alt="" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span className="span">Shared Files</span>
            <img className="img" src="./arrowUp.png" alt="" />
          </div>
        </div>
        <button className="button">Block User</button>
        <button className="logout">Logout</button>
      </div>
    </div>
  );
};

export default Detail;
