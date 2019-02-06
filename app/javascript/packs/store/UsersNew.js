import React from 'react'

class UsersNew extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      company_name: "",
      type: "",
      error: []
    };
  }

  handleChange = (e) => {
    var change = {}
    change[e.target.name] = e.target.value
    this.setState(change);
  }


  signupUser = (e) => {
    var password = $("#signup-form input[type=text]")[0].value
    var type_radio = $("#signup-form input[type=radio]")

    if (password.length == 0 && !type_radio[0].checked && !type_radio[1].checked) {
      alert("Missing Password, must select buyer or seller")
    } else if (type_radio[0].checked) {
      var company_name = $("#signup-form input[type=text]")[1].value
      if (company_name.length == 0) {
        alert("missing company name")
      }
    } else {

      var data = new FormData();
      var form = {}

      if (company_name != '') {
        form["password"] = password
        form["type"] = type_radio[1].checked
        form["company_name"] = ""
      } else {
        form["password"] = password
        form["type"] = type_radio[0].checked
        form["company_name"] = company_name
      }

      data.append("sign_up", JSON.stringify(form));

      fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(form)
      });
    }
  }

  signupUser = (e) => {
    var password = $("#signup-form input[type=text]")[0].value
    var type_radio = $("#signup-form input[type=radio]")

    if (password.length == 0 && !type_radio[0].checked && !type_radio[1].checked) {
      alert("Missing Password, must select buyer or seller")
    } else if (type_radio[0].checked) {
      var company_name = $("#signup-form input[type=text]")[1].value
      if (company_name.length == 0) {
        alert("missing company name")
      }
    } else {
      var data = new FormData();
      var form = {}
      var output = $("#signup-form input").serializeArray().map(function(x){form[x.name] = x.value;})

      fetch("/api/users", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: output
      });
    }
  }

  render() {
    return (
      <div className="d-flex justify-content-center align-items-center container ">
        <div className="row">
          <form id="signup-form">
            <div className="form-group">
              <label htmlFor="inputEmail" className="control-label">Enter Email</label>
              <br/>
                <input
                  className="control-label"
                  name="password"
                  type="text"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="inputEmail"
                />
            </div>
            <div className="form-group">
              <label>
                User Type
              </label>
              <br/>
                <input
                  className="control-label"
                  type="radio"
                  name="type"
                  value="true"
                  data-api-value="Buyer"
                  checked={this.state.type === "true"}
                  onChange={this.handleChange} />
              <label>
                Buyer
              </label>
                <input
                  className="control-label"
                  type="radio"
                  name="type"
                  value="false"
                  data-api-value="Seller"
                  checked={this.state.type === "false"}
                  onChange={this.handleChange} />
              <label>
                Seller
              </label>
            </div>
            {this.state.type == "true" ?
              <div className="form-group">
                <label htmlFor="inputCompany" className="control-label">Enter Company Name</label>
                <br/>
                  <input
                    className="control-label"
                    name="company_name"
                    type="text"
                    value={this.state.company_name}
                    onChange={this.handleChange}
                    id="inputCompany"
                  />
              </div>
            :
              null
            }
            <div className="form-group">
              <button className="signin-user btn btn-primary"
                      onClick={this.signupUser} type="button">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UsersNew
