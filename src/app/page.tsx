export default function Home() {
  return (
    <div>
      <div>
        <video
          autoPlay
          muted
          loop
          className="fixed w-screen h-screen top-0 right-0 object-cover"
        >
          <source src="videos\Timeline_1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
