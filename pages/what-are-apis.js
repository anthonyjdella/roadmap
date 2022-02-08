import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'
import stylesApi from '../styles/Api.module.css'
import Image from "next/image"
import Button from "react-bootstrap/Button"
import Confetti from "react-dom-confetti"
import React from "react";

import styled, { keyframes } from 'styled-components'

export default class WhatIsRapidApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            move: false,
            showComponent: false
        };
        this.handleIt = this.handleIt.bind(this);
    }

    handleIt() {
        this.setState({
            move: true,
            confettiConfig: {
                angle: 90,
                spread: 360,
                startVelocity: 40,
                elementCount: 70,
                dragFriction: 0.12,
                duration: 3000,
                stagger: 3,
                width: "10px",
                height: "10px",
                perspective: "500px",
                colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
            },
        });
        setTimeout(() => {
            this.setState((prevState) => ({
                showComponent: !prevState.showComponent,
            }));
        }, 4000);
    }

    doIt() {
        console.log('doIt')
    }


    render() {

        const xAxisBubble = keyframes`
            0% {
                opacity: 0;
                animation-timing-function: ease-in;
                transform: translateX(-400px);
                transition-duration: 6s;
            }
            90% {
                opacity: 1;
                transition-duration: 6s;
            }
            100% {
                visibility: hidden;
            }
        `;

        const xAxisBurger = keyframes`
            0% {
                opacity: 0;
                animation-timing-function: ease-in;
                transform: translateX(400px);
                transition-duration: 6s;
            }
            90% {
                opacity: 1;
            }
            100% {
                visibility: hidden;
            }
        `;

        const Bubble = styled.div`
            animation: ${xAxisBubble} 2.5s ease-in;
            margin-top: 60px;
            position: absolute;
            right: 100px;
            z-index: 2;
        `;

        const Burger = styled.div`
            animation: ${xAxisBurger} 2.5s ease-in;
            margin-top: 110px;
            animation-delay: 2s;
            position: absolute;
            left: 100px;
            z-index: 2;
        `;

        return (
            <div className={styles.container}>
                <Meta />

                <main className={styles.main}>
                    <h1 className={styles.title}>What are APIs?</h1>

                    <h2></h2>

                    <div className={stylesApi.animationContainer}>
                        <div className={stylesApi.figures}>
                            <div className={stylesApi.figureBox}>
                                <Confetti
                                    active={this.state.showComponent}
                                    config={this.state.confettiConfig}
                                />
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
                                    onClick={() => {
                                        this.handleIt();
                                        this.doIt();
                                    }}
                                >
                                    Request Food
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

                            <Burger>🍔</Burger>

                            <div className={stylesApi.line}></div>

                            <Bubble>💬</Bubble>

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