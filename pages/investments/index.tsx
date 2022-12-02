import InvestmentCard from "../../components/investmentCard";
import Navbar from "../../components/navbar";
import styles from "../../styles/investments.module.scss";
import Image from "next/image";
import fruitsImage from "../../images/fruits.jpg";
import booksImage from "../../images/books.jpg";

export default function investments() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "0px 4vh" }}>
        <h1 style={{ textAlign: "center" }}>Our investments</h1>
        <hr style={{ width: "100%" }} />
        <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <div>
            <InvestmentCard
              letter="B"
              image={fruitsImage}
              company="Banana Republic Inc."
              date="January 1, 2023"
              url="/investments/banana-republic-inc"
              mainText="Pariatur excepteur reprehenderit irure magna eiusmod anim ea dolore sunt aliqua ipsum. Sint amet in ea laborum consectetur. Ad esse aliqua esse eu nulla ad non elit cillum. Eu reprehenderit minim nostrud magna sunt sint fugiat qui et aliquip ullamco fugiat."
              bgcolor="red"
            />
          </div>
          <div>
            <InvestmentCard
              letter="B"
              image={booksImage}
              company="Book Seller LTDA."
              date="January 1, 2023"
              url="/investments/book-seller-ltda"
              mainText="Pariatur irure velit commodo fugiat esse ex qui deserunt consequat sint. Sint velit aute nisi sit nostrud esse officia nulla aliqua mollit commodo non id veniam. Magna tempor eu ex aliquip sit nisi elit. Consectetur ipsum occaecat ea reprehenderit anim magna cillum exercitation sit minim ex."
              bgcolor="lightgreen"
            />
          </div>
        </div>
      </div>
    </>
  );
}
