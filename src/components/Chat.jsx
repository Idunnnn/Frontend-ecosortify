import clsx from "clsx";
import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { useUser } from "@/contexts/UserContext";
import { sendChatHistory } from "@/api/user";

export default function Chat({ className }) {
  const { user } = useUser();

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    keepLastMessageOnError: true,
  });
  const chatContainer = useRef(null);
  const [active, setActive] = useState(false);

  const scroll = () => {
    if (chatContainer.current) {
      const { offsetHeight, scrollHeight, scrollTop } = chatContainer.current;
      if (scrollHeight >= scrollTop + offsetHeight) {
        chatContainer.current.scrollTo(0, scrollHeight + 200);
      }
    }
  };

  useEffect(() => {
    scroll();

    if (messages.length < 2) return;

    const timer = setTimeout(() => {
      const sendLastPair = async () => {
        const lastTwo = messages.slice(-2);
        if (lastTwo[0].role === "user" && lastTwo[1].role === "assistant") {
          const pair = {
            user: lastTwo[0],
            assistant: lastTwo[1],
          };
          try {
            let response = await sendChatHistory(pair, user.uid, user.token);
            console.log(response.message);
          } catch (err) {
            console.error(err.message);
          }
        }
      };
      sendLastPair();
    }, 2000);

    return () => clearTimeout(timer);
  }, [messages]);

  useEffect(() => {
    setActive(input.length > 0);
  }, [input]);

  return (
    <>
      <main
        ref={chatContainer}
        className="mx-auto flex flex-col max-w-[700px] mb-10 max-h-[calc(100vh-80px)] w-full mt-5 gap-5 p-8 lg:p-0 overflow-y-auto"
        style={{ maxHeight: "calc(100vh - 210px)" }}
      >
        {messages.length === 0 ? (
          <div className="text-center text-gray-700 mt-20">
            <img
              src="/images/welcome-bot.gif" // ganti path sesuai file gambar kamu
              alt="Welcome"
              className="w-44 h-44 mx-auto mb-4"
            />
            <p className="text-lg">
              Hai, aku <strong>SortiBot</strong>! 🌱
            </p>
            <p className="text-sm text-gray-600">Tanya apa saja tentang edukasi sampah ya!</p>
          </div>
        ) : (
          messages.map((m) =>
            m.role === "user" ? (
              <div key={m.id} className="flex justify-end">
                <div className="flex gap-2">
                  <div className="bg-green-600 text-white md:max-w-[400px] rounded-lg p-4 w-fit lg:max-w-[500px]">
                    {m.content}
                  </div>
                  <div className="rounded-full w-[32px] h-[32px]  overflow-hidden">
                    <img
                      src={user.picture ? user.picture : "/images/default-user-profile.jpg"}
                      alt="user"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div key={m.id} className="flex justify-start">
                <div className="flex gap-2">
                  <div className="rounded-full w-[32px] h-[32px] overflow-hidden">
                    <img src="/images/chatbot-profile.jpg" alt="bot" className="w-full h-full object-fill" />
                  </div>
                  <div className="bg-violet-500 text-white md:max-w-[400px] rounded-lg p-4 w-fit lg:max-w-[500px]">
                    {m.content}
                  </div>
                </div>
              </div>
            )
          )
        )}
      </main>

      <form
        onSubmit={handleSubmit}
        className={clsx(
          "md:max-w-[700px] md:w-full fixed bottom-6 left-5 right-5 md:left-1/2 md:-translate-x-1/2 transform rounded-2xl transition-all duration-100 shadow-lg overflow-hidden",
          active ? "bg-white border border-green-600" : "bg-white border border-gray-400",
          className
        )}
      >
        <input
          value={input}
          onChange={handleInputChange}
          type="text"
          required
          className="py-4 px-6 w-full focus:outline-none"
          placeholder="Tanyakan sesuatu..."
        />

        <button
          type="submit"
          disabled={input.length === 0}
          className="absolute p-2 right-2 z-1 bg-black rounded-full hover:cursor-pointer top-1/2 -translate-y-1/2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <Icon icon="majesticons:arrow-up-line" className="text-white w-6 h-6" />
        </button>
      </form>
    </>
  );
}
