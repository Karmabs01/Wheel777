import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import di from "../../../public/emoj1.png";
import di2 from "../../../public/emoj2.png";
import di4 from "../../../public/emoj3.png";

import di3 from "../../../public/hero-01.png";

// import fwb from "../../images/fwb.png";

function AnotherBrands({
  newUrl,
  ipDataCode,
  currentLanguage,
  source,
  selectedCountry,
}) {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [otherData, setOtherData] = useState([]);
  const [visibleBrands, setVisibleBrands] = useState(8);

  const handleShowMore = () => {
    setVisibleBrands((prevVisibleBrands) => prevVisibleBrands + 8);
  };

  const apiOld = "https://bonusnumber1.com/api/brands/read.php";
  const apiNew = "https://bonusnumber1.com/api/brands/read2.php";
  const api1043 = "https://bonusnumber1.com/api/brands/read3.php";
  const api1044 = "https://bonusnumber1.com/api/brands/read4.php";

  function shuffleArray(array) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  useEffect(() => {
    const geo = selectedCountry.toUpperCase();

    const fetchData = async () => {
      try {
        let url;
        switch (source) {
          case "partner1039":
            url = apiNew; // Для partner1039
            break;
          case "partner1043":
            url = api1043; // Для partner1043
            break;
          case "partner1044":
            url = api1044; // Для partner1044
            break;
          default:
            url = apiOld; // Для всех остальных случаев
        }

        const res = await fetch(url);
        if (res.ok) {
          const responseData = await res.json();
          // const dataArray = Object.values(responseData);

          let filteredDataOther = [];

          if (geo) {
            filteredDataOther = responseData.brands.filter(
              (rowData) =>
                rowData.GEO === geo &&
                rowData["CurrentStatus"] === "Ongoing" &&
                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                rowData["Segment2"] === "Premium"
            );
          } else {
            filteredDataOther = responseData.brands.filter(
              (rowData) =>
                rowData.GEO === ipDataCode &&
                rowData["Current Status"] === "Ongoing" &&
                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                rowData["Segment2"] === "Premium"
            );
          }

          // Перемешиваем данные перед отображением
          setOtherData(shuffleArray(filteredDataOther));
          setLoading(false);

          // Если нет брендов, вызывать setSelectedCountry
          // if (filteredDataOther.length === 0) {
          //   setSelectedCountry("all");
          // }
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    if ((ipDataCode && currentLanguage) || (geo && currentLanguage)) {
      fetchData();
    }
  }, [ipDataCode, currentLanguage, selectedCountry, source]);

  // ...

  return (
    <section id="home" className="hero-section go-zoom-1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hero-content top-greadient">
              <h1 className="wow fadeInUp" data-wow-delay=".4s">
                {t("Top Offers,")}{" "}
                <span className="common-gre-color">{t("Unmatched Deals")}</span>{" "}
                {t("– All Here!")}
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".6s">
                {t(
                  "How are you feeling today? Let's explore what your mood can unlock for you!"
                )}{" "}
                <span>
                  {t("Click on emoji and cheer yourself up with best bonuses!")}
                </span>
              </p>
            </div>
            <div
              className="row mt-10 mb-50 wow fadeInUp nnm"
              data-wow-delay=".4s"
            >
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <div className="how-item">
                  {otherData.length > 0 ? (
                    otherData.slice(0, 1).map((rowData, index) => (
                      <div className="crdbtn" key={index}>
                        <p>{t("Funny Mode")}</p>
                        <a
                          target="_blank"
                          href={
                            rowData["GoBig"] + newUrl + "L_spintasctic_random"
                          }
                          className="how-item-thumb"
                        >
                          <span className="icon-gden- icon-gdenmagic-wand">
                            <img src={`.${di}`} alt={`.${di}`} />
                          </span>
                        </a>
                        <a
                          target="_blank"
                          href={
                            rowData["GoBig"] + newUrl + "L_spintasctic_random"
                          }
                          className="main-btn btn-hover mini-btn"
                        >
                          {t("Play")}
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="ti">{t("")}</p>
                  )}
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <div className="how-item">
                  {otherData.length > 0 ? (
                    otherData.slice(1, 2).map((rowData, index) => (
                      <div className="crdbtn" key={index}>
                        <p>{t("Happy Mode")}</p>
                        <a
                          target="_blank"
                          href={
                            rowData["GoBig"] + newUrl + "L_spintasctic_random"
                          }
                          className="how-item-thumb"
                        >
                          <span className="icon-gden- icon-gdenmagic-wand">
                            <img src={`.${di2}`} alt={`.${di2}`} />
                          </span>
                        </a>
                        <a
                          target="_blank"
                          href={
                            rowData["GoBig"] + newUrl + "L_spintasctic_random"
                          }
                          className="main-btn btn-hover mini-btn"
                        >
                          {t("Play")}
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="ti">{t("")}</p>
                  )}
                </div>
              </div>
              <div className="col-4 col-sm-4 col-md-4 col-lg-4">
                <div className="how-item-none">
                  {otherData.length > 0 ? (
                    otherData.slice(2, 3).map((rowData, index) => (
                      <div className="crdbtn" key={index}>
                        <p>{t("Love Mode")}</p>
                        <a
                          target="_blank"
                          href={
                            rowData["GoBig"] + newUrl + "L_spintasctic_random"
                          }
                          className="how-item-thumb"
                        >
                          <span className="icon-gden- icon-gdenmagic-wand">
                            <img src={`.${di4}`} alt={`.${di4}`} />
                          </span>
                        </a>
                        <a
                          target="_blank"
                          href={
                            rowData["GoBig"] + newUrl + "L_spintasctic_random"
                          }
                          className="main-btn btn-hover mini-btn"
                        >
                          {t("Play")}
                        </a>
                      </div>
                    ))
                  ) : (
                    <p className="ti">{t("")}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-40">
            <div className="hero-img wow fadeInRight" data-wow-delay=".5s">
              <img src={`.${di3}`} alt="gden" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AnotherBrands;
