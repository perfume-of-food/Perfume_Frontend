import { useState } from "react";
import { NavLink } from "react-router-dom";


const mealsData = [
    {
        title: 'おすすめ',
        like: '/',
    },
    {
        title: 'デザート',
        like: '/desert',
    },
    {
        title: '飲み物',
        like: '/drink',
    },
    {
        title: 'おつまみ',
        like: '/snacks',
    },
    {
        title: 'その他',
        like: '/others',
    },
];

const Header = ({title}) => {
    const [navs] = useState(mealsData);

    return (
        <>
            <div>
                <h1 className='h1'>{title}</h1>
            </div>
            <ul className='flex justify-center items-center gap-8'>
                {navs.map((nav, index) => (
                    <li key={index} className='li'>
                        <NavLink to={nav.like} className='navs'>
                            {nav.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Header;
