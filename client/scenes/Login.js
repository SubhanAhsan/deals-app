/*global firebaseui*/
/*global firebase*/
import React, { Component } from 'react';


class Login extends Component {

    constructor(props) {
        super(props);
        this.handlefirebase = this.handlefirebase.bind(this);
    }

    handlefirebase() {
        // FirebaseUI config.
        var uiConfig = {
            signInSuccessUrl: '/',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                //firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '/latest'
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    }

    componentDidMount() {
        this.handlefirebase();
    }


    render() {

        return (
            <div id="firebaseui-auth-container"></div>
        );//.return

    }//.render

}//.class Login

export default Login;