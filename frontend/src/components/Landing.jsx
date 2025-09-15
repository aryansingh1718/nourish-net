import CenterPart from "../helper/CenterPart";
import ContactUs from "../helper/ContactUs";
import Impact from "../helper/Impact";
import Process from "../helper/Process";
import Topbar from "../helper/Topbar";
import WhyServeIt from "../helper/WhyServeIt";

export default function Landing(){
    return <div>
        <Topbar></Topbar>
        <CenterPart></CenterPart>
        <WhyServeIt></WhyServeIt>
        <Process></Process>
        <Impact></Impact>
        <ContactUs></ContactUs>
    </div>
}