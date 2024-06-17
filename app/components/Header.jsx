import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import "../styles/HeaderArea.scss"
const Header = () => {
    return (
        <header>
            <div className="logoArea">
                <HomeIcon className='icon' />
                <span>Electric PC Design</span>
            </div>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Detail</li>
                    <li>Contact</li>
                    <li>Shop</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header