import React from "react";
import Chatbot from "./Chatbot";
import "../Component/Components.css";
const Chat = () => {
  return (
    <div className="bg-transparent fixed z-100 w-full h-full p-0 m-0">
      <div className="bg-blue-200 text-xl flex flex-col justify-items-center w-1/2  absolute right-20 top-30 rounded-2xl shadow-black shadow-2xl overflow-hidden">
        <div className="bg-black flex  fex-row py-5 px-3 justify-center   text-white gap-30 ">
          <div className="nav my-5  text-xl">
            <h1 className="flex gap-4">
              {" "}
              <Chatbot />
              Ask Me
            </h1>
          </div>
          <button className="border-blue-500 border-2 p-1 rounded-4xl h-1/2">
            <span class="  animate-bounce  my-auto material-symbols-rounded">
              keyboard_arrow_down
            </span>
          </button>
        </div>
        {/* chatbot body */}
        <div className="chat-body">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Obi-Wan Kenobi
              <time className="text-xs opacity-50">12:45</time>
            </div>
            <div className="chat-bubble">You were the Chosen One!</div>
            <div className="chat-footer opacity-50">Delivered</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS chat bubble component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <div className="chat-header">
              Anakin
              <time className="text-xs opacity-50">12:46</time>
            </div>
            <div className="chat-bubble">I hate you!</div>
            <div className="chat-footer opacity-50">Seen at 12:46</div>
          </div>
        </div>
        <div className="footer-chat">
          <form className="chat-action" action="#">
            <input
              type="text"
              placeholder="Messages....."
              className="message-input"
              required
            />
            <button className="border-2 ">Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chat;
