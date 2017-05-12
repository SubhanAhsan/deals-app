

import React, { Component } from 'react';
import axios from 'axios';
//import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import CircularProgress from 'material-ui/CircularProgress';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import IconArrowUp from 'material-ui/svg-icons/hardware/keyboard-arrow-up';

//const colorBGList = ['#FFC107', '#FF5722', '#00BCD4', '#8BC34A','#009688'];
const colorBGList = ['#FFF', '#EEEEEE', '#FFF', '#EEEEEE'];
const colorTitleBGList = ['rgb(212, 125, 0)', 'rgb(181, 173, 0)', 'rgb(0, 188, 212)'];

const styles = {
    card: {
        height: '250px',
        textAlign: 'center',

    },
    cardWrapper: {
        overflow: 'hidden',
        paddingLeft: '10px',
        paddingRight: '10px',
        paddingTop: '10px',
        paddingBottom: '10px',
       background: 'linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%)',
    },

    vendorlogo: {
        width: '100px',
        height: '100px',
        float: 'left',
    },
    vendorlogoimg: {
        width: '100%',
        height: '100%'
    },
    cardTitleWrapper: {
        height: '100px',

        color: 'rgb(255, 255, 255)',
    },
    cardTitle: {
        height: '100%',
        padding: '5px',
        overflow: 'hidden',
        fontSize: '20px',
    },
    cardBodyWrapper: {
        width: '100%',

    },
    cardDesc: {
        padding: '5px',
        fontSize: '14px',
        textAlign: 'left',
    },
    dateRow: {
        width: '100%',
        paddingTop: '5px',
        paddingBottom: '15px',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    offerStart: {
        width: '50%',
        float: 'left',
    },
    offerEnd: {
        width: '50%',
        float: 'left',
    },
    spinner: {
        zIndex: '999',
        marginTop: '-50px',
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    spinnerWrapper: {
        width: '10%',
        margin: '0 auto',
    },
    actionUpWrapper: {
        position: 'fixed',
        right: '30px',
        bottom: '30px',
    },
};

const Spinner = props => {
    if (props.isLoading) {
        return <CircularProgress style={styles.spinner} />
    }
    else return null;
};

const pagination = 10;

class ScrollingList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            newStories: [],
            isLoading: true,
            isLoadingMore: false,

        }
        this.ContentIDs = [];
        this.startIndex = 0;

        this.handleScroll = this.handleScroll.bind(this);
        this.loadMoreData = this.loadMoreData.bind(this);
        this.scrollUpAction = this.scrollUpAction.bind(this);
        this.cardBgColorSelector = this.cardBgColorSelector.bind(this);
        this.cardTitleBgColorSelector = this.cardTitleBgColorSelector.bind(this);
    }

    componentDidMount() {
        //TODO
        this.getContentIDs(0, pagination, false);
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll(e) {
        var cContext = this;
        window.requestAnimationFrame(function () {
            cContext.loadMoreData();
        });
    }

    getContentIDs(startIndex, pagination, isLoadingMore) {
        this.showLoader();
        let sourceUrl = location.hostname === 'localhost' ?
            'http://localhost:8080/api/offers/ids' :
            '/api/offers/ids'; //path based on environment (development/production)
        axios.get(sourceUrl)
            .then(response => {
                if (response.data && response.data.length === 0) {
                    this.hideLoader();
                    return;
                }
                //this.startIndex = startIndex + pagination;

                this.ContentIDs = response.data; //store the ids in the array
                this.getContentData(this.ContentIDs, startIndex, pagination);


                //this.hideLoader();

            });
    }//.getContentJson

    getContentData(IDs, startIndex, pagination) {

        console.log('startIndex ' + startIndex);
        this.showLoader();
        for (let i = startIndex; i < startIndex + pagination; i++) {

            if (i >= IDs.length) {
                this.hideLoader();
                return;
            }

            this.startIndex = startIndex + pagination;

            let contentUrl = location.hostname === 'localhost' ?
                'http://localhost:8080/api/offers/' + IDs[i] :
                '/api/offers/' + IDs[i];

            axios.get(contentUrl)
                .then(response => {
                    if (response.data && response.data.length === 0) {
                        this.hideLoader();
                        return;
                    }
                    this.setState((prevState, props) => ({
                        newStories: prevState.newStories.concat(response.data)
                    }));

                    if (i === startIndex + pagination - 1) this.hideLoader();

                });

            this.hideLoader();

        }
    }

    loadMoreData() {
        var body = document.body,
            html = document.documentElement;
        //TODO optimize the docHeight calculation....remove offset if possible
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, body.clientHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

        var windowHeight = document.documentElement.clientHeight;

        if (window.scrollY == docHeight - windowHeight) {
            console.log('bottom');

            this.getContentData(this.ContentIDs, this.startIndex, pagination);

        }
    }


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


    scrollUpAction() {
        window.scrollTo(0, 0);
    }

    cardBgColorSelector(index) {
        let x = index % 4;
        return {
            height: '250px',
            textAlign: 'center',
            backgroundColor: colorBGList[x],
        }
    }

    cardTitleBgColorSelector(index) {
        let x = index % 3;
        return {
            height: '100px',
            color: 'rgb(255, 255, 255)',
            backgroundColor: colorTitleBGList[x],
        }
    }

    render() {
        var newStories1 = this.state.newStories.map((data, index) => {
            //console.log("index " + index);
            return (
                <div style={styles.cardWrapper} key={index}>
                    <div style={styles.cardWrapperBG}>
                        <Paper style={this.cardBgColorSelector(index)} zDepth={1} rounded={false} >
                            <div style={styles.vendorlogo}><img style={styles.vendorlogoimg} src={data.vendor.logo} /></div>
                            <div style={this.cardTitleBgColorSelector(index)}><div style={styles.cardTitle}>{data.name}</div></div>
                            <div style={styles.cardBodyWrapper}>
                                <div style={styles.dateRow}><div style={styles.offerStart}><span>Offer Starts: </span>{new Date(data.offer_start).toDateString()}</div> <div style={styles.offerEnd}><span>Offer Ends: </span>{new Date(data.offer_end).toDateString()}</div></div>
                                <div style={styles.cardDesc}>{data.desc}</div>
                            </div>
                        </Paper >
                    </div>
                </div>
            )
        }, this);

        return (
            <div className="content-container">

                {newStories1}

                <div style={styles.spinnerWrapper}>
                    <Spinner isLoading={true} />
                </div>

                <div style={styles.actionUpWrapper}>
                    <FloatingActionButton mini={true} onTouchTap={this.scrollUpAction}>
                        <IconArrowUp />
                    </FloatingActionButton>
                </div>
            </div>
        )//.return
    }//.render
}//.class ScrollingList
export default ScrollingList;
