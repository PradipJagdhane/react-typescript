import React, { useCallback, useState } from "react";
import ItemList from "./itemList";

const SearchItems: React.FC = () => {
const [searchTerm, setSearchterm] = useState<string>("");
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];


const filterItems = useCallback(
    () => {
        return fruits.filter((fruit) => 
        fruit.toLowerCase().includes(searchTerm.toLowerCase())
        );
    },
    [searchTerm, fruits]
);

    return(
        <div>
<h2>Fruits Search</h2>
<input type="text"
value={searchTerm}
onChange={(e) => setSearchterm(e.target.value)}
/>
<ItemList filterItems={filterItems}/>
        </div>
    )
}



export default SearchItems;