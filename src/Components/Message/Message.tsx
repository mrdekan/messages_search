import React, {FC} from 'react';
import cl from './Message.module.css';
interface MessageProps{
    text:string;
    date:string;
    id:number;
    user_id:string;
}
const Message:FC<MessageProps> = ({id,date,text,user_id}) => {
    date = new Date(date).toLocaleString('ua',{hour: '2-digit', minute:'2-digit', second:'2-digit'});
    return (
        <div className={cl.message}>
            <p className="text-base">{text}</p>
            <p className="text-sm font-light">{date}</p>
        </div>
    );
};

export default Message;