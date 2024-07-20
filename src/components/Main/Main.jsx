import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/context.jsx";
import { useContext } from "react";
const Main = () => {
  const {
    onSent,
    input,
    setInput,
    recentPrompt,
    prevPrompt,
    loading,
    showResult,
    resultData,
  } = useContext(Context);
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSent();
    }
  };
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, User.</span>
                </p>
                <p>How can I help you today?</p>
              </div>
              <div className="cards">
                <div
                  onClick={() => {
                    onSent(
                      "Suggest beautiful places to see on an upcoming road trip"
                    );
                  }}
                  className="card"
                >
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <img src={assets.compass_icon} />
                </div>
                <div
                  onClick={() => {
                    onSent("Briefly summarize this concept: urban planning");
                  }}
                  className="card"
                >
                  <p>Briefly summarize this concept: urban planning</p>
                  <img src={assets.bulb_icon} />
                </div>
                <div
                  onClick={() => {
                    onSent(
                      "Brainstorm team bonding activities for our work retreat"
                    );
                  }}
                  className="card"
                >
                  <p>Brainstorm team bonding activities for our work retreat</p>
                  <img src={assets.message_icon} />
                </div>
                <div
                  onClick={() => {
                    onSent("Tell me about React js and React native");
                  }}
                  className="card"
                >
                  <p>Tell me about React js and React native</p>
                  <img src={assets.code_icon} />
                </div>
              </div>{" "}
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text"
                placeholder="Enter a prompt here"
                onKeyDown={handleKeyDown}
              />
              <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                {input ? (
                  <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                ) : null}
              </div>
            </div>
            <div className="bottom-info">
              <p>
                Gemini may display inaccurate info, including about people, so
                double-check its responses. Your privacy and Gemini Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Main;
