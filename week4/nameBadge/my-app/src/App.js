import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstNameItem: "",
            firstName: "",
            lastNameItem: "",
            lastName: "",
            emailItem: "",
            email: "",
            placeOfBirthItem: "",
            placeOfBirth: "",
            phoneItem: "",
            phone: "",  
            favoriteFoodItem: "",          
            favoriteFood: "", 
            bioItem: "", 
            bio: ""          
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
      
        const {name, value} = event.target        
        this.setState({
            [name]: value
        }) 
    }

    onclickUpdate = (event) => {
      event.preventDefault()
      this.setState( {
        firstNameItem: this.state.firstName,
        lastNameItem: this.state.lastName,
        emailItem: this.state.email,
        placeOfBirthItem: this.state.placeOfBirth,
        phoneItem: this.state.phone,
        favoriteFoodItem: this.state.favoriteFood,
        bioItem: this.state.bio
      })

    }
    
    render() {

      const require =   this.state.firstName.length > 2 && 
                        this.state.lastName.length > 2 &&
                        this.state.email.length > 2 &&
                        this.state.placeOfBirth.length > 2 &&
                        this.state.phone.length > 2 &&
                        this.state.favoriteFood.length > 2 &&
                        this.state.bio.length > 2

        return (
            <main>
                <form id="myForm">

                    <div className="align">
                        <input 
                            id="firstName"
                            name="firstName" 
                            required
                            value={this.state.firstName} 
                            onChange={this.handleChange} 
                            placeholder="First Name" 
                        />
                        
                        <input 
                            name="lastName" 
                            required
                            value={this.state.lastName}
                            onChange={this.handleChange} 
                            placeholder="Last Name" 
                        />                        
                    </div>

                    <br />

                    <div className="align">    
                        <input 
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleChange} 
                            placeholder="Email" 
                        />

                        <input 
                            name="placeOfBirth" 
                            value={this.state.placeOfBirth}
                            onChange={this.handleChange} 
                            placeholder="Place of Birth" 
                        />
                    </div>

                    <br />

                    <div className="align">
                        <input 
                            name="phone" 
                            type="number"
                            required=""
                            value={this.state.phone}
                            onChange={this.handleChange} 
                            placeholder="Phone" 
                        />

                        <input 
                            name="favoriteFood" 
                            value={this.state.favoriteFood}
                            onChange={this.handleChange} 
                            placeholder="Favorite Food" 
                        />  
                    </div>   

                    <br />

                        <textarea
                            id="bio"
                            name="bio"
                            value={this.state.bio}
                            onChange={this.handleChange}
                            placeholder="Tell us about yourself"
                            rows="4"
                            cols="50"

                        ></textarea>

                    <br /><br />

                    <button disabled = {!require} onClick={this.onclickUpdate}>Submit</button>
                </form>

                    <div className="badge">
                       
                        <div><h2 id="badge2">Badge:</h2></div><br />

                        <div id="wrapper">
                             
                            <p id="name">Name: {this.state.firstNameItem} {this.state.lastNameItem}</p>
                            <p id="phone">Phone: {this.state.phoneItem}</p><br />
                            <p id="place">Place of Birth: {this.state.placeOfBirthItem}</p>
                            <p id="food">Favorite Food: {this.state.favoriteFoodItem}</p><br />
                            <p id="email">Email: {this.state.emailItem}</p>
                        </div>

                            <p id="bioDisplay">{this.state.bioItem}</p>
                    </div>
                
            </main>
        )
    }
}

export default App

