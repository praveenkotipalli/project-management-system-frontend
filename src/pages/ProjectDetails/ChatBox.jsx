/* eslint-disable no-constant-condition */
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { useState } from "react";
// import { SelectItemIndicator } from "@radix-ui/react-select";
// import ChatBoxAbove from "../../custom/ChatBoxAbove.jsx"
export default function ChatBox() {
  const [message, setMessage] = useState("");
  const handleSendMessage = () =>{
    console.log("message", message);
    setMessage("");
  }

  const handleMessageChange = (e) =>{
    setMessage(e.target.value);
  }
  return (
    <div className="sticky pt-4 ">
      {/* <ChatBoxAbove/> */}
        <div className="border rounded-lg  ">
          <h1 className="border-b p-5">Chat Box</h1>
          <ScrollArea className="h-[34rem] w-full p-5 flex gap-3 flex-col " style={{}}>
            {[1,1,1,1,1,1,1,1].map((item, index)=>
            
            (index)%2==0?
              <div className="flex gap-2 mb-2" key={item} style={{alignItems:"end",paddingLeft:"195px" }}>
              
              <div style={{border:"1px solid #ed6f02"}} className="space-y-2 py-2 px-5 border rounded-se-2xl rounded-s-xl">
                  <p>Sahithi</p>
                  <p className="text-gray-300" >How are you</p>
                </div>
                <Avatar>
                <AvatarFallback style={{color:"#ed6f02"}}>S</AvatarFallback>
              </Avatar>
            </div>:
            <div className="flex gap-2 mb-2" key={item} style={{alignItems:"end"}}>
            <Avatar>
              <AvatarFallback style={{backgroundColor:"#ed6f02"}}>S</AvatarFallback>
            </Avatar>
            <div style={{border:"1px solid gray"}} className="space-y-2 py-2 px-5 border rounded-ss-2xl rounded-e-xl">
                <p>Sahithi</p>
                <p className="text-gray-300" >How are you</p>
              </div>
          </div>
            )}
          </ScrollArea>
          <div className="relative p-0">
            <Input 
            placeholder="type message..."
            className="py-7 border-t outline-none 
            focusLoutline-none focus:ring-0 rounded-none border-b-0
            border-x-0"
            value={message} onChange={handleMessageChange}
            />
            <Button onClick={handleSendMessage} className="absolute right-2
            top-3 rounded-full" size="icon" variant="ghost">
              <PaperPlaneIcon/>
            </Button>
          </div>
        </div>
    </div>
  );
}