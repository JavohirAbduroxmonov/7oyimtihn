import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Products.module.scss";

import aylana from "../../../public/Frame.png";
import yulduz from "../../../public/yulduz.svg";
import bus from "../../../public/bus.svg";
import sumka from "../../../public/somka.svg";
import img1_font from "../../../public/font1.svg";
import img2_font from "../../../public/font2.svg";
import img3_font from "../../../public/font3.svg";
import img4_font from "../../../public/font4.svg";
import img5_font from "../../../public/font5.svg";
import { FaRegHeart } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const baseURL = import.meta.env.VITE_BASE_URL;

const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  useEffect(() => {
    async function fetchProductById() {
      try {
        const response = await fetch(`${baseURL}/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Mahsulotni olishda xatolik:", error);
      }
    }

    fetchProductById();
  }, [productId]);

  return (
    <div className={styles.container}>
      <div className={styles.product}>
        {product && (
          <>
            <p className={styles.sarlavha}>
              Mahsulotlar / O'yin quloqliklari & Audio / {product.name}
            </p>
            <div>
              <img
                src={product.image_url}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.fontimg}>
                <img
                  className={styles.fontstili}
                  src={img1_font}
                  alt="Font 1"
                />
                <img
                  className={styles.fontstili}
                  src={img2_font}
                  alt="Font 2"
                />
                <img
                  className={styles.fontstili}
                  src={img3_font}
                  alt="Font 3"
                />
                <img
                  className={styles.fontstili}
                  src={img4_font}
                  alt="Font 4"
                />
                <img
                  className={styles.fontstili}
                  src={img5_font}
                  alt="Font 5"
                />
              </div>
              <div className={styles.productDetails}>
                {/* Qo'shimcha mahsulot tafsilotlari kerak bo'lsa, shu yerda qo'shing */}
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        <h2 className={styles.productName}>ASTRO A50 X</h2>
        <p className={styles.productText}>
          LIGHTSPEED Wireless Gaming Headset + Base Station
        </p>
        <img className={styles.yulduz} src={yulduz} alt="Yulduz" />
        <span className={styles.span}></span>
        <p className={styles.money}>$399.00 yoki 99.99/oyiga</p>
        <p className={styles.text2}>
          6 oy maxsus moliyalashtirish bilan tavsiya etilgan to'lovlar
        </p>
        <span className={styles.span2}></span>
        <h2 className={styles.title}>Rang tanlang</h2>
        <div className={styles.Productaylana}>
          <div className={styles.aylana}></div>
          <div className={styles.aylana2}></div>
        </div>
        <span className={styles.span3}></span>
        <div className={styles.Only}>
          <div className={styles.aylana3}>
            <img src={aylana} alt="Aylana" />
          </div>
          <p className={styles.text3}>
            Faqat <span className={styles.span4}>16 ta</span> qolgan! Qochirib
            qo'ymang
          </p>
        </div>
        <div className={styles.div_like}>
          <button className={styles.button}>Savatga qo'shish</button>
          <div onClick={toggleLike} className={styles.yurak_like}>
            {liked ? <FcLike /> : <FaRegHeart />}
          </div>
        </div>
        <div className={styles.div4}>
          <div className={styles.text4}>
            <div>
              <img className={styles.bus} src={bus} alt="Bus" />
            </div>
            <div>
              <p className={styles.ptext}>Bepul yetkazib berish</p>
              <p className={styles.ptext2}>
                Yetkazib berish imkoniyatini bilish uchun pochta kodingizni
                kiriting
              </p>
            </div>
          </div>
          <div className={styles.text5}>
            <div>
              <img className={styles.somka} src={sumka} alt="Sumka" />
            </div>
            <div>
              <p className={styles.ptext3}>Qaytarib berish</p>
              <p className={styles.ptext4}>
                Bepul yetkazib berish 30 kunlik qaytarish
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
