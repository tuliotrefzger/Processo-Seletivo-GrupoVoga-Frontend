import Image from "next/image";
import Navbar from "../../../components/navbar";
import libraryImage from "../../../images/library.jpg";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { createTheme } from "@mui/material/styles";
import SuccessfullInvestmentModal from "../../../components/successfulInvestmenteModal";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#FF5F00",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
  },
});

export default function BookSellerLTDA() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "0px 4vh", margin: "2vh 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "95%",
              border: "1px solid gray",
              borderRadius: "0.3vh",
              backgroundColor: "#F5F5F5",
            }}
          >
            <h1 style={{ marginLeft: "3vh" }}>Book Seller LTDA</h1>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "0px",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{ height: "500px", width: "100%", position: "relative" }}
              >
                <Image alt="test" src={libraryImage} layout="fill" />
              </div>
              <p
                style={{
                  marginLeft: "3vh",
                  marginRight: "3vh",
                  fontSize: "15px",
                }}
              >
                Dolore anim qui aute duis cillum do ad. Deserunt minim ut
                laborum veniam duis esse eu. Est elit non aliquip anim enim ut
                cupidatat est. Deserunt et et eiusmod tempor incididunt. Magna
                eu ex id ut do esse ipsum laboris magna. Excepteur laborum minim
                anim quis ad sit. Culpa nulla reprehenderit labore nulla quis et
                ullamco ullamco aute sunt nulla velit qui. Qui sunt ipsum
                aliquip enim eu occaecat consectetur occaecat proident duis anim
                reprehenderit incididunt. Aute laboris in dolor excepteur quis
                qui incididunt esse in aute amet do ipsum. Proident incididunt
                duis sunt velit voluptate consectetur laboris qui in deserunt
                esse ipsum dolor. Sint nisi tempor amet velit eiusmod cillum
                adipisicing consectetur velit fugiat ea aliquip Lorem irure.
                Magna cupidatat pariatur non aliquip ullamco ipsum eu minim
                ullamco officia. Aute elit occaecat eiusmod cupidatat excepteur
                ad labore. Dolor velit officia nulla duis quis fugiat sunt.
                Eiusmod id mollit do culpa magna labore dolor laborum officia
                ullamco elit Lorem excepteur.
              </p>
              <h4 style={{ marginLeft: "3vh" }}>
                Reserve your investment by clicking the{" "}
                <span style={{ color: "#FF5F00" }}>shopping cart</span> right
                now!
              </h4>
              <div style={{ width: "100%", backgroundColor: "white" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon />
                    </IconButton>
                    <SuccessfullInvestmentModal />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
