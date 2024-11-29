import React, { useState, useEffect } from "react";
import "../Styles/UploaderV1.css";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const ActionHolder = ({img,content="",value,handleChange,
    handleCancel}) => {
        const { t, i18n } = useTranslation();
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center "
      style={{ gap: "10px" }}
    >
    <div
    className={
      "UploaderV1 p-4 d-flex flex-column justify-content-center align-items-center" 
    }
  >
    <img src={img} alt="" style={{width:"250px",height:"250px"}} />
    <div>
        {/* {t("Drag and Drop or")} */}
        {content} 
     </div>
     {value}
    </div>
    <div
    className="d-flex flex-row justify-content-end w-100 btncont"
    style={{ gap: "5px" }}
  >
    <Button
      variant="outline-secondary"
      onClick={() => {
        handleCancel();
      }}
    >
      {/* {t("Cancel")} */}
      Decrease
    </Button>
    <Button
      onClick={() => {
        handleChange();
      }}
      
    >
      {/* {t("Recycle")} */}
      Increase
    </Button>
  </div>
    </div>
  )
}

export default ActionHolder