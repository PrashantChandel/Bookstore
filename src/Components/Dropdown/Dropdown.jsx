import React from "react";
import './styles.css'
const Dropdown = () => {
    const categories = ['Adventure', 'Contemporary Lit', 'Diverse Lit', 'Fanfiction', 'Fantasy', 'Historical', 'Fiction', 'Horror', 'Humor', 'Mystery', 'New-Adult', 'Non-Fiction', 'Paranormal', 'Poetry', 'Romance', 'Science-Ficiton', 'Short-Story', 'Teen-Fiction', 'Thriller', 'Werewolf']
    const listitems = categories.map((category, index) =>
        <a className='w-60' href="/">{category}</a>
    );
    return (
        <li className="px-3 catDropDown ">
            <p className="linkx ">Categories</p>
            <div className="drop-menu shadow-xl">
                {listitems}
            </div>
        </li>


    )
}

export default Dropdown;