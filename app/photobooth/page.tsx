'use client';

import { useRouter } from 'next/navigation';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ImageShowcaseSection } from '@/components/ImageShowcaseSection';
import { BentoCard } from '@/components/ui/bento-grid';
import { AnimatedList } from '@/components/ui/animated-list';
import { ProcessNotification } from '@/components/process-notification';
import { ShimmerButton } from '@/components/ui/shimmer-button';
import { BsCircleFill } from 'react-icons/bs';
import { PersonIcon } from '@radix-ui/react-icons';

export default function PhotoboothPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <Header />

      {/* Main content */}
      <main>
        <HeroSection
          showBadge={false}
          heading="AI product photos that help you sell more"
          subheading="We blend human direction with AI models to craft studio-level stills that drive conversion"
          splitSubheading={false}
        />

        <ImageShowcaseSection />

        {/* Book a Demo Section */}
        <section className="px-6 pb-8 flex justify-center">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6 text-white"
            background="rgb(0, 0, 0)"
            shimmerColor="rgba(255, 255, 255, 0.5)"
            onClick={() => router.push('/book?service=images')}
          >
            Start your first AI shoot
          </ShimmerButton>
        </section>

        {/* How It Works Section */}
        <section className="pt-4 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-lg md:text-xl font-mono text-gray-900 dark:text-gray-100">
                HOW IT WORKS
              </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start justify-center">
              {/* Left Column - Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <BentoCard
                  name="Brief & Planning"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <div className="text-gray-900 dark:text-gray-100 font-semibold text-md">1</div>}
                  description="Share your products and vision. We plan the shoot style, angles, and compositions."
                />
                <BentoCard
                  name="Concept Approval"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <div className="text-gray-900 dark:text-gray-100 font-semibold text-md">2</div>}
                  description="Review mood boards and style references. Approve the creative direction before we shoot."
                />
                <BentoCard
                  name="AI Production"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <div className="text-gray-900 dark:text-gray-100 font-semibold text-md">3</div>}
                  description="Our AI models generate studio-quality product photos with professional lighting and composition."
                />
                <BentoCard
                  name="Refinement"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <div className="text-gray-900 dark:text-gray-100 font-semibold text-md">4</div>}
                  description="We refine images based on your feedback until every detail is perfect."
                />
                <BentoCard
                  name="Claybird Platform"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={() => <BsCircleFill className="w-4 h-4" />}
                  description="Access all your product photos, request edits, and download high-res files in one place."
                />
                <BentoCard
                  name="Dedicated Expert"
                  className="col-span-1"
                  background={<div className="absolute inset-0" />}
                  Icon={PersonIcon}
                  description="A dedicated creative director guides your project via Slack, email, and phone."
                />
              </div>

              {/* Right Column - Animated Notifications */}
              <div className="flex justify-center">
                <AnimatedList delay={2000}>
                  <ProcessNotification
                    key="brief"
                    step="Creative Brief Received"
                    description="Understanding your product and target aesthetic"
                    status="completed"
                  />
                  <ProcessNotification
                    key="concepts"
                    step="Concepts Ready for Review"
                    description="Mood boards and style references prepared"
                    status="completed"
                  />
                  <ProcessNotification
                    key="approval"
                    step="Direction Approved"
                    description="Your team approves the creative direction"
                    status="completed"
                  />
                  <ProcessNotification
                    key="draft"
                    step="First Draft Ready"
                    description="Studio-quality product photos ready for review"
                    status="completed"
                  />
                  <ProcessNotification
                    key="revision"
                    step="Refinements"
                    description="Applying your feedback to perfect the images"
                    status="pending"
                  />
                  <ProcessNotification
                    key="payment"
                    step="Payment - $499"
                    description="Payment for completed product photography"
                    status="pending"
                  />
                </AnimatedList>
              </div>
            </div>
          </div>
        </section>

        {/* Book a Demo Section */}
        <section className="px-6 pb-16 flex justify-center">
          <ShimmerButton
            className="text-xl font-semibold px-12 py-6 text-white"
            background="rgb(0, 0, 0)"
            shimmerColor="rgba(255, 255, 255, 0.5)"
            onClick={() => router.push('/book?service=images')}
          >
            Start your first AI shoot
          </ShimmerButton>
        </section>

        {/* Footer - White Card */}
        <footer className="px-6 pb-12">
          <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 p-12">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              {/* Product Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Product</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Pricing</a></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Features</a></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Blog</a></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Help & guides</a></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Support</a></li>
                </ul>
              </div>

              {/* Community Column */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-4">Community</h3>
                <ul className="space-y-3">
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">Discord</a></li>
                  <li><a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">X / Twitter</a></li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 Claybird Inc.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
