import React, { Component } from 'react';
import './List.css';

class List extends Component {
    constructor() {
        super()
        this.state = {
            
            data: [
                {
                    title: "Mukadimah Bahasa Pemrograman",
                    thumbnail: "https://img.youtube.com/vi/dugL0oYx0w0/default.jpg",             
                },
                {
                    title: "Variabel dan Operator",
                    thumbnail: "https://img.youtube.com/vi/u0Mq3FzpsmI/default.jpg",
                },
                {
                    title: "Percabangan dan Perulangan",
                    thumbnail: "https://img.youtube.com/vi/Lp-Du2fKoug/default.jpg",
                    },
                {
                    title: "Function",                  
                    thumbnail: "https://img.youtube.com/vi/KH57lIgwe2g/default.jpg",
                },
                {
                    title: "Array",
                    thumbnail: "https://img.youtube.com/vi/EUnV-fCY0Pc/default.jpg",
                }
            ]
        };
    }

    render() {
        return (
            <div className="App">
                {this.state.data.map((item, index) => {
                    return (
                        <div className="style">
                            
                            <h3>{index +1}.</h3><img src={item.thumbnail}/><p>{item.title}</p>
                        </div>
                    )
                })}
            </div>

        );
    }

}

export default List;
