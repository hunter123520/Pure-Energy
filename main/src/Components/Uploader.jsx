import React, { useState, useEffect } from "react";
import "../Styles/UploaderV1.css";
import { FileUploader } from "react-drag-drop-files";
import { Upload } from "react-bootstrap-icons";
import { Alert } from "@mui/material";
import { Button } from "react-bootstrap";

import { useTranslation } from "react-i18next";
const Uploader = ({
  handleChange,
  handleCancel,
  cond1 = false,
  emp,
  full,
  name = "file",
  types = ["CSV"],
  Btncontent="Recycle"
}) => {
  const { t, i18n } = useTranslation();
  const [type, setType] = useState("normal");
  const [file, setFile] = useState();
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center "
      style={{ gap: "10px" }}
    >
      <FileUploader
        handleChange={(file) => {
          setType("success");
          setFile(file);
          // console.log(file);
          //   handleChange();
        }}
        name={name}
        types={types}
        classes={"w-100 h-100"}
        dropMessageStyle={{
          backgroundColor: "var(--sky-green)",
          borderColor: "green",
          opacity: 1,
        }}
        onTypeError={() => {
          setType("type");
        }}
        onSizeError={() => {
          setType("size");
        }}
        onDraggingStateChange={(e) => {
          //   setDragged(e);
        }}
        children={
          <div
            className={
              "UploaderV1 p-4 d-flex flex-column justify-content-center " +
              (type == "size" || type == "type"
                ? " Error"
                : type == "success"
                ? "Success"
                : "")
            }
          >

            <img className={'imgup '+(cond1?" large ":"")} src={type == "success" ? full : emp } alt="" />
            {/* <Upload size={22} /> */}
            <div>
              {t("Drag and Drop or")}
              <span style={{ color: "var(--blue)" }}> {t("Choose image")} </span>
              {t("to Upload")}
            </div>
            <div className="d-flex flex-row ">
              {types.map((e, i) => {
                return (
                  <div key={e} style={{ color: "var(--gray)" }}>
                    {e}
                    {i < types.length - 1 ? " or" : ""}
                    &nbsp;
                  </div>
                );
              })}
            </div>
          </div>
        }
      />
      {type == "type" ? (
        <Alert className="w-100" severity="error">
          {t("The Type of the File u choose is not Accepted")}
        </Alert>
      ) : type == "size" ? (
        <Alert className="w-100" severity="error">
          {t("The Size of the File u choose is not Accepted")}
        </Alert>
      ) : type == "success" ? (
        <Alert className="w-100 align-items-center" severity="success">
          <div className="d-flex flex-column">
            <span>{file.name}</span>
            <span>{t("Uploaded Successfully")}</span>
          </div>
        </Alert>
      ) : (
        <></>
      )}
      <div
        className="d-flex flex-row justify-content-end w-100 btncont"
        style={{ gap: "5px" }}
      >
        <Button
          variant="outline-secondary"
          onClick={() => {
            handleCancel();
            setType("normal");
            setFile();
          }}
        >
          {t("Cancel")}
        </Button>
        <Button
          onClick={() => {
            handleChange(file);
          }}
          disabled={type != "success"}
        >
          {/* {t("Recycle")} */}
          {Btncontent}
        </Button>
      </div>
    </div>
  );
};
export default Uploader;
