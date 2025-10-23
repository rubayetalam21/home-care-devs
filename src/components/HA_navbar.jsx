import React from 'react';

const HA_navbar = () => {
    return (
        <div className='w-full'>
            <div className="navbar bg-base-100 shadow-sm w-full">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl text-amber-800">daisyUI</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                        <summary>Parent</summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                            <li><a>Link 1</a></li>
                            <li><a>Link 2</a></li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HA_navbar;