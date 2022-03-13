import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import logo from '../../assets/logo.svg';
import Button from '@material-ui/core/Button';
import Modal from "react-modal";
import { modalCreateLogin } from "./modalStyle.js"
import LoginRegister from "../../screens/login-register/LoginRegister.js"
import "./header.css"


const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonValue, setButtonValue] = useState("LOGIN")
    function toggleModal() {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        const userDetails = sessionStorage.getItem("user-details");
        if (userDetails && JSON.parse(userDetails).id) {
            setButtonValue("LOGOUT");
        }
    }, [buttonValue])

    const bookShowHandler=()=>{

    }



    return (
        <Fragment>
            <div className="header">
                <img className="logo" src={logo} alt="My logo" />
                <Button className="login-btn" variant="contained" name="login" onClick={toggleModal}>{buttonValue}</Button>
                {props.showBookShowButton ?
                    <Button className="login-btn" variant="contained" onClick={bookShowHandler} color="primary">Book Show</Button>
                    : ""}
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                style={modalCreateLogin} ariaHideApp={false} scrollable
            >
                <LoginRegister setButtonValue={setButtonValue} onClickClose={toggleModal} {...props}></LoginRegister>
            </Modal>
        </Fragment>
    )

}

export default Header;