import React from 'react';
import "./header.css"



function Header(){
    return (
        <div className="header">
            <div className="content">
                <div className="logo">
                    <img src="/images/logo.png" width="65" height="65" alt="logo"/>
                </div>
                <div className="desc">
                    <p>北京交通大学威海校区</p>
                    <p>部门负责人年度考核民主评测</p>
                </div>
            </div>
            <div className="footer">
                待考核<span>18</span>人
            </div>
        </div>
    )
}
export default Header