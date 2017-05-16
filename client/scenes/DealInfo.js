import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';

import { deepOrange500, white, fullWhite, lightWhite } from 'material-ui/styles/colors';

const styles = {
    cardContainer: {
        height: '100vh',
        width: '100vw',
        top: '50px',
        left: '0px',
        postion: 'fixed',
        opacity: '1',

    },
    cardContainerHide: {
        height: '0vh',
        width: '0vw',
        top: '50%',
        left: '50%',
        opacity: '0',
        postion: 'fixed',

    },
    cardWrapper: {
        overflow: 'hidden',
        /* paddingLeft: '10px',
         paddingRight: '10px',
         paddingTop: '10px',
         paddingBottom: '10px',*/
        height: '100%',

    },
    cardPaper: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'rgb(119, 0, 0)',
        textAlign: 'center',
        overflow: 'hidden',
        height: '100%',

    },
    cardHeader: {
        background: 'linear-gradient(45deg, rgb(185, 60, 87) 30%, #ce7547 90%)',
        height: '100px',
        color: 'rgb(255, 255, 255)',
    },
    vendorlogo: {
        width: '100px',
        height: '100px',
        float: 'left',
    },
    vendorlogoimg: {
        width: '100%',
        height: '100%',
    },
    cardTitleWrapper: {
        height: '100px',

        color: 'rgb(255, 255, 255)',
    },
    cardTitle: {
        height: '100%',

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
        lineHeight: '1.5em',
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
    actionGoTop: {
        background: 'rgb(95, 50, 90)',
    },
    locationsWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: 4,
    },

}



class DealInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
        }


    }



    componentWillReceiveProps(nextProps) {
        console.log("in " + nextProps.open)
        if (this.props.open != nextProps.open)
            this.setState({ open: nextProps.open });
    }

    render() {
        let locationChips = this.props.data.locations.map((data, index) => {
            //console.log("index " + index);
            return (
                <Chip key={index}
                    backgroundColor={deepOrange500}
                    style={styles.chip}>
                    {data.name}
                </Chip>
            )
        }, this);

        return (
            <div className="deal-container" style={this.state.open ? styles.cardContainer : styles.cardContainerHide}>

                <div style={styles.cardWrapper} >
                    <Paper style={styles.cardPaper} zDepth={1} rounded={false} onTouchTap={this.props.handleClose()}>
                        <div style={styles.vendorlogo}><img style={styles.vendorlogoimg} src={this.props.open ? this.props.data.vendor.logo : ""} /></div>
                        <div style={styles.cardHeader}><div style={styles.cardTitle}>{this.props.open ? this.props.data.name : ""}</div></div>
                        <div style={styles.cardBodyWrapper}>
                            <div style={styles.dateRow}><div style={styles.offerStart}><span>Offer Starts: </span>{new Date(this.props.open ? this.props.data.offer_start : "").toDateString()}</div> <div style={styles.offerEnd}><span>Offer Ends: </span>{new Date(this.props.open ? this.props.data.offer_end : "").toDateString()}</div></div>
                            <div style={styles.cardDesc}>{this.props.open ? this.props.data.desc : ""}</div>
                        </div>
                        <div style={styles.locationsWrapper}>
                           {locationChips}
                        </div>
                    </Paper >
                </div>



            </div>

        );//.return
    }//.render
}//.class LatestDeals

export default DealInfo;