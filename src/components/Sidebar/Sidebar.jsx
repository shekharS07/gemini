import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Context } from "../../context/context";
const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const { onSent, setRecentPrompt, prevPrompt,newChat } = useContext(Context);

  const loadPrompt=async (prompt)=>{
    setRecentPrompt(prompt);
    onSent(prompt);
  }
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <img
            onClick={() => setExtend((prev) => !prev)}
            className="menu"
            src={assets.menu_icon}
          ></img>
          <div onClick={()=>newChat()} className="new-chat">
            <img src={assets.plus_icon}></img>
            {extend ? <p>New chat</p> : null}
          </div>
          {extend ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompt.map((item, index) => {
                return (
                  <div onClick={()=>loadPrompt(item)} className="recent-entry">
                    <img src={assets.message_icon}></img>
                    <p>{item.slice(0,18)}...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} />
            {extend ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} />
            {extend ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} />
            {extend ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
