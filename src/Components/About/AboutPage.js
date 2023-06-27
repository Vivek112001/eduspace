import React from 'react';
import './style.css';

const AboutPage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to EduSpace!</h1>
            </header>

            <main>
                <div>
                    <section>
                        <h2>About Us</h2>
                        <p>
                            At EduSpace, we are dedicated to providing you with valuable
                            information, resources, and services in online learning. Whether you are a passionate enthusiast, a curious learner,
                            or an industry professional, we have something for everyone.
                        </p>
                    </section>
                    <section>
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to empower and inspire our audience by delivering
                            high-quality content that educates, entertains, and enlightens. We
                            strive to be a trusted source of information and a platform that fosters
                            meaningful interactions, helping individuals achieve their goals and
                            expand their knowledge in online learning.
                        </p>
                    </section> 
                    <section>
                        <h2>What We Offer</h2>
                        <ul>
                            <li>
                                Comprehensive Articles and Guides: We curate and create in-depth
                                articles and guides that cover a wide range of topics within online learning. Our content is meticulously researched, ensuring
                                accuracy.
                            </li>
                        </ul>
                    </section>
                </div>                         
            </main>
            <footer>
                <p>&copy; 2023 EduSpace. All rights reserved.</p>
            </footer>
        </div>
    );
}; export default AboutPage;
