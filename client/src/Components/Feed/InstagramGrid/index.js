import React from "react";

import "./styles.css";
import { Card } from 'primereact/card';
import { Dialog } from 'primereact/dialog';
import { Button } from "primereact/button";
import { delCurrMedia } from "../../../redux/ducks/igMedia/igMediaOps";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class InstagramGrid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            classNameSuffix: "",
            modalImgIndex: -1,
            images: this.props.imagesArray || [
                "http://via.placeholder.com/100",
                "http://via.placeholder.com/150",
                "http://via.placeholder.com/200",
                "http://via.placeholder.com/250",
                "http://via.placeholder.com/300",
                "http://via.placeholder.com/350"
            ],
            displayBasic: false,
        };
        console.log(this.state.images);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.handleNextImg = this.handleNextImg.bind(this);
        this.handlePrevImg = this.handlePrevImg.bind(this);
        this.deleteCurrentImg = this.deleteCurrentImg.bind(this);
    }

    handleNextImg() {
        this.setState({
            modalImgIndex: (this.state.modalImgIndex + 1) % this.state.images.length
        });
    }

    handlePrevImg() {
        this.setState({
            modalImgIndex:
                (this.state.modalImgIndex - 1 + this.state.images.length) %
                this.state.images.length
        });
    }

    deleteCurrentImg() {
        const currId = this.state.images[this.state.modalImgIndex].node.id
        this.props.delCurrMedia(currId);
    }

    handleKeyPress(e) {
        switch (e.keyCode) {
            case 27:
                // ESC key
                this.handleModalClose();
                break;
            case 39:
                // right arrow
                this.handleNextImg();
                break;
            case 37:
                // left arrow
                this.handlePrevImg();
                break;
            default:
                break;
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    renderModal() {
        if (this.state.modalImgIndex > -1) {
            return (
                <Dialog visible={this.state.displayBasic} onHide={() => this.setState({ displayBasic: false })} style={{ width: '80%' }} >
                    {/* <div className={`instagram-modal-viewport ${this.state.classNameSuffix}`}
                    > */}
                    <div
                        className="modal-close-bar-container"
                        onClick={this.handleModalClose}
                    >
                        <div className="close-bar-left"></div>
                        <div className="close-bar-right"></div>
                    </div>
                    <div className="p-grid">
                        <div className="modal-image-container p-xl-4">
                            <img
                                src={this.state.images[this.state.modalImgIndex].node.display_url}
                                alt="Img"
                                mediaId={this.state.images[this.state.modalImgIndex].node.id}
                                className="modal-image"
                            ></img>
                        </div>
                        <div className="p-xl-2 p-col-12">
                            <Card>
                                <h1>Likes</h1>
                            </Card>
                        </div>
                        <div className="p-xl-2 p-col-12">
                            <Card>
                                <h1>Comments</h1>
                            </Card>
                        </div>
                        <div >
                            <Button style={{ top: 0, right: 0 }} onClick={() => this.deleteCurrentImg()} label="delete"></Button>
                        </div>
                    </div>

                    <div
                        onClick={this.handlePrevImg}
                        className="modal-image-nav-container prev"
                    >
                        {"<"}

                    </div>
                    <div
                        onClick={this.handleNextImg}
                        className="modal-image-nav-container next"
                    >
                        {">"}
                    </div>
                    {/* </div> */}
                </Dialog>
            );
        }
    }

    handleModalClose() {
        this.setState({
            classNameSuffix: "closed"
        });
    }

    handleImgClick(imgIndex) {
        this.setState({
            modalImgIndex: imgIndex,
            classNameSuffix: "",
            displayBasic: true,
        });
    }

    render() {
        return (
            <div className="insta-grid-parent-wrapper">
                {this.renderModal()}
                <section className="insta-grid-wrapper">
                    <div className="insta-grid">
                        {this.state.images.map((image, i) => {
                            return (
                                <Card style={{ marginTop: '2%' }}>
                                    <div
                                        key={i}
                                        className="insta-grid-pic-viewport"
                                        onClick={() => this.handleImgClick(i)}
                                    >
                                        <img
                                            src={image.node.display_url}
                                            alt="Img"
                                            className="insta-grid-pic-viewport-img"
                                        />
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                </section>
            </div>
        );
    }
}

InstagramGrid.propTypes = {
    delCurrMedia: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({

});
export default connect(
    mapStateToProps,
    { delCurrMedia }
)(InstagramGrid)