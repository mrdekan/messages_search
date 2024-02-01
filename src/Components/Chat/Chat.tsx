import React, {FC} from 'react';
import Message from "../Message/Message";
interface ChatProps {
    messages:Array<object>;
}
const Chat:FC<ChatProps> = ({messages}) => {
    return (
        <div className="flex gap-2 flex-col">
            {messages.map((message:any) => (
                <Message
                    key={message.id}
                    text={message.text}
                    date={message.createdAt}
                    id={message.id}
                    user_id={message.user_id}
                />
            ))}
        </div>
    );
};

export default Chat;