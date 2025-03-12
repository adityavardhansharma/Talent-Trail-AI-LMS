"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

function Upgrade() {
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState();

  useEffect(() => {
    user && GetUserDetail();
  }, [user]);

  const GetUserDetail = async () => {
    const result = await db
        .select()
        .from(USER_TABLE)
        .where(eq(USER_TABLE.email, user?.primaryEmailAddress?.emailAddress));

    setUserDetail(result[0]);
  };

  const OnCheckoutClick = async () => {
    const result = await axios.post("/api/payment/checkout", {
      priceId: process.env.NEXT_PUBLIC_STRIPE_PRICE_ID_MONTHLY,
    });

    console.log(result.data);
    window.open(result.data?.url);
  };

  const onPaymentManage = async () => {
    const result = await axios.post("/api/payment/manage-payment", {
      customerId: userDetail?.customerId,
    });

    console.log(result.data);
    window.open(result.data?.url);
  };

  return (
      <div className="upgrade-page">
        <div className="container">
          <h2 className="title">Plans</h2>
          <p className="subtitle">
            Update your plan to generate unlimited courses for your exam
          </p>

          <div className="plan-grid">
            <div className="plan-card">
              <div className="glow-overlay"></div>
              <div className="text-center">
                <h2 className="plan-title">Free</h2>
                <p className="price">
                  <strong className="amount">0$</strong>
                  <span className="period">/month</span>
                </p>
              </div>
              <ul className="features">
                <li className="feature-item">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-icon"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>5 Course Generate</span>
                </li>
                <li className="feature-item">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-icon"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>Limited Support</span>
                </li>
                <li className="feature-item">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-icon"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>Email support</span>
                </li>
                <li className="feature-item">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-icon"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>Help center access</span>
                </li>
              </ul>
              <div className="button-container">
                <Button
                    variant="ghost"
                    className="current-plan-btn"
                >
                  Current Plan
                </Button>
              </div>
            </div>

            <div className="plan-card">
              <div className="glow-overlay"></div>
              <div className="text-center">
                <h2 className="plan-title">Monthly</h2>
                <p className="price">
                  <strong className="amount">9.99$</strong>
                  <span className="period">/month</span>
                </p>
              </div>
              <ul className="features">
                <li className="feature-item">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-icon"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>Unlimited Course Generate</span>
                </li>
                <li className="feature-item">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-icon"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>Unlimited Flashcard, Quiz</span>
                </li>
                <li className="feature-item">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-icon"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>Email support</span>
                </li>
                <li className="feature-item">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="check-icon"
                  >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  <span>Help center access</span>
                </li>
              </ul>
              <div className="button-container">
                {userDetail?.isMember === false ? (
                    <Button
                        onClick={OnCheckoutClick}
                        className="action-btn"
                    >
                      Get Started
                    </Button>
                ) : (
                    <Button
                        onClick={onPaymentManage}
                        className="action-btn"
                    >
                      Manage Payment
                    </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Internal styles */}
        <style jsx>{`
          .upgrade-page {
            min-height: 100vh;
            background: linear-gradient(to bottom, #0a0a0a, #121212);
            color: #e0e0e0;
            padding: 1.5rem;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          .title {
            font-size: 1.875rem;
            font-weight: 500;
            background: linear-gradient(to right, #4facfe, #00f2fe);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            margin-bottom: 0.5rem;
          }
          .subtitle {
            color: #22d3ee;
            font-size: 0.875rem;
            margin-bottom: 2rem;
          }
          .plan-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          @media (min-width: 640px) {
            .plan-grid {
              grid-template-columns: repeat(2, 1fr);
              align-items: center;
              gap: 2rem;
            }
          }
          .plan-card {
            background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
            position: relative;
            border-radius: 0.75rem;
            padding: 2rem 1.5rem; /* Increased vertical padding for taller cards */
            min-height: 400px; /* Ensure taller rectangular shape */
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            overflow: hidden;
          }
          .glow-overlay {
            position: absolute;
            top: 0;
            right: 0;
            width: 8rem;
            height: 8rem;
            background: rgba(34, 211, 238, 0.05);
            border-radius: 50%;
            mix-blend-mode: overlay;
            filter: blur(40px);
            transform: translate(50%, -50%);
          }
          .plan-title {
            font-size: 1.125rem;
            font-weight: 500;
            background: linear-gradient(to right, #4facfe, #00f2fe);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
          .price {
            margin-top: 0.5rem;
          }
          .amount {
            font-size: 1.875rem;
            font-weight: 700;
            color: #e0e0e0;
          }
          .period {
            font-size: 0.875rem;
            font-weight: 500;
            color: #9ca3af;
            margin-left: 0.25rem;
          }
          .features {
            margin-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            flex-grow: 1; /* Allow features to grow and push button down */
          }
          .feature-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }
          .check-icon {
            width: 1.25rem;
            height: 1.25rem;
            color: #22d3ee;
          }
          .feature-item span {
            color: #9ca3af;
          }
          .button-container {
            display: flex;
            justify-content: center; /* Center the button horizontally */
            margin-top: 1.5rem;
          }
          .current-plan-btn {
            color: #22d3ee;
            border: 1px solid #22d3ee;
            border-radius: 0.5rem;
            padding: 0.625rem 1.25rem;
            background: none;
            transition: background 0.3s ease;
            font-size: 1rem; /* Ensure text is visible */
            color: #fff; /* High contrast for visibility */
          }
          .current-plan-btn:hover {
            background: rgba(34, 211, 238, 0.1);
          }
          .action-btn {
            background: #22d3ee;
            color: #fff; /* High contrast for visibility */
            font-weight: 600;
            padding: 0.75rem 1.5rem; /* Increased padding for visibility */
            border-radius: 0.5rem;
            box-shadow: 0 4px 15px rgba(34, 211, 238, 0.4);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            border: none;
            font-size: 1rem; /* Ensure text is visible */
            text-transform: none; /* Prevent text transformation issues */
          }
          .action-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: 0.5s;
          }
          .action-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(34, 211, 238, 0.6);
            background: #00b0ff;
          }
          .action-btn:hover::before {
            left: 100%;
          }
        `}</style>
      </div>
  );
}

export default Upgrade;