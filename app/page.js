"use client";

import Image from "next/image";
import DashboardHeader from "./dashboard/_components/DashboardHeader";
import PageTransition from "./_context/PageTransition";
import { motion } from "framer-motion";

export default function Home() {
  return (
      <PageTransition>
        <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#121212] overflow-hidden">
          {/* Subtle metallic accents */}
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full mix-blend-overlay filter blur-[80px]"></div>
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-teal-400/5 rounded-full mix-blend-overlay filter blur-[80px]"></div>
          </div>

          <DashboardHeader />

          {/* HERO SECTION */}
          <section className="relative py-16 md:py-28">
            <div className="container mx-auto px-4 relative z-10">
              <div className="metallic-card max-w-3xl mx-auto text-center p-10 rounded-xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 relative z-10"
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                    <span className="text-white">AI-Powered</span>{" "}
                    <span className="text-gradient">
                    Exam Prep
                  </span>
                  </h1>
                  <p className="text-xl text-cyan-100/80">
                    Your AI companion for effortless study materials
                  </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center relative z-10"
                >
                  <a href="/dashboard" className="cta-button flex items-center gap-2">
                    <svg
                        viewBox="0 0 24 24"
                        height="24"
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none">
                        <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"></path>
                        <path
                            d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216zM11 6.094l-.806 2.36a6 6 0 0 1-3.49 3.649l-.25.091l-2.36.806l2.36.806a6 6 0 0 1 3.649 3.49l.091.25l.806 2.36l.806-2.36a6 6 0 0 1 3.49-3.649l.25-.09l2.36-.807l-2.36-.806a6 6 0 0 1-3.649-3.49l-.09-.25zM19 2a1 1 0 0 1 .898.56l.048.117l.35 1.026l1.027.35a1 1 0 0 1 .118 1.845l-.118.048l-1.026.35l-.35 1.027a1 1 0 0 1-1.845.117l-.048-.117l-.35-1.026l-1.027-.35a1 1 0 0 1-.118-1.845l.118-.048l1.026-.35l.35-1.027A1 1 0 0 1 19 2"
                            fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    Engage with Trail Bot AI
                  </a>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FEATURES SECTION */}
          <section className="py-16 relative">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-left text-white mb-16 ml-4 md:ml-12">
                Powerful Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-items-center">
                {/* Feature Card 1 - Notes Generator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="feature-container"
                >
                  <div className="outer">
                    <div className="dot"></div>
                    <div className="card">
                      <div className="ray"></div>
                      <div className="text">Notes</div>
                      <div className="subtitle">Generator</div>
                      <p className="feature-desc">Smart summaries from your study materials</p>
                      <div className="line topl"></div>
                      <div className="line leftl"></div>
                      <div className="line bottoml"></div>
                      <div className="line rightl"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Feature Card 2 - Quiz Generator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="feature-container"
                >
                  <div className="outer">
                    <div className="dot"></div>
                    <div className="card">
                      <div className="ray"></div>
                      <div className="text">Quiz</div>
                      <div className="subtitle">Generator</div>
                      <p className="feature-desc">Interactive quizzes to test your knowledge</p>
                      <div className="line topl"></div>
                      <div className="line leftl"></div>
                      <div className="line bottoml"></div>
                      <div className="line rightl"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Feature Card 3 - Flashcard Generator */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="feature-container"
                >
                  <div className="outer">
                    <div className="dot"></div>
                    <div className="card">
                      <div className="ray"></div>
                      <div className="text">Flash</div>
                      <div className="subtitle">Cards</div>
                      <p className="feature-desc">Quick flashcards for efficient revision</p>
                      <div className="line topl"></div>
                      <div className="line leftl"></div>
                      <div className="line bottoml"></div>
                      <div className="line rightl"></div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FOOTER SECTION */}
          <footer className="py-8 border-t border-gray-800/30">
            <div className="container mx-auto px-4">
              <div className="text-center text-gray-500 text-sm">
                © 2023 Trail Bot AI. All rights reserved.
              </div>
            </div>
          </footer>
        </div>

        <style jsx>{`
          /* Metallic Hero Card */
          .metallic-card {
            background: linear-gradient(145deg, #1a1a1a, #0d0d0d);
            border: 1px solid rgba(255, 255, 255, 0.1);
            box-shadow:
                0 10px 30px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
            position: relative;
            overflow: hidden;
          }

          .metallic-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.05), transparent);
            pointer-events: none;
          }

          .text-gradient {
            background: linear-gradient(to right, #4facfe, #00f2fe);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          /* CTA Button */
          .cta-button {
            background: linear-gradient(45deg, #4facfe, #00f2fe);
            color: #000;
            font-weight: 600;
            padding: 12px 24px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(79, 172, 254, 0.4);
            transition: all 0.3s ease;
            text-decoration: none;
            position: relative;
            overflow: hidden;
          }

          .cta-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: 0.5s;
          }

          .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(79, 172, 254, 0.6);
          }

          .cta-button:hover::before {
            left: 100%;
          }

          /* Feature Card Styles - Enhanced */
          .feature-container {
            width: 100%;
            display: flex;
            justify-content: center;
          }

          .outer {
            width: 300px;
            height: 250px;
            border-radius: 10px;
            padding: 1px;
            background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
            position: relative;
            box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
          }

          .dot {
            width: 5px;
            aspect-ratio: 1;
            position: absolute;
            background-color: #4facfe;
            box-shadow: 0 0 10px #4facfe;
            border-radius: 100px;
            z-index: 2;
            right: 10%;
            top: 10%;
            animation: moveDot 6s linear infinite;
          }

          @keyframes moveDot {
            0%,
            100% {
              top: 10%;
              right: 10%;
            }
            25% {
              top: 10%;
              right: calc(100% - 35px);
            }
            50% {
              top: calc(100% - 30px);
              right: calc(100% - 35px);
            }
            75% {
              top: calc(100% - 30px);
              right: 10%;
            }
          }

          .card {
            z-index: 1;
            width: 100%;
            height: 100%;
            border-radius: 9px;
            border: solid 1px #202222;
            background-size: 20px 20px;
            background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            flex-direction: column;
            color: #fff;
          }

          .ray {
            width: 220px;
            height: 45px;
            border-radius: 100px;
            position: absolute;
            background-color: #4facfe;
            opacity: 0.2;
            box-shadow: 0 0 50px #4facfe;
            filter: blur(10px);
            transform-origin: 10%;
            top: 0%;
            left: 0;
            transform: rotate(40deg);
          }

          .card .text {
            font-weight: bolder;
            font-size: 2.5rem;
            background: linear-gradient(45deg, #000000 4%, #fff, #000);
            background-clip: text;
            color: transparent;
            margin-bottom: 0.25rem;
          }

          .subtitle {
            color: #4facfe;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
          }

          .feature-desc {
            font-size: 0.85rem;
            color: #e0e0e0;
            max-width: 80%;
            text-align: center;
            margin-top: 0.5rem;
          }

          .line {
            width: 100%;
            height: 1px;
            position: absolute;
            background-color: #2c2c2c;
          }

          .topl {
            top: 10%;
            background: linear-gradient(90deg, #4facfe 10%, #1d1f1f 70%);
          }

          .bottoml {
            bottom: 10%;
          }

          .leftl {
            left: 10%;
            width: 1px;
            height: 100%;
            background: linear-gradient(180deg, #4facfe 10%, #222424 70%);
          }

          .rightl {
            right: 10%;
            width: 1px;
            height: 100%;
          }

          /* Mobile responsiveness */
          @media (max-width: 768px) {
            .outer {
              width: 280px;
              height: 230px;
            }

            .card .text {
              font-size: 2rem;
            }
          }
        `}</style>
      </PageTransition>
  );
}
