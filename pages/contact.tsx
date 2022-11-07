import React from "react";
import Head from "next/head";
import Header from "../components/Header";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="bg-scroll bg-bg bg-cover h-screen bg-no-repeat flex justify-center">
      <Head>
        <title>AOW Films</title>
      </Head>
      <div>
        <Header />
      </div>
      <div>
        <h2>Contact</h2>
      </div>
      <div>
        <h3>Andrew Wolinsky</h3>

        <p>Email: awolinsky@gmail.com</p>

        <p>Telephone: +1 (416) 525 FILM (3456) </p>

        <p>Instagram: https://www.instagram.com/awolie01/</p>

        <p>Facebook: https://www.facebook.com/awolinsky</p>

        <p>LinkedIn: https://www.linkedin.com/in/andrewwolinsky/</p>

        <p>Vimeo: https://vimeo.com/user64502745</p>
      </div>
    </div>
  );
}

export default Contact;
