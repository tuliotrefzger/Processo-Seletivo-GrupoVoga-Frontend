import Image from "next/image";
import Navbar from "../../../components/navbar";
import fruitsImage from "../../../images/fruits.jpg";
import booksImage from "../../../images/books.jpg";

export default function BananaRepublicInc() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "0px 4vh" }}>
        <h1 style={{ textAlign: "center" }}>Banana Republic Inc.</h1>
        <div
          style={{ display: "flex", justifyContent: "flex-start", gap: "20px" }}
        >
          <div
            style={{
              height: "70vh",
              width: "50vw",
              position: "relative",
              borderRadius: "5vh",
            }}
          >
            <Image
              alt="test"
              src={fruitsImage}
              layout="fill"
              style={{ borderRadius: "2vh" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
