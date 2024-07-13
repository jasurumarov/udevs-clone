// Components
import DevService from "@/components/devService/DevService";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import Tools from "@/components/tools/Tools";
import Systems from "@/components/systems/Systems";
import Clients from "@/components/clients/Clients";

// Mobile Icons
import MobileTools1 from '@/assets/icons/mobiletools1.svg'
import MobileTools2 from '@/assets/icons/mobiletools2.svg'
import MobileTools3 from '@/assets/icons/mobiletools3.svg'
import MobileTechno1 from '@/assets/icons/mobiletechnologies1.svg'
import MobileTechno2 from '@/assets/icons/mobiletechnologies2.svg'
import MobileTechno3 from '@/assets/icons/mobiletechnologies3.svg'
import MobilePhone from '@/assets/images/mobilephone.png'

// Design Icons
import DesignTools1 from '@/assets/icons/designtools1.svg'
import DesignTools2 from '@/assets/icons/designtools2.svg'
import DesignTools3 from '@/assets/icons/designtools3.svg'
import DesignTools4 from '@/assets/icons/designtools4.svg'
import DesignTools5 from '@/assets/icons/designtools5.svg'
import DesignTools6 from '@/assets/icons/designtools6.svg'
import DesignTechno1 from '@/assets/icons/designtechnologies1.svg'
import DesignTechno2 from '@/assets/icons/designtechnologies2.svg'
import DesignTechno3 from '@/assets/icons/designtechnologies3.svg'
import DesignTechno4 from '@/assets/icons/designtechnologies4.svg'
import DesignPhone from '@/assets/images/designphone.png'

// Erp Icons
import ErpImg1 from '@/assets/icons/erp-icon1.svg'
import ErpImg2 from '@/assets/icons/erp-icon2.svg'
import ErpImg3 from '@/assets/icons/erp-icon3.svg'
import ErpImg4 from '@/assets/icons/erp-icon4.svg'
import ErpImg5 from '@/assets/icons/erp-icon5.svg'
import ErpImg6 from '@/assets/icons/erp-icon6.svg'

// Optimize Icons
import OptimizeImg1 from '@/assets/icons/optimize-icon1.svg'
import OptimizeImg2 from '@/assets/icons/optimize-icon2.svg'
import OptimizeImg3 from '@/assets/icons/optimize-icon3.svg'
import OptimizeImg4 from '@/assets/icons/optimize-icon4.svg'
import OptimizeImg5 from '@/assets/icons/optimize-icon5.svg'
import OptimizeImg6 from '@/assets/icons/optimize-icon6.svg'
import OptimizeImg7 from '@/assets/icons/optimize-icon7.svg'

// Consulting Icons
import ConsultingIcon1 from '@/assets/icons/consulting-icon1.svg'
import ConsultingIcon2 from '@/assets/icons/consulting-icon2.svg'
import ConsultingIcon3 from '@/assets/icons/consulting-icon3.svg'
import ConsultingIcon4 from '@/assets/icons/consulting-icon4.svg'
import ConsultingIcon5 from '@/assets/icons/consulting-icon5.svg'
import ConsultingIcon6 from '@/assets/icons/consulting-icon6.svg'

// Stastics Image
import StasticsImg from '@/assets/images/stastics.svg'
import Footer from "@/components/footer/Footer";


export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Team />
                <DevService phoneImg={MobilePhone} sectionTitle={'Development of mobile applications'} desc={'In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.'} tools={[{ id: 1, img: MobileTools1, title: 'iOS' }, { id: 2, img: MobileTools2, title: 'Android' }, { id: 3, img: MobileTools3, title: 'Crossplatform' }]} technologies={[{ id: 1, img: MobileTechno1, title: 'Swift' }, { id: 2, img: MobileTechno2, title: 'Kotlin' }, { id: 3, img: MobileTechno3, title: 'Flutter' }]} />
                <Systems desc={'IT Systems of any level of complexity at a convenient time for you'} sectionTitle={'ERP systems'} benefits={[{ id: 1, title: 'CRM', img: ErpImg1 }, { id: 2, title: 'eLearning', img: ErpImg2 }, { id: 3, title: 'E-Commerce', img: ErpImg3 }, { id: 4, title: 'POS', img: ErpImg4 }, { id: 5, title: 'Sms / Email', img: ErpImg5 }, { id: 6, title: 'Warehouse', img: ErpImg6 },]} />
                <DevService phoneImg={DesignPhone} sectionTitle={'UI / UX design'} desc={'Our company takes a human-centered approach to design'} tools={[{ id: 1, img: DesignTools1, title: 'UX' }, { id: 2, img: DesignTools2, title: 'UI' }, { id: 3, img: DesignTools3, title: 'Prototyping' }, { id: 4, img: DesignTools4, title: 'Mobile Design' }, { id: 5, img: DesignTools5, title: 'Web Design' }, { id: 6, img: DesignTools6, title: 'Atomic Design' }]} technologies={[{ id: 1, img: DesignTechno1, title: 'Figma' }, { id: 2, img: DesignTechno2, title: 'Sketch' }, { id: 3, img: DesignTechno3, title: 'Lottie' }, { id: 4, img: DesignTechno4, title: 'Illustrator' }]} />
                <Systems desc={'Our experienced professionals will help you optimize your infrastructure'} sectionTitle={'Optimization Infrastructure'} benefits={[{ id: 1, title: 'Architecture', img: OptimizeImg1 }, { id: 2, title: 'Auto testing', img: OptimizeImg2 }, { id: 3, title: 'Stress testing', img: OptimizeImg3 }, { id: 4, title: 'Load testing', img: OptimizeImg4 }, { id: 5, title: 'Devops', img: OptimizeImg5 }, { id: 6, title: 'Cloud', img: OptimizeImg6 }, { id: 7, title: 'CI / CD', img: OptimizeImg7 },]} />
                <DevService classname={'consulting-section'} phoneImg={StasticsImg} sectionTitle={'IT consulting'} desc={'We can improve the qualifications of your employees thereby increasing the efficiency of your company'} tools={[{ id: 1, img: ConsultingIcon1, title: 'Frontend' }, { id: 2, img: ConsultingIcon2, title: 'Backend' }, { id: 3, img: ConsultingIcon3, title: 'Architecture' }, { id: 4, img: ConsultingIcon4, title: 'DevOps' }, { id: 5, img: ConsultingIcon5, title: 'UX/UI' }, { id: 6, img: ConsultingIcon6, title: 'QA' }]} />
                <Tools />
                <Clients />
            </main>
            <Footer />
        </>
    );
}