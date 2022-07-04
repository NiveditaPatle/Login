import React, { Component } from 'react'
import './Login.css';
export default class LoginForm extends Component {
    state = {
        ufname: '',
        ulname: '',
        email: '',
        password: '',
        c_box: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (e) => {
        alert(` Welcome to ${this.state.ufname} ${this.state.ulname} `)
        e.preventDefault()

    }

    render() {
        return (
            <div className='form'>
                <form>
                    <div className='input_div name '>
                        <div>
                            <input className='fname' type='text' name='ufname' placeholder='First Name' value={this.state.ufname} onChange={this.handleChange} />
                          
                        </div>
                        <div>
                            <input className='lname' type='text' name='ulname' placeholder='Last Name' value={this.state.ulname} onChange={this.handleChange} />
                            
                        </div>
                    </div>
                    <div className='input_div'>
                        <input className='input_text' type='email' name='email' placeholder='Email address' value={this.state.email} onChange={this.handleChange} />
                        
                    </div>
                    <div className='input_div'>
                        <input className='input_text' type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange} required />
                        
                    </div>
                    <div className='input_div'>
                        <input id='c_box' type='checkbox' name='c_box' onChange={this.handleChange} />
                        <label htmlFor='c_box' className='label1'>Subscribe to our newsletter</label>
                    
                    </div>
                    <div className='input_div'>
                        <button className='btn' onClick={this.handleSubmit}>SIGN UP</button>
                    </div>
                    <div className='input_div'>
                        <label htmlFor='sign' className='label2'>or sign up with:</label>
                        <div className='div_a'>
                            <a href="https://www.facebook.com/login/" > <i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%26ogbl%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin"><i class="fa-solid fa-g"></i></a>
                            <a href="https://twitter.com/i/flow/login"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://github.com/"><i class="fa-brands fa-github"></i></a>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

