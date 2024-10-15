"use client";

import React from "react";
import { MY_DATA } from "@/data/my-data";
import { AccordionContent, AccordionItem, AccordionTrigger, Accordion } from "../ui/accordion";

// components

const About = () => {
    return (
        <div className="p-2 border rounded-lg bg-white shadow-sm flex flex-col justify-center overflow-hidden">
            <div className="p-6 sm:p-10 md:p-20 bg-gray-100 rounded-lg flex flex-col gap-8">
                <div className="border-b">
                    <div className="font-bold uppercase">
                        <p className="text-2xl">About Me!</p>
                    </div>
                </div>

                {/* About detail */}
                <div className="flex text-gray-500 sm:flex-col-reverse">
                    <p>{MY_DATA.professionalSummary}</p>
                </div>

                {/* faq */}
                <Accordion defaultValue={MY_DATA.faq[0].question} type="single" collapsible className="w-full">
                    {MY_DATA.faq.map((faq, index) => {
                        return (
                            <AccordionItem key={index} value={faq.question} className="border-none">
                                <AccordionTrigger className="py-3">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-gray-500">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
};

export default About;
