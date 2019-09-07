import React, { Component } from 'react';
import './Content.css';
import Button from '../button/Button';


class Content extends Component {
  constructor() {
    super()
    this.state = {

      data: [
        {
          nama: "facebook",
          color: "#5a7099",
        },
        {
          nama: "twitter",
          color: "#49aecb",
        },
        {
          nama: "goole",
          color: "#df4a32",
        },
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <div className="form-login">
          <div className="form-login-left">
            <h3 className="header-form-login-left">Masuk ke zenius.net</h3>

            {this.state.data.map((item, index) => {
                    return (
                      <Button nama={item.nama} color={item.color} />
                    )
                })}
            {/* <Button nama="facebook" color="#5a7099" />
            <Button nama="twitter" color="#49aecb" image="https://beginningexperience.org/wp-content/uploads/2017/03/Twitter-Logo-e1527025327338.png" d />
            <Button nama="google" color="#df4a32" /> */}



            {/* <div className="wrapper-twitter">
              <button className="button-twitter">
                <span className="font-t"> 
                  Masuk dengan twitter
              </span>
              </button>
            </div>
            <br />
            <div className="wrapper-google">
              <button className="button-google">
                <span className="font-g"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLq__Hy6s5uN9tcIAP1bZslbIzOEUSvrO1GZ2WoQEPzaZsHUTV" width="30" />
                  Masuk dengan google
              </span>
              </button>
            </div> */}
          </div>

          <div className="form-login-right">
            <form class="sign-form">
              <div>
                <div class="form-group relative">
                  <span class="err-message mt3 db">Tulis e-mail dengan format yang benar</span>
                  <input class="form-control placeholder-left montserrat" placeholder="Ketik alamat e-mailmu" type="email" value="" />
                </div>
                <div class="form-group relative mb0"><i class="pass-show icon-eye"></i><input class="form-control placeholder-left montserrat" placeholder="Ketik passwordmu" type="password" value="" />
                </div>
                <div class="tl pl3"><a href="/lupa-password" class="fw6 pl1 a-lp">Lupa Password?</a></div>
                <button type="submit" class="db an tc btn-log btn-log-in bg-yellow shadow-none bn fw6">Masuk</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default Content;
