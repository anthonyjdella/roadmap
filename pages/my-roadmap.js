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
                        title: "Enhancements to Site ✨",
                        description: "Add new features to my personal website",
                        id: "website",
                        label: "1 week",
                        laneId: "backlog",
                        tags: [
                            {
                                title: "Coding",
                                bgcolor: "#083642",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Start Video Tutorials 📹",
                        description:
                            "Create technical video tutorials to enhance my blog posts",
                        id: "video",
                        label: "2 weeks",
                        laneId: "backlog",
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
                        title: "Create Projects 🚀",
                        description:
                            "Implement project ideas, which have been on my backlog for a while",
                        id: "projects",
                        label: "3 weeks",
                        laneId: "backlog",
                        tags: [
                            {
                                title: "Coding",
                                bgcolor: "#083642",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Write Blog Posts ✏️",
                        description: "Keep writing technical blog posts",
                        id: "blogs",
                        label: "2 weeks",
                        laneId: "backlog",
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
                ],
                currentPage: 1,
                disallowAddingCard: true,
                id: "backlog",
                label: "",
                style: {
                    width: 280,
                    backgroundColor: "#F0FFF0",
                    boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
                },
                title: "Personal Backlog",
            },
            {
                cards: [
                    {
                        title: "Write about APIs Part:2 ✍️",
                        description: "Write another blog post APIs",
                        id: "api",
                        label: "3 days",
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
                        title: "Get a Job in DevRel 💬",
                        description:
                            "Find an opportunity with a good culture, good fit, and room for growth",
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
                        title: "Learn New Tech 🧑‍💻",
                        description:
                            "Keep studying new technologies and create projects",
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
                    backgroundColor: "#F0FFF0",
                    boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
                },
                title: "In-Progress",
            },
            {
                cards: [
                    {
                        title: "Learn Codebase & Team 🧑‍🤝‍🧑",
                        description:
                            "Get to know my colleagues, understand the codebase, & learn about the business",
                        id: "learning",
                        label: "1 month",
                        laneId: "3months",
                        tags: [
                            {
                                title: "Community",
                                bgcolor: "#F3B005",
                                color: "white",
                            },
                            {
                                title: "Coding",
                                bgcolor: "#083642",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Create First Content 📰",
                        description:
                            "Create my first piece of technical content, aimed at helping developers",
                        id: "content",
                        label: "1 week",
                        laneId: "3months",
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
                        title: "Relationship Building 🤝",
                        description:
                            "Connect with external developers and advocates from other companies",
                        id: "projects",
                        label: "2 weeks",
                        laneId: "3months",
                        tags: [
                            {
                                title: "Community",
                                bgcolor: "#F3B005",
                                color: "white",
                            },
                        ],
                    },
                ],
                currentPage: 1,
                disallowAddingCard: true,
                id: "3months",
                label: "3️⃣",
                style: {
                    width: 280,
                    backgroundColor: "#F0FFF0",
                    boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
                },
                title: "1-3 Months",
            },
            {
                cards: [
                    {
                        title: "Graduate with Masters 🎓",
                        description:
                            "Complete my Master's degree and graduate from UCLA",
                        id: "school",
                        label: "3 months",
                        laneId: "6months",
                        tags: [
                            {
                                title: "Career",
                                bgcolor: "#82B563",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Create Steady Content 📈",
                        description:
                            "Since I'll be more familiar with things, I'll be able to push out more content and on a regular basis",
                        id: "content",
                        label: "1 week",
                        laneId: "6months",
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
                        title: "Develop a Product 🤝",
                        description:
                            "Create a product that will address the community's needs, based on research & feedback",
                        id: "develop",
                        label: "1 month",
                        laneId: "6months",
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
                id: "6months",
                label: "6️⃣",
                style: {
                    width: 280,
                    backgroundColor: "#F0FFF0",
                    boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
                },
                title: "3-6 Months",
            },
            {
                cards: [
                    {
                        title: "Leadership 💪",
                        description:
                            "Become a leader in the community, and provide mentorship",
                        id: "school",
                        label: "1 months",
                        laneId: "1year",
                        tags: [
                            {
                                title: "Career",
                                bgcolor: "#82B563",
                                color: "white",
                            },
                        ],
                    },
                ],
                currentPage: 1,
                disallowAddingCard: true,
                id: "1year",
                label: "⭐",
                style: {
                    width: 280,
                    backgroundColor: "#F0FFF0",
                    boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
                },
                title: "1 year",
            },
            {
                cards: [
                    {
                        title: "Create this Website 🖥️",
                        description:
                            "Develop a website that showcases my DevRel skills and future goals",
                        id: "website",
                        label: "1 week",
                        laneId: "COMPLETED",
                        tags: [
                            {
                                title: "Coding",
                                bgcolor: "#083642",
                                color: "white",
                            },
                        ],
                    },
                    {
                        title: "Write a Blog about APIs ✍️",
                        description:
                            "Write a blog post to teach beginner developers about APIs",
                        id: "api",
                        label: "2 days",
                        laneId: "COMPLETED",
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
                ],
                currentPage: 1,
                id: "COMPLETED",
                label: "🎉",
                style: {
                    width: 280,
                    backgroundColor: "#F0FFF0",
                    boxShadow: "2px 2px 4px 0px rgba(0,0,0,0.75)",
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

                    <br />

                    <div className={styles.board}>
                        <Board
                            style={{
                                background: "#26B7C1",
                                width: "75%",
                                height: "100%",
                            }}
                            data={data}
                        />
                    </div>

                    <h2>More Details...</h2>

                    <p className={`${styles.description} ${styles.book}`}>
                        Within the first couple of months, I will learn:
                        <ul className={styles.listItem}>
                            <li>
                                What products our company offers to developers
                            </li>
                            <li>The key priorities & goals of the company</li>
                            <li>
                                The business impact of DevRel and how the
                                company feels about it
                            </li>
                            <li>
                                What the mononotization strategy is (how does
                                developer engagement lead to higher revenue)
                            </li>
                            <li>
                                What the developer culture is like and how they
                                influence the company
                            </li>
                            <li>
                                Where we are lacking and understand how to
                                improve
                            </li>
                            <li>
                                The competition/market, as well as other DevRel
                                teams, to make improvements
                            </li>
                            <li>
                                What is the company direction and where do
                                developers fit in
                            </li>
                            <li>
                                How we track developer conversion and engagement
                            </li>
                            <li>
                                How people from other departments see DevRel
                            </li>
                            <li>
                                The ins and outs of our product and how developers use it
                            </li>
                            <li>How the documentation platform works, so I can maintain it and add features</li>
                        </ul>
                    </p>

                    <Footer />
                </main>
            </div>
        );
    }
}
