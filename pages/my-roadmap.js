import Footer from "../components/footer";
import Meta from "../components/meta";
import styles from "../styles/Home.module.css";
import React from "react"
import Board from "react-trello";

export default class MyRoadmap extends React.Component {
    render() {

    const data = {
        lanes: [
            {
                cards: [
                    {
                        title: "Create this website 🖥️",
                        description:
                            "Develop a website that showcases my DevRel skills and future goals",
                        id: "website",
                        label: "1 week",
                        laneId: "WIP",
                        tags: [
                            {
                                title: "Coding",
                                bgcolor: "#083642",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Start a Podcast 🎙️",
                        description:
                            "Speak with other developers & advocates to build a community",
                        id: "podcast",
                        label: "1 week",
                        laneId: "WIP",
                        tags: [
                            {
                                title: "Content",
                                bgcolor: "#0079BF",
                                color: "white",
                            },
                            {
                                title: "Community",
                                bgcolor: "#F3B005",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Write a Blog about APIs ✍️",
                        description:
                            "Write a blog post to teach beginner developers about APIs",
                        id: "api",
                        label: "5 hours",
                        laneId: "WIP",
                        tags: [
                            {
                                title: "Content",
                                bgcolor: "#0079BF",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Get a job in DevRel 💬",
                        description: "Transfer to bank account",
                        id: "job",
                        label: "1 month",
                        laneId: "WIP",
                        tags: [
                            {
                                title: "Career",
                                bgcolor: "#82B563",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Learn new tech 🧑‍💻",
                        description: "Keep studying new technologies and create projects",
                        id: "study",
                        label: "1 month",
                        laneId: "WIP",
                        tags: [
                            {
                                title: "Coding",
                                bgcolor: "#083642",
                                color: "white",
                            },
                        ],
                    },
                ],
                currentPage: 1,
                disallowAddingCard: true,
                id: "WIP",
                label: "",
                style: {
                    width: 280,
                },
                title: "In-Progress",
            },
            {
                cards: [],
                currentPage: 1,
                id: "BLOCKED",
                label: "0/0",
                style: {
                    width: 280,
                },
                title: "Blocked",
            },
            {
                cards: [
                    {
                        description: "Use Headspace app",
                        id: "Completed1",
                        label: "15 mins",
                        laneId: "COMPLETED",
                        title: "Practice Meditation",
                    },
                    {
                        description: "Use Spreadsheet for now",
                        id: "Completed2",
                        label: "15 mins",
                        laneId: "COMPLETED",
                        title: "Maintain Daily Journal",
                    },
                ],
                currentPage: 1,
                id: "COMPLETED",
                label: "2/5",
                style: {
                    width: 280,
                },
                title: "Completed",
            },
        ],
    };

        return (
            <div className={styles.container}>
                <Meta />

                <main className={styles.main}>
                    <h1 className={styles.title}>My Roadmap</h1>

                    <h2>
                        A visual representation of where I see myself heading
                        (in terms of DevRel)
                    </h2>

                    <Board data={data} />

                    <Footer />
                </main>
            </div>
        );
    }
}
