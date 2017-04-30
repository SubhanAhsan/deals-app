'use strict';

import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';

import Spinner from './Spinner.js';

const styles = {
    card: {
        cursor: 'pointer',
        height: '100px',
        width: '90%',
        margin: '20px',
        textAlign: 'center',
        display: 'inline-block',
    },
    cardTitle: {

    },
};


const pagination = 10;

class ScrollingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newStories: [],
            isLoading: true,
            isLoadingMore: false,
            startIndex: 0
        }
    }

    componentDidMount() {
        //TODO
        this.getContentJson(0, pagination, false);
    }

    getContentJson(startIndex, pagination, isLoadingMore) {

        let sourceUrl = 'http://localhost:8080/api/offers/ids';

        axios.get(sourceUrl)
            .then(response => {
                if (response.data && response.data.length == 0) {
                    this.hideLoader();
                    return;
                }

                for (let i = startIndex; i <= pagination; i++) {
                    if (i == pagination) {

                        //if (this.isMounted()) this.hideLoader();

                        //if (this.isMounted() && isLoadingMore) this.setState({ isLoadingMore: false });
                        if (isLoadingMore) this.setState({ isLoadingMore: false });

                        //this.loadMore(pagination);
                        return false;
                    }

                    this.getContentData(response.data[i], pagination);
                }
            });
    }//.getContentJson


    getContentData(id) {

        let contentUrl = 'http://localhost:8080/api/offers/' + id;

        axios.get(contentUrl)
            .then(response => {
                if (response.data && response.data.length == 0) {
                    //if (this.isMounted()) {
                    this.hideLoader();
                    //}
                    return;
                }

                let domain = response.data.url ? response.data.url.split(':')[1].split('//')[1].split('/')[0] : '';

                response.data.domain = domain;

                this.setState({ newStories: this.state.newStories.concat(response.data) });
            });

    }//.getContentData

    loadMore(pagination) {
        /*
                window.unbind('scroll');
        
                window.bind('scroll', function () {
        
                    if (window.scrollTop() == document.height() - window.height()) {
                        let previousCount = pagination + 1;
                        pagination = pagination + 11;
        
                        this.setState({ isLoadingMore: true }); //To show loader at the bottom
        
                        this.getContentJson(previousCount, pagination, true);
                    }
                }.bind(this));
            */

    }//.loadMore

    showLoader() {
        this.setState({
            isLoading: true
        });
    }//.showLoader

    hideLoader() {
        this.setState({
            isLoading: false
        });
    }//.hideLoader

    convertTime(time) {
        let d = new Date();
        let currentTime = Math.floor(d.getTime() / 1000);
        let seconds = currentTime - time;

        // more that two days
        if (seconds > 2 * 24 * 3600) {
            return 'a few days ago';
        }

        // a day
        if (seconds > 24 * 3600) {
            return 'yesterday';
        }

        if (seconds > 3600) {
            return 'a few hours ago';
        }

        if (seconds > 1800) {
            return 'Half an hour ago';
        }

        if (seconds > 60) {
            return Math.floor(seconds / 60) + ' minutes ago';
        }
    }//.convertime

    render() {
        var newStories = this.state.newStories.map((data, index) => {
            return (
                <Paper style={styles.card} zDepth={1} rounded={false} key={index}>
                   
                        <div style={styles.cardTitle}>{data.name}</div>
                   
                </Paper >
            )
    }, this);

return (
    <div className="content-container">
        <div className={this.state.isLoading ? '' : 'hide'}>
            <Spinner />
        </div>

        {newStories}
       
        <div className={this.state.isLoadingMore ? 'mtop50' : 'hide'}>
            <Spinner />
        </div>
    </div>
)//.return
    }//.render
}//.class ScrollingList
export default ScrollingList;
