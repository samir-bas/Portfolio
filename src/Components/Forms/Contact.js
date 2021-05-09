import React, { Component } from 'react'

class Contact extends Component {
    state = {
        lastName : '',
        firstName: '',
        tel: '',
        message: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]:value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const contac = {...this.state}
        console.log(contac)
    }

    render() {

        return (
            <form class="col-6 offset-3 mt-3" onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label htmlFor="lastName" class="form-label mt-1">Nom :</label>
                    <input type="text" name="lastName" class="form-control" value={this.state.lastName} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label htmlFor="firstName" class="form-label mt-1">Prénom :</label>
                    <input type="text" name="firstName" class="form-control" value={this.state.firstName} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label htmlFor="tel" class="form-label mt-1">Tél :</label>
                    <input type="tel" name="tel" class="form-control" value={this.state.tel} onChange={this.handleChange}/>
                </div>
                <div class="form-group">
                    <label htmlFor="message" class="form-label mt-1">Message :</label>
                    <textarea name="message" class="form-control" rows="3" value={this.state.message} onChange={this.handleChange}></textarea>
                </div>
                <button type="submit" class="btn btn-primary my-5">Envoyer</button>
            </form>

        )
    }
}

export default Contact;