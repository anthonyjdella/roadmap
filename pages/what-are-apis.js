import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'
import stylesApi from '../styles/Api.module.css'
import Image from "next/image"
import Button from "react-bootstrap/Button"
import Confetti from "react-dom-confetti"
import React from "react";

export default class WhatIsRapidApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    render() {
        return (
            <div className={styles.container}>
                <Meta />

                <main className={styles.main}>
                    <h1 className={styles.title}>What are APIs?</h1>

                    <h2></h2>

                    <div className={stylesApi.animationContainer}>
                        <div className={stylesApi.figures}>
                            <div className={stylesApi.figureBox}>
                                <Confetti />
                                <Image
                                    src="/animation/customer-cropped.svg"
                                    alt="Customer"
                                    width={100}
                                    height={100}
                                />
                                <div className={stylesApi.figureHidden}>
                                    <Image
                                        src="/animation/customer-burger-cropped.svg"
                                        alt="Customer"
                                        width={100}
                                        height={100}
                                    />
                                </div>
                                <p className={stylesApi.actor}>Customer</p>
                                <Button
                                    onClick={this.handleClick}
                                >
                                    {this.state.isToggleOn ? "Request Food" : "Requesting..."}
                                </Button>
                            </div>
                            <div className={stylesApi.figureHidden}>
                                <Image
                                    src="/burger-cropped.svg"
                                    alt="Customer"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            {/* <div className={stylesApi.figureBox}>
                                <Image
                                    src="/animation/waiter-cropped.svg"
                                    alt="Customer"
                                    width={100}
                                    height={100}
                                />
                                <p className={stylesApi.actor}>Waiter</p>
                            </div> */}
                            <div className={stylesApi.line}></div>
                            <div className={stylesApi.figureBox}>
                                <Image
                                    src="/animation/chef-cropped.svg"
                                    alt="Customer"
                                    width={100}
                                    height={100}
                                />
                                <p className={stylesApi.actor}>Kitchen</p>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </main>
            </div>
        );
    }
}