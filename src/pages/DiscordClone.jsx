import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Hash, Send } from "lucide-react";

const DiscordClone = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: "You" }]);
      setInputMessage("");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Servers sidebar */}
      <div className="w-16 bg-gray-900 p-3 flex flex-col items-center space-y-4">
        {[1, 2, 3].map((server) => (
          <div key={server} className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
            S{server}
          </div>
        ))}
      </div>

      {/* Channels sidebar */}
      <div className="w-60 bg-gray-800 p-4">
        <h2 className="text-white font-semibold mb-4">Channels</h2>
        {["general", "random", "announcements"].map((channel) => (
          <div key={channel} className="flex items-center text-gray-400 hover:text-white mb-2 cursor-pointer">
            <Hash className="h-5 w-5 mr-2" />
            {channel}
          </div>
        ))}
      </div>

      {/* Main chat area */}
      <div className="flex-1 flex flex-col bg-gray-700">
        <div className="p-4 border-b border-gray-600">
          <h1 className="text-white font-semibold text-xl"># general</h1>
        </div>
        <ScrollArea className="flex-1 p-4">
          {messages.map((msg, index) => (
            <div key={index} className="mb-4 flex items-start">
              <Avatar className="mr-2">
                <AvatarImage src={`https://avatar.vercel.sh/${msg.sender}.png`} alt={msg.sender} />
                <AvatarFallback>{msg.sender[0]}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-white font-semibold">{msg.sender}</p>
                <p className="text-gray-300">{msg.text}</p>
              </div>
            </div>
          ))}
        </ScrollArea>
        <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-600 flex">
          <Input
            type="text"
            placeholder="Message #general"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 bg-gray-600 text-white border-none focus:ring-0"
          />
          <Button type="submit" size="icon" className="ml-2">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>

      {/* Users sidebar */}
      <div className="w-60 bg-gray-800 p-4">
        <h2 className="text-white font-semibold mb-4">Online - 3</h2>
        {["Alice", "Bob", "Charlie"].map((user) => (
          <div key={user} className="flex items-center text-gray-400 mb-2">
            <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
            {user}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscordClone;
