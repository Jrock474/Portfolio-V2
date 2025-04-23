import Link from "next/link";

const MultiMedia = () => {
  return (
    <>
      <h1>MultiMedia</h1>
      <div className="gallery-section">
        <div className="flex flex-col min-h-inherit items-center justify-center">
          <Link href="/animations">
            <div className="about-nav">
              <div className="no-underline flex justify-center items-center text-center rounded-[2px] min-h-[250px] min-w-[250px] w-auto m-[20px] bg-[rgba(0,0,0,0.6)] border-[1px] border-groove">
                <p>Animations</p>
              </div>
            </div>
          </Link>
          <div className="main-nav">
            <Link href="/designs">
              <div className="no-underline flex justify-center items-center text-center rounded-[2px] min-h-[250px] min-w-[250px] w-auto m-[20px] bg-[rgba(0,0,0,0.6)] border-[1px] border-groove">
                <p>Designs</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiMedia;
