import Footer from '../components/footer'
import Meta from '../components/meta'
import styles from '../styles/Home.module.css'
import stylesApi from '../styles/Api.module.css'
import Image from "next/image"
import Button from "react-bootstrap/Button"
import Confetti from "react-dom-confetti"
import React from "react";
import Link from "next/link";

import styled, { keyframes } from 'styled-components'

export default class WhatAreApis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            move: false,
            showComponent: false,
            showComponent2: false
        };
        this.handleIt = this.handleIt.bind(this);
    }

    handleIt() {
        this.setState({
            move: true,
            confettiConfig: {
                angle: 90,
                spread: 70,
                startVelocity: 40,
                elementCount: 70,
                dragFriction: 0.12,
                duration: 1000,
                stagger: 3,
                width: "10px",
                height: "10px",
                perspective: "800px",
                colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
            },
        });
        setTimeout(() => {
            this.setState((prevState) => ({
                showComponent: !prevState.showComponent
            }));
        }, 4000);
    }

    doIt() {
        this.setState({
            confettiConfig: {
                angle: 90,
                spread: 70,
                startVelocity: 40,
                elementCount: 70,
                dragFriction: 0.12,
                duration: 1000,
                stagger: 3,
                width: "10px",
                height: "10px",
                perspective: "800px",
                colors: [
                    "#a864fd",
                    "#29cdff",
                    "#78ff44",
                    "#ff718d",
                    "#fdff6a",
                ],
            },
        });
        setTimeout(() => {
            this.setState((prevState) => ({
                shiowComponent2: !prevState.showComponent2
            }));
        }, 4000);
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
                    <h2 className={stylesApi.title}>
                        A beginner-friendly article about APIs & why they are
                        important
                    </h2>

                    <article className={stylesApi.article}>
                        <ul>
                            <li className={stylesApi.listItem}>
                                Why should you care about APIs?
                            </li>
                            <p className={stylesApi.description}>
                                As a developer (or even business) APIs help you
                                save time, and makes your software development
                                process much easier. This enables you to quickly
                                create and release products. If these benefits
                                sound interesting to you, please continue
                                reading!
                            </p>
                            <li className={stylesApi.listItem}>
                                What are APIs?
                            </li>
                            <p className={stylesApi.description}>
                                Before going into any technical details,
                                let&apos;s look at a real-world example to give
                                us some context. We will look at an interaction
                                that everyone has experienced, ordering food at
                                a restaurant.
                                <p className={stylesApi.description}>
                                    Think about this situation for a moment.{" "}
                                    <i>How would you normally order food?</i>
                                </p>
                                <p className={stylesApi.description}>
                                    In its simplest form, you would: make
                                    an order, then get your food shortly after
                                    (hopefully). In other words, you{" "}
                                    <strong>
                                        make a request, then get back a response{" "}
                                    </strong>
                                    (in the form of food). This basic type of
                                    interaction (i.e. making some sort of
                                    request, then getting some type of response
                                    back) applies to many other contexts. But
                                    for now, let&apos;s focus on the food
                                    ordering example.
                                </p>
                                <p className={stylesApi.description}>
                                    Let&apos;s visualize this interaction below:
                                </p>
                                <div className={stylesApi.animationContainer}>
                                    <div className={stylesApi.figures}>
                                        <div
                                            className={`${stylesApi.figureBox}`}
                                        >
                                            <Confetti
                                                active={
                                                    this.state.showComponent
                                                }
                                                config={
                                                    this.state.confettiConfig
                                                }
                                            />
                                            <Image
                                                src="/animation/customer-cropped.svg"
                                                alt="Customer"
                                                width={100}
                                                height={100}
                                            />
                                            <div
                                                className={
                                                    stylesApi.figureHidden
                                                }
                                            >
                                                <Image
                                                    src="/animation/customer-burger-cropped.svg"
                                                    alt="Customer"
                                                    width={100}
                                                    height={100}
                                                />
                                            </div>
                                            <p className={stylesApi.actor}>
                                                Customer
                                            </p>

                                            <Button
                                                onClick={() => {
                                                    this.handleIt();
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
                                            <p className={stylesApi.actor}>
                                                Kitchen
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className={stylesApi.space}></p>
                                <p className={stylesApi.description}>
                                    So, what does ordering food have to do with
                                    APIs?
                                </p>
                                <p className={stylesApi.description}>
                                    At its core, APIs behave in the same
                                    way. Think of an API as a way for a{" "}
                                    <strong>
                                        piece of software to request information
                                        from another piece of software, then
                                        receiving a response back.{" "}
                                    </strong>
                                    Well, what kind of information are we
                                    talking about? For the most part, we are
                                    talking about data. Any data that some
                                    software wants. For example, a website might
                                    want to know the weather in a specific
                                    location. Or a social media app might want
                                    to know what people are up to. Basically,
                                    any data that meets your business needs.
                                </p>
                                <p className={stylesApi.description}>
                                    Let&apos;s visualize how an API behaves:
                                </p>
                                <div className={stylesApi.animationContainer}>
                                    <div className={stylesApi.figures}>
                                        <div
                                            className={`${stylesApi.figureBox}`}
                                        >
                                            <Confetti
                                                active={
                                                    this.state.showComponent2
                                                }
                                                config={
                                                    this.state.confettiConfig
                                                }
                                            />
                                            <Image
                                                src="/animation/client-cropped.svg"
                                                alt="Client"
                                                width={100}
                                                height={100}
                                            />
                                            <p className={stylesApi.actor}>
                                                Your software
                                            </p>

                                            <Button
                                                onClick={() => {
                                                    this.doIt();
                                                }}
                                            >
                                                Request Data
                                            </Button>
                                        </div>

                                        <Burger>⬅️</Burger>

                                        <div className={stylesApi.line}></div>

                                        <Bubble>➡️</Bubble>

                                        <div className={stylesApi.figureBox}>
                                            <Image
                                                src="/animation/server-cropped.svg"
                                                alt="Server"
                                                width={100}
                                                height={100}
                                            />
                                            <p className={stylesApi.actor}>
                                                Other software
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className={stylesApi.space}></p>
                                <p className={stylesApi.description}>
                                    As you can see, an API helps you request
                                    then receive data.
                                </p>
                                <p className={stylesApi.description}>
                                    In the case of our food ordering example, a
                                    customer makes a request, which is then sent
                                    to the kitchen. The kitchen then processes
                                    the order and sends the food back to the
                                    customer. The customer doesn&apos;t need to
                                    know how the kitchen makes their food, just
                                    that they receive it and is the order that
                                    they asked for.
                                </p>
                                <p className={stylesApi.description}>
                                    APIs work the same way. A system makes a
                                    request, which is processed by the receiver.
                                    The receiver then sends the response back to
                                    the requester. The requester doesn&apos;t
                                    need to know how the receiver processes the
                                    request, just that they receive the response
                                    and is the request that they asked for.
                                </p>
                                <p className={stylesApi.description}>
                                    Now that we have an idea of what an API is,
                                    what does it stand for?
                                </p>
                                <div>
                                    <strong>A</strong>pplication
                                </div>
                                <div>
                                    <strong>P</strong>rogramming
                                </div>
                                <div>
                                    <strong>I</strong>nterface
                                </div>
                                <p className={stylesApi.description}>
                                    If you look at those three words, one of
                                    them might be less clear than the others.
                                    I&apos;d bet that &quot;interface&quot; is
                                    that word. So, what does it mean?
                                </p>
                                <p className={stylesApi.description}>
                                    Let&apos;s look at another example. If you
                                    want to listen to sounds from your computer,
                                    you have to plug headphones into your
                                    computer. But how do you do this? You&apos;d
                                    plug the headphones into a port. The port,
                                    in this example, is an interface between your
                                    headphones and the computer. This port
                                    exposes functionality to the user, so the
                                    user gets what they want (sound). The user
                                    doesn&apos;t need to understand how this
                                    works, just that they get sound.
                                </p>
                                <p className={stylesApi.description}>
                                    Interfaces in software act in the same
                                    principle. In the context of software, an
                                    Application Programming Interface helps
                                    software get information from other software
                                    without needing to know how it works, just
                                    that they get what they want.
                                </p>
                                <p className={stylesApi.description}>
                                    Do you see how this principle may be
                                    beneficial? Since your software just
                                    requests and receives what it&apos;s looking
                                    for, you save time by re-using functionality
                                    that already exists. There is no need to
                                    re-invent the wheel. Here&apos;s an example:
                                    why make homemade bread when you can just
                                    buy it from a store? Doing so would save you
                                    so much time, which helps you ship your
                                    product faster.
                                </p>
                                <p className={stylesApi.description}>
                                    Great! Now that we have a better
                                    understanding of APIs, let&apos;s go into
                                    just a bit more detail. I&apos;ll go back to
                                    our earliest example: ordering food. As you
                                    know, there are a few extra steps that you
                                    need to take before ordering food. It&apos;s
                                    not quite as simple as just ordering, then
                                    receiving food. These steps can be broken
                                    down as follows:
                                </p>
                                <ul>
                                    <li>
                                        <u>Step 1:</u> Recognize that you are
                                        hungry and would like some food.
                                    </li>
                                    <li>
                                        <u>Step 2:</u> Go to a restaurant that
                                        serves what you&apos;re looking for.
                                    </li>
                                    <li>
                                        <u>Step 3:</u> Browse the menu.
                                    </li>
                                    <li>
                                        <u>Step 4:</u> Decide what you would
                                        like to order.
                                    </li>
                                    <li>
                                        <u>Step 5:</u> Speak with a waiter and
                                        make your request.
                                    </li>
                                    <li>
                                        <u>Step 6:</u> Wait a little while, and
                                        eventually your waiter will bring you
                                        your order.
                                    </li>
                                </ul>
                                <p className={stylesApi.description}>
                                    Let&apos;s translate each of these steps in
                                    the context of APIs:
                                </p>
                                <ul>
                                    <li>
                                        <u>Step 1:</u> Recognize that you have data needs and would like to get it
                                        without having to build it from scratch.
                                    </li>
                                    <li>
                                        <u>Step 2:</u> Do an Internet search to
                                        find the API you&apos;re looking for.
                                    </li>
                                    <li>
                                        <u>Step 3:</u> Browse the API
                                        documentation.
                                    </li>
                                    <li>
                                        <u>Step 4:</u> Decide what data you need
                                        and how you would request it.
                                    </li>
                                    <li>
                                        <u>Step 5:</u> Interact with the API and
                                        send your request.
                                    </li>
                                    <li>
                                        <u>Step 6:</u> Wait a little while, and
                                        eventually your API will bring you your
                                        data.
                                    </li>
                                </ul>
                                <p className={stylesApi.description}></p>
                            </p>
                            <li className={stylesApi.listItem}>
                                Where can I find an API?
                            </li>
                            <p className={stylesApi.description}>
                                Sometimes, finding the dish you want to order
                                can be difficult. For example, if you want to
                                eat pasta, you could either visit the restaurant
                                that you&apos;ve previously visited, or you
                                might want to look online for a new restaurant
                                with good reviews. Other times, you might not
                                even know what you want to eat.
                            </p>
                            <p className={stylesApi.description}>
                                This idea also applies to APIs. If you want to
                                use an API, you could either use one that
                                you&apos;re familiar with, or you could do a
                                Google search to find what you&apos;re looking
                                for. But this can be difficult because there are
                                so many APIs out there. And a lot of times, it
                                can be hard to find the right API that you need.
                                Sometimes, you might just want to browse APIs by
                                categories and see what&apos;s out there.
                            </p>
                            <p className={stylesApi.description}>
                                Well, what if you wanted to make things easier?
                                You might go to a buffet since you know they
                                have all types of food. And what if you could
                                visit an aggregate marketplace for all kinds of
                                APIs? Wouldn&apos;t that be so much easier?
                            </p>
                            <p className={stylesApi.description}>
                                Thankfully, there&apos;s a product that does
                                just this!{" "}
                                <Link href="https://rapidapi.com/">
                                    <a
                                        className={stylesApi.link}
                                        target="_blank"
                                    >
                                        RapidAPI
                                    </a>
                                </Link>{" "}
                                is a marketplace/aggregate of APIs, to help you
                                find the right API for your needs. You can think
                                of it as a buffet of APIs because it&apos;s got
                                every possible thing you might need.
                            </p>

                            <li className={stylesApi.listItem}>
                                Want to Learn more?
                            </li>
                            <p className={stylesApi.description}>
                                This was just an introduction to help beginners
                                understand APIs and why they are important. In a
                                future article, I will go into more detail.
                                I&apos;ll explain how you can find the right API
                                for your needs, and how to use them (with code
                                snippets). I hope this helped you! If you liked
                                it, please follow me for more content like this.
                            </p>
                        </ul>
                    </article>
                </main>
                <Footer />
            </div>
        );
    }
}