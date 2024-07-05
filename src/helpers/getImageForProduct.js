import pg1 from "../images/productImages/pg1.png";
import pg2 from "../images/productImages/pg2.png";
import pg3 from "../images/productImages/pg3.png";
import pg4 from "../images/productImages/pg4.png";
import pg5 from "../images/productImages/pg5.png";
import pg6 from "../images/productImages/pg6.png";
import pg7 from "../images/productImages/pg7.png";
import pg8 from "../images/productImages/pg8.png";
import pg9 from "../images/productImages/pg9.png";
import pg10 from "../images/productImages/pg10.png";
import pg11 from "../images/productImages/pg11.png";
import pg12 from "../images/productImages/pg12.png";
import pg13 from "../images/productImages/pg13.png";
import pg14 from "../images/productImages/pg14.png";
import pg15 from "../images/productImages/pg15.png";
import pg16 from "../images/productImages/pg16.png";
import pg17 from "../images/productImages/pg17.png";
import pg18 from "../images/productImages/pg18.png";
import pg19 from "../images/productImages/pg19.png";
import pg20 from "../images/productImages/pg20.png";

// Helper function to get image based on product ID
export default function getImageForProduct(id) {
  switch (id) {
    case "1":
      return pg1;
    case "2":
      return pg2;
    case "3":
      return pg3;
    case "4":
      return pg4;
    case "5":
      return pg5;
    case "6":
      return pg6;
    case "7":
      return pg7;
    case "8":
      return pg8;
    case "9":
      return pg9;
    case "10":
      return pg10;
    case "11":
      return pg11;
    case "12":
      return pg12;
    case "13":
      return pg13;
    case "14":
      return pg14;
    case "15":
      return pg15;
    case "16":
      return pg16;
    case "17":
      return pg17;
    case "18":
      return pg18;
    case "19":
      return pg19;
    case "20":
      return pg20;
    default:
      return null;
  }
}
