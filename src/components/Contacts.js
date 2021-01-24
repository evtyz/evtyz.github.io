import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Button, Spinner } from "react-bootstrap";
import "./Contacts.css";
import { MdSend } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";

class Contacts extends React.Component {

    recaptchaRef = React.createRef();


    state = {
        captcharequest: false,
        loading : false,
        thankyou: false
    }

    // get all data in form and return object
    getFormData = (form) => {
        var elements = form.elements;
        var honeypot;

        var fields = Object.keys(elements)
            .filter(function (k) {
                if (elements[k].name === "honeypot") {
                    honeypot = elements[k].value;
                    return false;
                }
                return true;
            })
            .map(function (k) {
                if (elements[k].name !== undefined) {
                    return elements[k].name;
                    // special case for Edge's html collection
                } else if (elements[k].length > 0) {
                    return elements[k].item(0).name;
                }
                return null;
            })
            .filter(function (item, pos, self) {
                return self.indexOf(item) === pos && item;
            });

        var formData = {};
        fields.forEach(function (name) {
            var element = elements[name];

            // singular form elements just have one value
            formData[name] = element.value;

            // when our element has multiple items, get their values
            if (element.length) {
                var data = [];
                for (var i = 0; i < element.length; i++) {
                    var item = element.item(i);
                    if (item.checked || item.selected) {
                    data.push(item.value);
                    }
                }
                formData[name] = data.join(", ");
            }
        });

        // add form-specific values into the data
        formData.formDataNameOrder = JSON.stringify(fields);
        formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
        formData.formGoogleSendEmail = form.dataset.email || ""; // no email by default

        return {
            data: formData, 
            honeypot: honeypot 
        };
    }

    handleFormSubmit = (event) => {
        // handles form submit without any jquery
        event.preventDefault(); // we are submitting via xhr below
        var form = event.target;
        var formData = this.getFormData(form);
        var data = formData.data;

        console.log("Captcha onsubmit:", this.recaptchaRef.current.getValue());

        if (this.recaptchaRef.current.getValue() === "") {
            console.log("Robot detected");
            this.setState({
                captcharequest: true,
                loading: false,
                thankyou: false
            })
            return false;
        }

        // If a honeypot field is filled, assume it was done so by a spam bot.
        if (formData.honeypot) {
            console.log("honeypot");
            return false;
        }

        this.disableAllButtons(form);
        this.setState({
            ...this.state,
            loading: true
        })
        var url = form.action;
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        // xhr.withCredentials = true;
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                form.reset();
                this.setState({
                    captcharequest: false,
                    loading: false,
                    thankyou: true
                })
                this.enableAllButtons(form);
                this.recaptchaRef.current.reset();
            }
        };
        // url encode form data for sending as post data
        var encoded = Object.keys(data)
            .map(function (k) {
                return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
            })
            .join("&");
        xhr.send(encoded);
    }

    disableAllButtons = (form) => {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }

    enableAllButtons = (form) => {
        var buttons = form.querySelectorAll("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = false;
        }
    }

    onCaptchaChange = (value) => {
        console.log("Captcha value:", value);
    }

    render() {
        return (
        <div>
            <h2>contact me</h2>
            <p>Leave a message and say hello!</p>

            <form
            id="gform"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbwbR6eJiLEzFH19K7gBaOVlizxtZ1X7f5W2p3DtJ3-WnOtpDPY/exec"
            onSubmit={this.handleFormSubmit}
            >
                <div 
                    style={{ 
                        display: "flex", 
                        flexDirection: "column" 
                    }}>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            marginLeft: "-1em",
                            marginRight: "-1em",
                        }}
                    >
                    <fieldset className="pure-group inlinegroup">
                        <label>Name: </label>
                        <input
                            id="name"
                            name="name"
                            className="field"
                            placeholder="John Doe"
                            required
                        />
                    </fieldset>
                    <fieldset className="pure-group inlinegroup">
                        <label>Email Address: </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="field"
                            placeholder="john.doe@example.com"
                            required
                        />
                    </fieldset>
                    </div>
                    <fieldset className="pure-group">
                    <label>Subject: </label>
                    <input
                        id="subject"
                        name="subject"
                        className="field"
                        placeholder="Lorem Ipsum"
                        required
                    />
                    </fieldset>
                    <fieldset className="pure-group">
                    <label>Message: </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="10"
                        className="field"
                        required
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                        </textarea>
                    </fieldset>
                    <fieldset className="pure-group honeypot-field">
                    <input id="honeypot" type="text" name="honeypot" />
                    </fieldset>
                    <ReCAPTCHA
                        style={{
                            marginTop: "1em",
                            display: "flex",
                            justifyContent: "center"
                        }}
                        ref = {this.recaptchaRef}
                        sitekey = "6LffoDoaAAAAAO_YgbYUW1wxni120y1VbDpk5Ogz"
                        onChange = {this.onCaptchaChange}
                    />
                    <Button
                        type="submit"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "1.5em",
                            borderRadius: "0.5em",
                            marginRight: 0,
                        }}
                    >
                    <Spinner
                        id="loading"
                        animation="border"
                        size="sm"
                        style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            marginRight: "0.5em",
                            display: this.state.loading ? "inline-block" : "none",
                        }}
                    />
                    <MdSend style={{ marginRight: "0.5em" }} />
                    Send
                    </Button>
                </div>
                <p
                    style={{
                        width: "100%",
                        borderRadius: "0.5em",
                        backgroundColor: "var(--accentdark)",
                        padding: "0.5em",
                        color: "white",
                        marginTop: "1em",
                        fontWeight: 400,
                        display: this.state.thankyou ? "flex" : "none",
                        justifyContent: "center"
                    }}
                >
                    Your message has been sent! I'll get back to you as soon as possible.
                </p>
                <p
                    style={{
                        width: "100%",
                        borderRadius: "0.5em",
                        backgroundColor: "red",
                        padding: "0.5em",
                        color: "white",
                        marginTop: "1em",
                        fontWeight: 400,
                        display: this.state.captcharequest ? "flex" : "none",
                        justifyContent: "center"
                    }}
                >
                    Your message could not be sent. Please verify that you are human first!
                </p>
            </form>
        </div>
        );
    }
}

export default Contacts;
