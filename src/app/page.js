import DevService from "@/components/devService/DevService";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";

// Mobile Images
import MobileTools1 from '@/assets/icons/mobiletools1.svg'
import MobileTools2 from '@/assets/icons/mobiletools2.svg'
import MobileTools3 from '@/assets/icons/mobiletools3.svg'
import MobileTechno1 from '@/assets/icons/mobiletechnologies1.svg'
import MobileTechno2 from '@/assets/icons/mobiletechnologies2.svg'
import MobileTechno3 from '@/assets/icons/mobiletechnologies3.svg'
import MobilePhone from '@/assets/images/mobilephone.png'

// Design Images
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

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Team />
                <DevService phoneImg={MobilePhone} sectionTitle={'Development of mobile applications'} desc={'In collaboration with startups, we have learned how to create a creative and functional user interface for mobile applications.'} tools={[{ id: 1, img: MobileTools1, title: 'iOS' }, { id: 2, img: MobileTools2, title: 'Android' }, { id: 3, img: MobileTools3, title: 'Crossplatform' }]} technologies={[{ id: 1, img: MobileTechno1, title: 'Swift' }, { id: 2, img: MobileTechno2, title: 'Kotlin' }, { id: 3, img: MobileTechno3, title: 'Flutter' }]} />
                <DevService phoneImg={DesignPhone} sectionTitle={'UI / UX design'} desc={'Our company takes a human-centered approach to design'} tools={[{ id: 1, img: DesignTools1, title: 'UX' }, { id: 2, img: DesignTools2, title: 'UI' }, { id: 3, img: DesignTools3, title: 'Prototyping' }, { id: 4, img: DesignTools4, title: 'Mobile Design' }, { id: 5, img: DesignTools5, title: 'Web Design' }, { id: 6, img: DesignTools6, title: 'Atomic Design' }]} technologies={[{ id: 1, img: DesignTechno1, title: 'Figma' }, { id: 2, img: DesignTechno2, title: 'Sketch' }, { id: 3, img: DesignTechno3, title: 'Lottie' }, { id: 4, img: DesignTechno4, title: 'Illustrator' }]} />
            </main>
        </>
    );
}