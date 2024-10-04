import React from "react";

interface ItemListProps{
    filterItems: () => string[];
}

const ItemList: React.FC<ItemListProps> = ({ filterItems }) => {
    const filteredItems = filterItems();

    return(
        <ul>

            {filteredItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )

}




export default ItemList;