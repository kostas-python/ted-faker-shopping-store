export default function Example123() {
    return (
      <div className="container mx-auto">
        <div className="w-full aspect-w-16 aspect-h-9">
          <iframe
            className="w-full aspect-video md:aspect-aspect-w-16 aspect-h-9"
            src="https://www.youtube.com/embed/zgovnOsxnR4?autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  }
  