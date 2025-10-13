export default function DemoVideo() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tjBOwU3I27g"
              title="Claybird Agent Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
