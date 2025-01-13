import AnimatedText from "@/Components/AnimatedText";
import Layout from "@/Components/Layout";
import Head from "next/head";
import React from "react";

const profile = () => {
  return (
    <>
      <Head>
        <title>Chinweikwe || About me page</title>
        <meta name="Chinweike" content="about me" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-10">
          <AnimatedText text={"Passion fuels purpose"} />
          <div className="grid w-full grid-cols-8 gap-16">
            <div>
                <h2>Biography</h2>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default profile;
