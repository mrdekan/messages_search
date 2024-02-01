import React, {FC} from 'react';
import Message from "../Message/Message";
interface SearchResultsProps {
 messages:Array<object>;
}
const SearchResults:FC<SearchResultsProps> = ({messages}) => {
    return (
        <div className="flex flex-col gap-1">
            {(messages&&messages.length)>0?messages.map((message:any) => (
                <Message
                    key={message.id}
                    text={message.text}
                    date={message.createdAt}
                    id={message.id}
                    user_id={message.user_id}
                />
            )):<p>Not found</p>}
        </div>
    );
};

export default SearchResults;