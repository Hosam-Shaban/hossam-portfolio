"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Linkedin, Mail, Phone, FileDown, Globe } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Hossam Shaban</h1>
          <p className="text-lg text-gray-600 mt-2">
            Computer & Electronics Engineer | Power Electronics | Embedded Systems
          </p>
        </motion.div>

        {/* About Me */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Dedicated Computer & Electronics Engineer with hands-on experience in power electronics,
              embedded systems, product testing, and digital content creation. Skilled in catalog design,
              technical documentation, and enhancing productivity using AI tools. Proficient in programming
              (C, Python, Java, Verilog, Web Development) and simulation using MATLAB Simulink.
            </p>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">💼 Work Experience</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-700">Electronics & Product Engineer</h3>
                <p className="text-gray-500 text-sm">PE Module – Cairo, Egypt | 2023 – Present</p>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>Designed and prepared product catalogs, datasheets, and social media content.</li>
                  <li>Developed and maintained company website using Zoho Commerce.</li>
                  <li>Performed product testing, bug tracking, and implemented improvements.</li>
                  <li>Programmed 3-phase inverter, DC-DC buck & boost converters with MATLAB Simulink & Texas Launchpad 28379D.</li>
                  <li>Proposed and implemented smart solutions to enhance productivity.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">⚡ Power Electronics</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>3-Phase Inverter using MATLAB Simulink & Texas Launchpad 28379D</li>
                <li>DC-DC Buck & Boost Converters – simulation & implementation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">🖥️ Embedded Systems</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Programming with C, Python, Java, Verilog</li>
                <li>FPGA-based designs for digital logic control</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">🎨 Digital Design</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Product catalogs & datasheets using Adobe InDesign</li>
                <li>Branding & social media graphics (Illustrator, Photoshop)</li>
                <li>Promo videos using Premiere Pro & After Effects</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">🌐 Web Development</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Website development with Zoho Commerce</li>
                <li>Online catalog integration & optimization</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">🛠️ Skills</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
              <li>MATLAB & Simulink</li>
              <li>C, Python, Java, Verilog</li>
              <li>FPGA & Microcontroller Programming</li>
              <li>Zoho Commerce Development</li>
              <li>Adobe Creative Suite (Illustrator, InDesign, Photoshop, Premiere Pro)</li>
              <li>AI Tools (ChatGPT, Notion, ERP systems)</li>
              <li>SEO Basics & Digital Marketing</li>
              <li>Testing & Debugging Electronics</li>
            </ul>
          </CardContent>
        </Card>

        {/* Portfolio Gallery */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">📸 Portfolio Gallery</h2>
            <p className="text-gray-600 mb-4">A collection of sample works including product designs, catalogs, and video previews.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-200 h-40 rounded-xl flex items-center justify-center text-gray-500">Catalog Design</div>
              <div className="bg-gray-200 h-40 rounded-xl flex items-center justify-center text-gray-500">Product Graphics</div>
              <div className="bg-gray-200 h-40 rounded-xl flex items-center justify-center text-gray-500">Promo Video</div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">🎓 Certifications & Training</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-700">PMP Preparation</h4>
                <p className="text-gray-500 text-sm">Project management fundamentals & planning</p>
              </div>
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-700">Embedded Systems Training</h4>
                <p className="text-gray-500 text-sm">Hands-on microcontrollers, MATLAB & Simulink</p>
              </div>
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-700">Adobe Creative Suite</h4>
                <p className="text-gray-500 text-sm">Illustrator, InDesign, Photoshop, Premiere Pro</p>
              </div>
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <h4 className="font-semibold text-gray-700">AI Productivity Tools</h4>
                <p className="text-gray-500 text-sm">ChatGPT, Notion, ERP integrations</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Languages */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">🌍 Languages</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
              <li>Arabic – Native</li>
              <li>English – Professional</li>
            </ul>
          </CardContent>
        </Card>

        {/* Hobbies */}
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">🎯 Hobbies & Interests</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-600">
              <li>Innovating smart electronics solutions</li>
              <li>Design & multimedia editing</li>
              <li>Exploring renewable energy technologies</li>
              <li>Continuous learning & personal development</li>
            </ul>
          </CardContent>
        </Card>

        {/* Downloads */}
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">📂 Downloads</h2>
            <div className="flex flex-col md:flex-row justify-center gap-4 mt-4">
              <Button variant="default" asChild>
                <a href="/files/Hossam_Shaban_CV_EN.pdf" download><FileDown className="mr-2 h-4 w-4" /> CV (English)</a>
              </Button>
              <Button variant="default" asChild>
                <a href="/files/Hossam_Shaban_CV_AR.pdf" download><FileDown className="mr-2 h-4 w-4" /> CV (Arabic)</a>
              </Button>
              <Button variant="default" asChild>
                <a href="/files/Hossam_Shaban_Portfolio.pdf" download><FileDown className="mr-2 h-4 w-4" /> Portfolio (PDF)</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Contact */}
        <Card className="shadow-lg">
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-2xl font-semibold text-gray-800">📬 Contact</h2>
            <p className="text-gray-600">Cairo, Egypt</p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button variant="outline" asChild>
                <a href="mailto:hossamshaban08@gmail.com"><Mail className="mr-2 h-4 w-4" /> Email</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+201004997569"><Phone className="mr-2 h-4 w-4" /> Call</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.linkedin.com/in/hossam-shaban-a5005115a" target="_blank" rel="noopener noreferrer"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://hossam-portfolio.com" target="_blank" rel="noopener noreferrer"><Globe className="mr-2 h-4 w-4" /> Portfolio Website</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
