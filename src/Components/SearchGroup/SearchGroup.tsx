import React, {FC, useState} from 'react';
interface SearchGroupProps {
    searchTerm:string;
    setSearchTerm:(searchTerm:string)=>void;
}
const SearchGroup:FC<SearchGroupProps> = ({searchTerm,setSearchTerm}) => {
    return (
        <div className="flex gap-1">
            <input type="text" className="block h-8 border-solid border-2" placeholder="Search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
            <button className="w-8 h-8" onClick={()=>setSearchTerm('')}>Clear</button>
        </div>
    );
};

export default SearchGroup;