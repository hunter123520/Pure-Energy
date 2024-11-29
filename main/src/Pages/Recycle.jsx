import React , {useState,useEffect} from 'react'
import ChatComp from '../Components/ChatComp'
import "../Styles/Recycle.css"
import Uploader from '../Components/Uploader'
import APIService from '../Api/APIService'
import { CircularProgress } from "@mui/material";
import Container from 'react-bootstrap/Container';
import battery from "../Images/battery.jfif"
import biological from "../Images/biological.jfif"
import brownglass from "../Images/brown-glass.jfif"
import cardboard from "../Images/cardboard.jfif"
import clothes from "../Images/clothes.jfif"
import greenglass from "../Images/green-glass.jfif"
import metal from "../Images/metal.jfif"
import paper from "../Images/paper.jfif"
import plastic from "../Images/plastic.jfif"
import shoes from "../Images/shoes.jfif"
import trash from "../Images/trash.jfif"
import whiteglass from "../Images/white-glass.jfif"
import battery1 from "../Images/battery1.jfif"
import battery2 from "../Images/battery2.jfif"
import battery3 from "../Images/battery3.jfif"
import battery4 from "../Images/battery4.jfif"
import battery5 from "../Images/battery5.jfif"
import bio1 from "../Images/bio1.jfif"
import bio2 from "../Images/bio2.jfif"
import bio3 from "../Images/bio3.jfif"
import bio4 from "../Images/bio4.jfif"
import bio5 from "../Images/bio5.jfif"
import br1 from "../Images/br1.jfif"
import br2 from "../Images/br2.jfif"
import br3 from "../Images/br3.jfif"
import br4 from "../Images/br4.jfif"
import br5 from "../Images/br5.jfif"
import cardboard1 from "../Images/cardboard1.jfif"
import cardboard2 from "../Images/cardboard2.jfif"
import cardboard3 from "../Images/cardboard3.jfif"
import cardboard4 from "../Images/cardboard4.jfif"
import cardboard5 from "../Images/cardboard5.jfif"
import clothes1 from "../Images/clothes1.jfif"
import clothes2 from "../Images/clothes2.jfif"
import clothes3 from "../Images/clothes3.jfif"
import clothes4 from "../Images/clothes4.jfif"
import clothes5 from "../Images/clothes5.jfif"
import gr1 from "../Images/gr1.jfif"
import gr2 from "../Images/gr2.jfif"
import gr3 from "../Images/gr3.jfif"
import gr4 from "../Images/gr4.jfif"
import gr5 from "../Images/gr5.jfif"
import metal1 from "../Images/metal1.jfif"
import metal2 from "../Images/metal2.jfif"
import metal3 from "../Images/metal3.jfif"
import metal4 from "../Images/metal4.jfif"
import metal5 from "../Images/metal5.jfif"
import paper1 from "../Images/paper1.jfif"
import paper2 from "../Images/paper2.jfif"
import paper3 from "../Images/paper3.jfif"
import paper4 from "../Images/paper4.jfif"
import paper5 from "../Images/paper5.jfif"
import plastic1 from "../Images/plastic1.jfif"
import plastic2 from "../Images/plastic2.jfif"
import plastic3 from "../Images/plastic3.jfif"
import plastic4 from "../Images/plastic4.jfif"
import plastic5 from "../Images/plastic5.jfif"
import resgeneral from "../Images/resgeneral.jfif"
import shoes1 from "../Images/shoes1.jfif"
import shoes2 from "../Images/shoes2.jfif"
import shoes3 from "../Images/shoes3.jfif"
import shoes4 from "../Images/shoes4.jfif"
import shoes5 from "../Images/shoes5.jfif"
import trash1 from "../Images/trash1.jfif"
import trash2 from "../Images/trash2.jfif"
import trash3 from "../Images/trash3.jfif"
import trash4 from "../Images/trash4.jfif"
import trash5 from "../Images/trash5.jfif"
import wt1 from "../Images/wt1.jfif"
import wt2 from "../Images/wt2.jfif"
import wt3 from "../Images/wt3.jfif"
import wt4 from "../Images/wt4.jfif"
import wt5 from "../Images/wt5.jfif"
import { useTranslation } from "react-i18next";
import emp from "../Images/emp.png";
import full from "../Images/full.png";
const images = [
    battery,
    biological,
    brownglass,
    cardboard,
    clothes,
    greenglass,
    metal,
    paper,
    plastic,
    shoes,
    trash,
    whiteglass
]
const Resimages = [
    [battery1,battery2,battery3,battery4,battery5],
    [bio1,bio2,bio3,bio4,bio5],
    [br1,br2,br3,br4,br5],
    [cardboard1,cardboard2,cardboard3,cardboard4,cardboard5],
    [clothes1,clothes2,clothes3,clothes4,clothes5],
    [gr1,gr2,gr3,gr4,gr5],
    [metal1,metal2,metal3,metal4,metal5],
    [paper1,paper2,paper3,paper4,paper5],
    [plastic1,plastic2,plastic3,plastic4,plastic5],
    [shoes1,shoes2,shoes3,shoes4,shoes5],
    [trash1,trash2,trash3,trash4,trash5],
    [wt1,wt2,wt3,wt4,wt5]
]




const Recycle = () => {
    // const [img,setImg] = useState([]);
    const [output, setoutput] = useState("");
    const [waiting, setWaiting] = useState(false);
    const [question,setquestion] = useState("what to do with plastic garbage")
    const [showIndex,setShowIndex] = useState(0)
    const [img,setimg] = useState(null);
    const { t, i18n } = useTranslation();

    const guidelines =  t("There are several ways to find information about recycling in your area: Your local waste collection provider's website: They will usually have a detailed list of accepted recyclables and any specific instructions. Earth911 (https://earth911.com/) is a comprehensive search engine for recycling information by location. Your municipality's website: They might have a dedicated section for recycling guidelines and drop-off locations.");

    const Infos = [
        {
            title:t("Batteries"),
            Whatare: t("Batteries are portable electrochemical devices that convert chemical energy into electrical energy. They come in various sizes and shapes, powering everything from tiny watches to large cars.  A typical battery consists of an anode (negative electrode), a cathode (positive electrode), and an electrolyte that facilitates the flow of ions between them. Chemical reactions within the battery generate the electricity we use."),
            accepted : t("No, batteries are not typically accepted in curbside recycling programs due to the hazardous materials they contain.  Lithium-ion batteries, for example, can cause fires if damaged during collection or processing."),
            clean: t("Batteries don't require any specific cleaning before disposal. However, it's important to remove any residue or corrosion from the battery terminals to avoid potential hazards during handling."),
            instructions : t("Batteries don't require any specific cleaning before disposal. However, it's important to remove any residue or corrosion from the battery terminals to avoid potential hazards during handling. Are there any special instructions for recycling batteries? Absolutely! Batteries should never be thrown in the trash. Here are some proper disposal methods for different battery types: Household Batteries (AAA, AA, C, D, 9V): Many retailers that sell batteries offer take-back programs. You can also find battery collection bins at designated drop-off locations like electronics stores, hazardous waste facilities, or community centers. Lithium-ion Batteries (from electronics): These require special handling due to their potential fire risk. Check with your local electronics waste recycler or manufacturer for specific instructions. Car Batteries: Most auto parts stores will accept old car batteries for recycling when you purchase a new one."),
            recycled :t("The types of recyclables accepted in your curbside program can vary depending on your location.  Here are some commonly accepted recyclables: Paper (cardboard, newspapers, magazines, office paper) Plastic bottles and containers (check for recycling symbols and local guidelines) Metal cans (aluminum, steel) Glass bottles and jars")
        },
        {
            title:t("Biological"),
            Whatare: t("Biological waste, also known as organic waste, refers to any material derived from living organisms. This encompasses a wide range of items, including: Food scraps: Uneaten food, fruit and vegetable peels, eggshells, coffee grounds, tea bags. Yard waste: Leaves, grass clippings, branches, twigs, and garden trimmings. Paper products: Food-soiled paper towels, napkins, pizza boxes (depending on local guidelines). Wood products: Untreated wood scraps, cardboard contaminated with food."),
            accepted : t("It depends on your local program.  Many communities offer curbside collection for food scraps and yard waste through composting programs.  However, some may require separate bins or collection methods. It's always best to check with your local waste collection provider for specific guidelines."),
            clean:t("For composting programs, it's best to remove any excess packaging materials like plastic bags or liners.  However, a light rinse of food scraps is generally not necessary.  Composting facilities are designed to handle organic materials and break them down naturally."),
            instructions : t("Here are some things to keep in mind when recycling biological waste: Composting: Avoid putting in meat scraps, dairy products, or oily food waste, as these can attract pests and disrupt the composting process. Yard waste: Remove any branches or twigs exceeding the size limit set by your program. Some programs might also exclude yard waste treated with pesticides or herbicides."),
            recycled :t("In addition to biological waste, many communities offer recycling programs for: Paper (cardboard, newspapers, magazines, office paper) Plastic bottles and containers (check for recycling symbols and local guidelines) Metal cans (aluminum, steel) Glass bottles and jars")
        },
        {
            title:t("Brown Glass"),
            Whatare: t("Brown glass, also known as amber glass, is a type of colored glass commonly used for food and beverage containers. The brown hue comes from adding small amounts of iron, sulfur,"),
            accepted : t("Yes, brown glass is generally accepted in curbside recycling programs!  In fact, separating glass colors is important for the recycling process.  Brown glass is often used for beer bottles, wine bottles, and some food containers."),
            clean:t("Rinse the container: Simply remove any leftover food or beverage residue with a quick rinse. Don't use harsh soaps or detergents, as these can contaminate the recycling stream. Remove lids and labels: Most curbside programs require lids and labels to be removed before recycling. Check with your local provider for specific instructions."),
            instructions : t("Here are some things to keep in mind when recycling brown glass: Leave the cap off: Recycle glass containers without their lids or caps. These are usually made of different materials and should be recycled separately (check your local guidelines). Don't bag your glass: Place loose glass containers directly in your recycling bin. Bagging glass can contaminate the recycling stream and hinder the sorting process. Check for cracks or breaks: Most programs accept broken glass as long as the pieces are large enough to handle safely. However, some might have specific requirements."),
            recycled :t("Besides brown glass, many communities accept other colored glass for recycling, such as: Clear glass: Often used for food containers, beverage bottles, and jars. Green glass: Commonly used for wine bottles and some beverage containers.")
        },
        {
            title:t("CardBoard"),
            Whatare: t("Cardboard is a thick, stiff paperboard material commonly used for making boxes, packaging materials, and even some furniture components.  It consists of multiple layers of fluted paper, creating a strong and lightweight structure."),
            accepted : t("Absolutely! Cardboard is one of the most recycled paper products.  Around 70% of all cardboard in the United States is recovered for recycling, making it a valuable resource."),
            clean: "",
            instructions : t("For most curbside programs, extensive cleaning isn't necessary. Here's what you should do: Remove any excess packaging materials: If your cardboard box has plastic strapping or packing tape, remove it before placing it in the recycling bin. These materials often need to be recycled separately. Scrape off excessive food residue: For cardboard containers that held food, scrape off any large chunks or residue that could attract pests or contaminate the recycling stream. Don't worry about minor stains: A light oil stain or a few drops of liquid won't usually disqualify cardboard from recycling. Most programs can handle minimal contamination."),
            recycled :t("Here are some key things to remember: Flatten the cardboard: Break down cardboard boxes by flattening them. This saves space in your recycling bin and allows for more efficient processing at recycling facilities. Cut up large pieces: If you have very large cardboard pieces, consider cutting them down to a manageable size that fits comfortably in your bin. Check for local guidelines: While most programs accept cardboard, some might have specific requirements. It's always best to check with your local waste collection provider for any special instructions.")
        },
        {
            title:t("Cloathes"),
            Whatare: t("Clothes come in a wide variety of materials, both natural and synthetic. Here are some common examples: Natural fibers: Cotton, wool, linen, hemp, silk Synthetic fibers: Polyester, nylon, acrylic, spandex The type of material will influence how clothes can be recycled or reused."),
            accepted : t("No, clothes are not typically accepted in curbside recycling programs.  The sorting and processing of textiles for recycling is a complex process not yet widely integrated into curbside collection."),
            clean: t("Sort through your clothes: Separate clothes that are still in good condition from those that are ripped, stained, or heavily worn. Wash and mend clothes for donation: Give your clothes a fresh start by washing them and repairing any minor tears or rips. This makes them more appealing to potential recipients."),
            instructions : t("Some charities or thrift stores might have specific requirements regarding the type or condition of clothes they accept.  Here's how you can find out: Contact your chosen donation organization: Reach out to the charity, thrift store, or shelter you plan to donate to and inquire about their specific clothing donation guidelines. They might have a website with information or a phone number you can call. Check their website: Many organizations have information about clothing donations on their websites. This could include details on what types of clothes they accept, any limitations on condition, and preferred drop-off procedures."),
            recycled :t("In addition to clothes donation, here are other recyclable items you can look into for your website: Paper products: Cardboard (already covered), newspaper, magazines, office paper, shredded paper (in some programs, check locally). Plastic bottles and containers: Check for recycling symbols and local guidelines, as not all plastics are accepted everywhere. Common recyclables include soda bottles, water bottles, detergent bottles, and rinsed juice containers. Metal cans: Aluminum cans (soda, beer), steel food cans (soup, vegetables), and clean aluminum foil are generally accepted.")
        },
        {
            title:t("Green Glass"),
            Whatare: t("Green glass is a type of colored glass commonly used for food and beverage containers.  The green hue comes from adding small amounts of metal oxides, such as chromium, iron, or copper, during the manufacturing process.  This not only gives the glass its distinctive color but also helps protect the contents from light exposure."),
            accepted : t("Yes, green glass is generally accepted in curbside recycling programs!  In fact, separating glass colors is important for the recycling process. Green glass is often used for wine bottles, beer bottles, and some food containers."),
            clean: t("Rinse the container: Simply remove any leftover food or beverage residue with a quick rinse. Don't use harsh soaps or detergents, as these can contaminate the recycling stream. Remove lids and labels: Most curbside programs require lids and labels to be removed before recycling. Check with your local provider for specific instructions."),
            instructions :t("Here are some things to keep in mind when recycling green glass: Leave the cap off: Recycle glass containers without their lids or caps. These are usually made of different materials and should be recycled separately (check your local guidelines). Don't bag your glass: Place loose glass containers directly in your recycling bin. Bagging glass can contaminate the recycling stream and hinder the sorting process. Check for cracks or breaks: Most programs accept broken glass as long as the pieces are large enough to handle safely. However, some might have specific requirements."),
            recycled :t("Besides green glass, many communities accept other colored glass for recycling, such as: Clear glass: Often used for food containers, beverage bottles, and jars. Brown glass: Commonly used for beer bottles, wine bottles, and some food containers.")
        },
        {
            title:t("Metal"),
            Whatare: t("Many everyday metal objects can be recycled, including: Aluminum cans: Soda cans, beer cans, and other aluminum beverage containers. Steel food cans: Cans for soups, vegetables, fruits, and other canned goods. Clean aluminum foil: Used aluminum foil used for cooking or wrapping food. Metal lids and caps: Lids from food jars, bottle caps, and pot/pan lids (check your local program's guidelines). Appliance scrap metal: Pieces of metal from old appliances like washers, dryers, or refrigerators (may require specific drop-off locations). Clean cookware: Pots, pans, and baking sheets made of metal (check your local program's guidelines)."),
            accepted : t("Yes, metal is widely accepted in curbside recycling programs!  Due to its high value and ease of sorting, metal recycling is a well-established practice."),
            clean: t("Rinse any containers: For food or beverage cans, give them a quick rinse to remove any leftover residue. Remove any plastic or non-metal parts: Some lids or attachments might be made of plastic or other materials. Separate these before placing the metal in the recycling bin."),
            instructions : t("Here are some key things to remember: Check your local program's guidelines: While most programs accept common metal items, there might be slight variations. It's always best to consult your local waste collection provider's website for specific instructions. Don't crush cans (optional): Crushing aluminum cans can save space in your bin, but it's not always necessary. Modern recycling facilities can handle both crushed and uncrushed cans. Empty aerosol cans: Make sure to completely empty aerosol cans before placing them in the recycling bin. Puncturing them is not recommended for safety reasons."),
            recycled :t("Metal recycling offers several environmental and economic advantages: Conserves resources: Recycled metal reduces the need to extract virgin materials from the earth, preserving natural resources. Saves energy: Recycling metal requires less energy compared to producing new metal from scratch. Reduces landfill waste: Metal doesn't decompose in landfills, so recycling diverts it from landfills and conserves space.")
        },
        {
            title:t("Paper"),
            Whatare: t("Many paper products can be recycled, including: Cardboard (already covered): Cardboard boxes, cereal boxes, and other corrugated cardboard items. Paperboard packaging: Packing materials made from cardboard, like egg cartons (depending on your local program). Newspaper: Daily newspapers, inserts, and flyers. Magazines and catalogs: Glossy magazines, brochures, and catalogs. Office paper: Used printer paper, notebook paper, envelopes, and copier paper. Shredded paper: Some programs accept shredded paper, but it's important to check local guidelines first (shredded paper might require special bags or drop-off locations)."),
            accepted : t("Yes, paper is a widely accepted recyclable in most curbside programs.  However, it's important to check with your local waste collection provider for specific guidelines, as some programs might have limitations on certain types of paper."),
            clean: t("Here's how to get your paper ready for recycling: Remove any plastic or metal components: Paperclips, staples, binder clips, or any other non-paper elements should be removed before placing the paper in the recycling bin. These can contaminate the recycling stream. Empty envelopes: Remove any plastic windows or lining from envelopes before recycling them. Flatten cardboard boxes (optional): Flattening cardboard boxes saves space in your recycling bin, but it's not always mandatory."),
            instructions : t("Here are some things to keep in mind: Check for contamination: Avoid placing food-soiled paper towels, napkins, or greasy pizza boxes in the recycling bin. Heavy contamination can disqualify the entire batch from recycling. Wet or moldy paper: Paper that is excessively wet or moldy should not be recycled. This can deteriorate the entire batch and disrupt the recycling process. Local guidelines: As mentioned earlier, consult your local waste collection provider's website for specific instructions on accepted paper types and any preparation requirements."),
            recycled :t("While most clean paper products are recyclable, some exceptions exist: Paper cups: These often have a plastic lining that makes them unsuitable for curbside recycling. Check for specific instructions in your area. Wax paper and parchment paper: Due to the waxy coating, these are typically not accepted in curbside recycling. Carbon paper: The carbon residue can contaminate other recyclables, so it's usually not accepted in curbside programs.")
        },
        {
            title:t("Plastic"),
            Whatare: t("Plastic refers to a wide range of synthetic or semi-synthetic materials. The key property of plastic is its plasticity, which allows it to be molded and shaped into various forms.  There are many different types of plastics, each with its own properties and recycling potential."),
            accepted : t("Not all plastics are created equal, and what gets accepted in your curbside recycling program depends on your local facilities.  Generally, rigid plastics with recycling codes 1 and 2 (usually PET and HDPE) are widely accepted.  However, some locations might accept other types of plastics."),
            clean: t("Most recycling programs require that plastics are rinsed clean of any food or liquid residue.  You don't need to get them squeaky clean, but any major leftover materials can contaminate the recycling stream."),
            instructions : t("Here are some general tips for recycling plastic: Check the recycling code: Most plastic containers have a recycling symbol with a number inside (usually located on the bottom). This code indicates the type of plastic and helps sorting facilities determine if it's accepted in your program. Leave lids on: Contrary to popular belief, some recycling programs now accept lids with plastic bottles. Check your local guidelines. Don't bag your recyclables: Plastic bags can tangle equipment at recycling facilities. Place loose plastic items directly in the recycling bin. Rinse, but don't overdo it: A quick rinse to remove food or beverage residue is sufficient. When in doubt, throw it out: If you're unsure whether a plastic item is recyclable in your area, err on the side of caution and toss it in the trash."),
            recycled :t("What gets recycled varies by location.  Your local municipality or waste disposal provider should have a recycling guide that details what materials are accepted in your curbside program. This might include paper, cardboard, metal cans, glass bottles, and certain types of plastics.")
        },
        {
            title:t("Shoes"),
            Whatare: t("Shoes themselves are not considered 'garbage' in the traditional sense, but rather unwanted items."),
            accepted : t("No, shoes are generally not accepted in curbside recycling programs. This is because shoes are made from a combination of materials like leather, fabric, rubber, and glue, which makes them difficult and expensive to sort and reprocess in most recycling facilities."),
            clean: t("Lightly soiled shoes: Wipe away dirt and dust with a damp cloth. More soiled shoes: You can try a gentle hand wash with warm water and laundry detergent. Let them air dry completely before donation. Deodorize: If shoes have any lingering odors, sprinkle baking soda inside and let them sit for a few hours before brushing it out."),
            instructions : t("Condition: Gently used shoes in good condition are most desirable. Shoes with rips, tears, or broken soles might not be accepted. Pairs: Ideally, donate shoes as a matched pair. Donation Centers: Some donation centers might have specific requirements or limitations on the types of shoes they accept (e.g., only athletic shoes, only dress shoes). Check their website or call beforehand."),
            recycled :t("In addition to shoes donation, here are other recyclable items you can look into for your website: Paper products: Cardboard (already covered), newspaper, magazines, office paper, shredded paper (in some programs, check locally). Plastic bottles and containers: Check for recycling symbols and local guidelines, as not all plastics are accepted everywhere. Common recyclables include soda bottles, water bottles, detergent bottles, and rinsed juice containers. Metal cans: Aluminum cans (soda, beer), steel food cans (soup, vegetables), and clean aluminum foil are generally accepted.")
        },
        {
            title:t("Trash"),
            Whatare: t("Trash refers to anything you throw away that isn't being recycled or composted. It can include: Food scraps (unless composted) Dirty or greasy recyclables (like pizza boxes) Hazardous waste (batteries, paint, etc.) Yard waste (leaves, twigs, etc.) Electronic waste (e-waste) Non-recyclable plastics (straws, plastic bags, etc.)"),
            accepted : `Generally, trash isn't accepted in curbside recycling programs. There might be exceptions for some communities with advanced sorting facilities, but it's always best to check with your local guidelines.`,
            clean: t("Since trash doesn't include recyclables, cleaning instructions wouldn't apply here. However, if you're unsure if an item is trash or recyclable, you can check for recycling symbols and clean it according to your local recommendations."),
            instructions : t("There are no recycling instructions for trash.  Trash needs to be properly disposed of in designated bins to avoid littering and manage waste effectively. Some communities offer composting options for food scraps, which diverts them from landfills."),
            recycled :t("What gets recycled varies depending on your location.  Here are some common recyclables to check with your local guidelines: Paper (cardboard, newspapers, magazines) Metal cans (food and beverage cans) Glass bottles and jars (check for colour sorting instructions) Plastic bottles and containers (check for recycling symbols and accepted types)")
        },
        {
            title:t("White Glass"),
            Whatare: t("White glass is essentially a super clear version of regular clear glass. It's made through the same process but with significantly reduced iron oxide, resulting in superior light transmission and a near-perfect colorless appearance."),
            accepted : t("The good news is that white glass is generally accepted in curbside recycling programs!  However, it's always best to check with your local recycling guidelines. Some areas might have specific requirements for color sorting or limitations on glass types."),
            clean:t("Before recycling white glass, rinse it clean to remove any food or beverage residue.  You don't need to remove labels as most recycling facilities can sort these out during processing."),
            instructions :t("There aren't any special instructions for recycling white glass compared to regular clear glass.  Make sure it's clean and follow your local guidelines regarding sorting colors or removing lids."),
            recycled :t("Along with white glass, many communities accept other glass items in their recycling programs. Here are some common examples: Clear glass bottles and jars (check for color sorting instructions in your area) Colored glass bottles (depending on your local program)")
        },
    ]






    const handleSubmit = (image) => {
        setWaiting(true);
        APIService.recycle({"files":image})
          .then((response) => {
            setoutput(response["output"]);
            setWaiting(false);
            console.log(response)
            var prediction = Number(response["output"]);
            setShowIndex(prediction)
            
          })
          .catch((error) => console.log("error", error));
    //     setoutput("qsdqs");
    //    setWaiting(false);
      };
      const handleReset = () => {
      }
     const getBase64 = (file, cb) =>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    }
  return (
    <>
    
    {/* <div style={{width:"100%",textAlign:"center",marginTop:"25px",paddingLeft:50,paddingRight:50}}>
            The Model is out of service right now because of the deployement limitations, However the site will predict a random type for further review
        </div> */}
    <div className='d-flex justify-content-around errorContainer ' >
        
        <Uploader
        full={full}
        emp={emp}
        handleChange={(file) => {

            
            var fr = new FileReader();
              fr.onload = function () {
                const res =  btoa(fr.result)
                setimg(res)
                handleSubmit(res) 
                
              };
    
    
              fr.readAsBinaryString(file);

            

        //     getBase64(file, (result) => {
        //         setimg(result)
        //         handleSubmit(result) 
        //    });
        //   var fr = new FileReader();
        //   fr.onload = function () {
            
        //   };


        //   fr.readAsText(file);
        // const data = new FormData();
        // data.append('img', file);

       
        
        }}
        handleCancel={(file) => {}}
        name={"file"}
        types={["png","jpg"]}
      />
        
    </div>
    {output === "" && !waiting ? (
        <></>
      ) : (
        <>
          
          {waiting ? (
             <div
             className="d-flex flex-column justify-content-center align-items-center p-4"
             style={{ gap: "15px" }}
           >
             <CircularProgress />
             <span>{t("This may take some time, please be patient")}</span>
           </div>
          ) : (
            <div>
                <div style={{height:50}}></div>
                <div className='intro-title titlec'>
                    <span>{t("Garbage Analysing Results")}</span>
                </div>
                <div style={{height:50}}></div>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center crsv' >
                <div className='imgcont w-50' style={{zIndex:500}}>
                <div className="layer " style={{zIndex:500}}>
                    <img className='img1 rescov' src={images[showIndex]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50' style={{zIndex:500,marginLeft:"-70px"}}>
                <div className='descotitle' style={{marginTop:"-50px"}}>
                    <div className="effect-wrap">
                        <div>
                            <h1 className="effect-block">
                        <span>{t("This Garbage is")}</span>
                    </h1>
                    <h1 className="effect-block" id="another">
                        <span>{Infos[showIndex]["title"]}</span>
                    </h1>
                        </div>
                    </div>
                    </div>
                </div>
                </Container>
                
                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <img className='img1' src={Resimages[showIndex][0]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    {t("What did")} <span style={{color: "#178a9f"}}>{Infos[showIndex]["title"]}</span>{t("means")}  
                    </div>
                    <div className='descocontent'>
                        {Infos[showIndex]["Whatare"]}
                 </div>
                </div>
                </Container>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    {t("Are")}  <span style={{color: "#178a9f"}}>{Infos[showIndex]["title"]} </span>
                    {t("generally")}    <span style={{color: "#578a25"}}>
                    {t("accepted")}    </span>{t("in curbside recycling")}  
                    </div>
                    <div className='descocontent'>
                    {Infos[showIndex]["accepted"]}
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <img className='img2' src={Resimages[showIndex][1]} alt="" /> 
                </div>
                
            </Container>

            <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <img className='img1' src={Resimages[showIndex][2]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    {t("How should I clean this")}   <span style={{color: "#178a9f"}}>{Infos[showIndex]["title"]}</span> 
                    {t("item before recycling")}
                    </div>
                    <div className='descocontent'>
                        {Infos[showIndex]["clean"]}
                 </div>
                </div>
                </Container>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    {t("Are there any special")}   <span style={{color: "#178a9f"}}>{t("instructions")} 
                    {t("for recycling this type of garbage ")}</span> 
                    </div>
                    <div className='descocontent'>
                    {Infos[showIndex]["instructions"]}
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <img className='img2' src={Resimages[showIndex][3]} alt="" /> 
                </div>
                
            </Container>

            <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center' >
                <div className='imgcont w-50' >
                <div className="layer ">
                    <img className='img1' src={Resimages[showIndex][4]} alt="" /> 
                </div>
                </div>
                <div className='desco1 w-50'>
                    <div className='descotitle'>
                    {t("What other types of waste can be ")}   <span style={{color: "#178a9f"}}>
                    {t("recycled")}   </span>{t("in my community")}  
                    </div>
                    <div className='descocontent'>
                        {Infos[showIndex]["recycled"]}
                 </div>
                </div>
                </Container>

                <Container fluid="xl" className='container desc1 d-flex justify-content-within align-items-center'>
                <div className='desco1 w-50' style={{paddingRight:"2rem",paddingLeft:"0"}}>
                    <div className='descotitle'>
                    {t("Where can I find more ")}      <span style={{color: "#178a9f"}}>{t("information")}   
                    </span>{t("about recycling guidelines in my area")}   
                    </div>
                    <div className='descocontent'>
                    {guidelines}
                    </div>
                </div>
                <div className='imgcont w-50' >
                <div className="layer2"></div>
                    <img className='img2' src={resgeneral} alt="" /> 
                </div>
                
            </Container>
                <div>
                    
                    <ChatComp>

                    </ChatComp>
                
            </div>
            </div>
           
          )}
        </>
      )}
    </>
    
  )
}

export default Recycle