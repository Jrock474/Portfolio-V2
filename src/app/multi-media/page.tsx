import Link from "next/link";
import PageTitle from "../components/PageTitle";

const MultiMedia = () => {
  return (
    <>
      <PageTitle pageTitle="Multi-Media"/>
      <div className="gallery-section">
        <div className="flex flex-col min-h-inherit items-center justify-center">
          <Link href="/animations">
            <div className="no-underline flex justify-center items-center text-center rounded-[2px] min-h-[250px] min-w-[250px] w-auto m-[20px] bg-[rgba(0,0,0,0.6)] border-[1px] border-groove">
              <p>Animations</p>
            </div>
          </Link>
          <Link href="/designs">
            <div className="no-underline flex justify-center items-center text-center rounded-[2px] min-h-[250px] min-w-[250px] w-auto m-[20px] bg-[rgba(0,0,0,0.6)] border-[1px] border-groove">
              <p>Designs</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MultiMedia;
