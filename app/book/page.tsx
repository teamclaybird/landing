'use client';

import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
import { LightRays } from '@/components/ui/light-rays';

const questions = [
  { id: 'name', question: "What's your name?", placeholder: "Your name", inputType: 'text' },
  { id: 'company', question: "What's your company?", placeholder: "Company name", inputType: 'text' },
  { id: 'email', question: "What's your email address?", placeholder: "you@company.com", inputType: 'email' },
  { id: 'runsAds', question: "Do you currently run video ads?", inputType: 'yesno' },
  { id: 'investment', question: "Are you prepared to invest a minimum of $4k into video ads for your company?", inputType: 'yesno' },
];

export default function BookPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [showRejection, setShowRejection] = useState(false);

  const currentQuestion = questions[currentStep];
  const isLastQuestion = currentStep === questions.length - 1;

  const handleAnswer = (answer: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    // Check if they said "no" to the investment question
    if (currentQuestion.id === 'investment' && answer.toLowerCase() === 'no') {
      setShowRejection(true);
      // You can send to waitlist API here with their email
      console.log('Added to waitlist:', newAnswers);
      return;
    }

    if (isLastQuestion) {
      // Handle final submission - they said yes to investment
      console.log('Qualified lead:', newAnswers);
      // You can send to API here to save the lead data
      // Redirect to calendar booking
      window.location.href = 'https://calendar.app.google/WnAhPmPW456bKBJ89';
    } else {
      setCurrentStep(currentStep + 1);
      setCurrentAnswer('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentAnswer.trim()) return;
    handleAnswer(currentAnswer);
  };

  if (showRejection) {
    return (
      <div className="min-h-screen">
        {/* Header */}
        {/* <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
          <div className="max-w-[1400px] mx-auto px-6 py-4">
            <Link href="/" className="flex items-center gap-1">
              <Image src="/logo.svg" alt="Claybird logo" width={24} height={24} className="dark:invert" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cla<span className="italic">y</span><span className="italic">b</span>ird</span>
            </Link>
          </div>
        </header> */}

        <div className="min-h-screen flex items-center justify-center px-6">
          <LightRays count={10} color="rgba(160, 210, 255, 0.3)" blur={40} speed={16} length="60vh" />

          <div className="relative z-10 w-full max-w-2xl text-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              We&apos;re sorry, but we&apos;re not able to accommodate your budget at this time
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              But you might be interested in tools that we release in the future.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              We&apos;ve added you to our waitlist.
            </p>

            <button
              onClick={() => {
                setShowRejection(false);
                setCurrentAnswer('');
              }}
              className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      {/* <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-1">
            <Image src="/logo.svg" alt="Claybird logo" width={24} height={24} className="dark:invert" />
            <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Cla<span className="italic">y</span><span className="italic">b</span>ird</span>
          </Link>
        </div>
      </header> */}

      <div className="min-h-screen flex items-center justify-center px-6">
        <LightRays count={10} color="rgba(160, 210, 255, 0.3)" blur={40} speed={16} length="60vh" />

        <div className="relative z-10 w-full max-w-2xl">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              {currentQuestion.question}
            </h1>

            {currentQuestion.inputType === 'yesno' ? (
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => handleAnswer('Yes')}
                  className="px-8 py-4 text-lg font-medium rounded-lg border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
                >
                  Yes
                </button>
                <button
                  onClick={() => handleAnswer('No')}
                  className="px-8 py-4 text-lg font-medium rounded-lg border-2 border-gray-900 dark:border-gray-100 text-gray-900 dark:text-gray-100 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
                >
                  No
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-8">
                  <input
                    type={currentQuestion.inputType || 'text'}
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    placeholder={currentQuestion.placeholder}
                    autoFocus
                    className="w-full text-xl md:text-2xl bg-transparent border-none outline-none text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 font-light"
                  />

                  <div className="h-px bg-gray-300 dark:bg-gray-700 mt-2"></div>
                </div>

                <div className="flex items-center gap-4">
                  {currentStep > 0 && (
                    <button
                      type="button"
                      onClick={() => {
                        setCurrentStep(currentStep - 1);
                        setCurrentAnswer(answers[questions[currentStep - 1].id] || '');
                      }}
                      className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
                    >
                      Back
                    </button>
                  )}

                  <button
                    type="submit"
                    disabled={!currentAnswer.trim()}
                    className="text-sm text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Next →
                  </button>
                </div>
              </form>
            )}
          </div>

          <div className="mt-8 flex gap-2">
            {questions.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  index <= currentStep ? 'bg-gray-900 dark:bg-gray-100' : 'bg-gray-200 dark:bg-gray-800'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
