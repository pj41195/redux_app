import React, { Component } from 'react';
import { connect } from 'react-redux';
class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Select any book to started</div>;
        }

        return (
            <div>Details=<h3>{this.props.book.title}</h3>{this.props.book.pages}</div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);