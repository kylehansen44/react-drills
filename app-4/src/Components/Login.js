import React, {Component} from 'react'

class Login extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }

        this.login = this.login.bind(this)
    }

    userChange (name){
        this.setState({username: name})
    }

    passwordChange(password){
        this.setState({password: password})
    }

    login(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render(){
        return (
            <div>
                <input onChange={e => this.userChange(e.target.value)} type="text"/>
                <input onChange={e => this.passwordChange(e.target.value)} type="text"/>
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}



export default Login