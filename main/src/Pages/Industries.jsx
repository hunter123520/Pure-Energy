import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
//import Container from 'react-bootstrap/Container';
import Container from "react-bootstrap/Container";
import "../Styles/LearningPage.css";
import "../Styles/ContactPage.css";
import { useTranslation } from "react-i18next";
function Industries(){
    const { t, i18n } = useTranslation();
    return(
        <div className="" >
            <Container fluid="xxl" className="CPT1" style={{height:"125vh"}}>
                <div className="CPTTitle">
                    {t("The Industries Center")}
                
                <hr className="lineSt" />
                </div>
                <div className="CPTdesc" style={{width:"80%"}}>
                {/* {t("we offer highly trained models designed to efficiently classify waste. Our models undergo rigorous training processes, starting with a vast dataset comprising over 14 million images. This initial training phase ensures that our models are equipped with a broad understanding of various waste materials. Following this, our models undergo a fine-tuning process on a smaller, waste-specific dataset, honing their ability to accurately classify waste items with precision and reliability. This method yields excellent results, allowing our models to distinguish between different types of waste effectively. With our advanced technology, you can trust our models to optimize waste management processes and contribute to a more sustainable future.")} */}
                We offer highly trained models designed to efficiently classify solar panels problems and waste classification.  Our models leverage advanced techniques, combining insights from two key domains: solar panel monitoring and garbage recycling classification. By training our models on a vast dataset of over 14 million images, we ensure they possess a comprehensive understanding of diverse visual patterns. This rigorous training process, coupled with fine-tuning on specific waste classification datasets, empowers our models to accurately distinguish between various waste types with exceptional precision and reliability. This innovative approach enables us to optimize waste management processes and contribute to a more sustainable future.
                </div>
                <div className="CPTdesc">
                {t("For more information or to order the models, please contact us at philippe.fernandez.2002@gmail.com.")}
                
                </div>
            </Container>
        </div>
    );
}

export default Industries;