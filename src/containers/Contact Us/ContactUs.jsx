
import React from 'react'
import "./ContactUs.css"
import emailjs, { send } from "emailjs-com"
import Swal from 'sweetalert2'



export const ContactUs = () => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("service_ht7ue86","template_n2ug9oc",e.target,"_T2QJMiWDn5FICpEK")
            .then((result =>{
                window.location.reload()
            },(error =>{
                console.log(error.text);
            })))
    }
    function alert(){
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'the E-mail was sent correctly',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(window.location.reload(),5000)
    }
   


  return (
     <div className="mainContact">
            <div className="divContact">
                <span >Contact Us!</span>
            <div className="container">
    <div className="row">
        <div className="col-md-8">
            <div className="well well-sm">
                <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="name">
                                Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter name" required="required"  name="from_name"/>
                        </div>
                        <div className="form-group">
                            <label type="email">
                                Email Address</label>
                            <div className="input-group">
                                <span className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span>
                                </span>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" required="required" name="from_email"/></div>
                        </div>
                        <div className="form-group">
                            <label for="subject">
                                Subject</label>
                            <select id="subject" name="subject" className="form-control" required="required" >
                                <option value="na" selected="">Choose One:</option>
                                <option value="service">General Customer Service</option>
                                <option value="suggestions">Suggestions</option>
                                <option value="product">Product Support</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label for="name">
                                Message</label>
                            <textarea name="message" id="message" className="form-control" rows="9" cols="25" required="required"
                                placeholder="Message"></textarea>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-primary pull-right" id="btnContactUs" value={send} onClick={alert}>
                            Send Message</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
        <div className="col-md-4">
            <form>
            <legend><span className="glyphicon glyphicon-globe"></span> Our Info</legend>
            <address>
                <strong></strong><br/>
                Lavalle 180, Tucuman<br/>
                San Miguel de Tucuman, CP: 4000<br/>
                <abbr title="Phone">
                    Phone: </abbr>
                (381) 649-1095
            </address>
            <address>
                <strong>Gandur, Ezequiel Maximiliano</strong><br/>
                <a href="mailto:#">maxigandur48@gmail.com</a>
            </address>
            </form>
        </div>
    </div>
</div>
            </div>
    </div> 
    
    

    
  )
}

export default ContactUs