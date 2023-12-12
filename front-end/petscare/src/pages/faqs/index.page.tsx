import React from "react";
import LayoutAuth from "../../components/layouts/LayoutAuth";
import AccordionFaqs from "../../components/faqs/AccordionFaqs";
import { FaqsType } from "../../components/faqs/faqsData";
import { NextPage } from "next";
import Head from "next/head";
import BodySingle from "../../components/faqs/body-single";

interface Props {
  data: FaqsType[];
}

const Faqs: NextPage<Props> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Faqs</title>
        <meta name="description" content="preguntas frecuentes" />
      </Head>
      <BodySingle title="preguntas frecuentes">
        {data.map((faqs) => {
          return (
            <AccordionFaqs
              key={faqs?.id}
              id={faqs?.id}
              question={faqs?.question}
              answer={faqs?.answer}
            />
          );
        })}
      </BodySingle>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://petscare-clinica-vet.vercel.app/faqs");
  const data: FaqsType[] = await res.json();
  return {
    props: {
      data,
    },
  };
};

(Faqs as any).Layout = LayoutAuth;

export default Faqs;