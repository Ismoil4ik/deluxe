import logo from './assets/ismoillogo.png';
import call from './assets/ismoilcall.png';
import showcase from './assets/ismoilshowcase.png';
import big from './assets/ismoilbig.png'
import card from './assets/ismoilcardabout.png'
import cardd from './assets/ismoilcardd.png'
import ismoil from './assets/ismoil.png'
import logotwo from './assets/logotwo.png'
import inst from './assets/instagram.png'

const Ismoil = () => {
    return (
        <div className="ismoil flex flex-col">
            <nav className="navbar px-[180px] max-[930px]:px-[20px] py-[20px] flex justify-between items-center">
                <img className="w-[132.75px]" src={logo} alt="Company Logo" />
                <ul className="flex max-[930px]:hidden justify-center items-center gap-[50px]">
                    <li><a href="#">Услуги</a></li>
                    <li><a href="#">О нас</a></li>
                    <li><a href="#">Блог</a></li>
                    <li><a href="#">Контакты</a></li>
                </ul>
                <div className="flex justify-center items-center gap-[12px]">
                    <img className="w-[37.5px]" src={call} alt="Call Icon" />
                </div>
            </nav>

            <section className="showcase">
                <img className="w-full h-[600px] object-cover" src={showcase} alt="Showcase Image" />
            </section>

            <section className="about max-[1120px]:px-[20px] px-[180px] pt-[150px] pb-[80px]">
                <div className='flex max-[800px]:flex-col max-[800px]:gap-y-[24px] justify-between items-center'>
                    <h2 className="w-[200px] max-[800px]:text-center text-[25px] font-bold">О компании <span className='text-[#E1AF93] font-[500]'>RMC DE LUXE</span></h2>
                    <p className='w-[450px] max-[800px]:text-center text-[15px]'>
                        RMC De Luxe — это риэлторское агентство в Ташкенте, специализирующееся на оценке, аренде и продаже недвижимости.
                        Компания нацелена на предоставление высококачественных и комплексных услуг в сфере недвижимости для физических лиц и корпоративных клиентов.
                    </p>
                    <p className="w-[258px] max-[800px]:text-center">
                        С целью удовлетворения потребностей клиентов, компания обеспечивает профессиональный подход, индивидуальное обслуживание и инновационные решения.
                    </p>
                </div>
                <img className='w-[1200px] mt-[80px]' src={big} alt="" />
            </section>
            <div>
                <div className='px-[180px] max-[860px]:text-center max-[1180px]:px-[20px] flex flex-col pb-[40px] gap-y-[12px]'>
                    <h2 className='text-[45px] font-[500] font-[Jost]'>Услуги</h2>
                    <p>Мы предлагаем широкий спектр услуг для наших клиентов</p>
                </div>
                <div className="cards flex max-[860px]:flex-col max-[860px]:gap-y-[12px] justify-between items-center max-[1180px]:px-[20px] px-[180px]">
                    <div className="card max-[860px]:w-[326px] max-[1400px]:w-[270px] relative flex flex-col justify-start px-[20px] py-[24px] bg-[#EDF3F5] w-[342px] h-[390px] items-start gap-y-[16px]">
                        <p className='text-[20px] font-[500] font-[Jost]'>Оценка недвижимости</p>
                        <div className='flex flex-col justify-start items-start gap-y-[16px] pl-[24px]'>
                            <p className='text-[14px] font-[400] font-[Jost] w-[204px]'>Проведение экспертных оценок рыночной стоимости недвижимости</p>
                            <p className='text-[14px] font-[400] font-[Jost]'>Анализ рынка и подготовка отчетов</p>
                        </div>
                        <img className='absolute bottom-[4px] right-[12px]' src={card} alt="" />
                    </div> <div className="card max-[860px]:w-[326px] max-[1400px]:w-[270px] relative flex flex-col justify-start px-[20px] py-[24px] bg-[#EDF3F5] w-[342px] h-[390px] items-start gap-y-[16px]">
                        <p className='text-[20px] font-[500] font-[Jost]'>Оценка недвижимости</p>
                        <div className='flex flex-col justify-start items-start gap-y-[16px] pl-[24px]'>
                            <p className='text-[14px] font-[400] font-[Jost] w-[204px]'>Проведение экспертных оценок рыночной стоимости недвижимости</p>
                            <p className='text-[14px] font-[400] font-[Jost]'>Анализ рынка и подготовка отчетов</p>
                        </div>
                        <img className='absolute bottom-[4px] right-[12px]' src={card} alt="" />
                    </div>
                    <div className="card max-[860px]:w-[326px] max-[1400px]:w-[270px] relative flex flex-col justify-start px-[20px] py-[24px] bg-[#EDF3F5] w-[342px] h-[390px] items-start gap-y-[16px]">
                        <p className='text-[20px] font-[500] font-[Jost]'>Оценка недвижимости</p>
                        <div className='flex flex-col justify-start items-start gap-y-[16px] pl-[24px]'>
                            <p className='text-[14px] font-[400] font-[Jost] w-[204px]'>Проведение экспертных оценок рыночной стоимости недвижимости</p>
                            <p className='text-[14px] font-[400] font-[Jost]'>Анализ рынка и подготовка отчетов</p>
                        </div>
                        <img className='absolute bottom-[4px] right-[12px]' src={card} alt="" />
                    </div>
                </div>
            </div>
            <div className='px-[180px] max-[1450px]:px-[20px]  mt-[150px]'>
                <h2 className='pl-[32px] max-[760px]:pl-0 mb-[40px] text-[45px] font-[500] max-[760px]:text-[30px] max-[760px]:text-center font-[Jost]'>Почему выбирают нас</h2>
                <div className="cardstwo flex justify-center items-center gap-[20px] gap-y-[20px] flex-wrap">
                    <div className='flex flex-col justify-center px-[20px] border border-[#EAEAEA] items-center gap-y-[20px] w-[350px] h-[244px]'>
                        <p className='text-[20px] font-[500] font-[Jost]'>Опыт и профессионализм</p>
                        <p className='text-[14px] font-[400] font-[Jost]'>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                    </div>
                    <img className='w-[350px] h-[244px]' src={cardd} alt="" /><div className='flex flex-col justify-center px-[20px] border border-[#EAEAEA] items-center gap-y-[20px] w-[350px] h-[244px]'>
                        <p className='text-[20px] font-[500] font-[Jost]'>Опыт и профессионализм</p>
                        <p className='text-[14px] font-[400] font-[Jost]'>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                    </div>
                    <img className='w-[350px] h-[244px]' src={cardd} alt="" /><div className='flex flex-col justify-center px-[20px] border border-[#EAEAEA] items-center gap-y-[20px] w-[350px] h-[244px]'>
                        <p className='text-[20px] font-[500] font-[Jost]'>Опыт и профессионализм</p>
                        <p className='text-[14px] font-[400] font-[Jost]'>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                    </div>
                    <img className='w-[350px] h-[244px]' src={cardd} alt="" /><div className='flex flex-col justify-center px-[20px] border border-[#EAEAEA] items-center gap-y-[20px] w-[350px] h-[244px]'>
                        <p className='text-[20px] font-[500] font-[Jost]'>Опыт и профессионализм</p>
                        <p className='text-[14px] font-[400] font-[Jost]'>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                    </div>
                    <img className='w-[350px] h-[244px]' src={cardd} alt="" /><div className='flex max-[1130px]:hidden flex-col justify-center px-[20px] border border-[#EAEAEA] items-center gap-y-[20px] w-[350px] h-[244px]'>
                        <p className='text-[20px] font-[500] font-[Jost]'>Опыт и профессионализм</p>
                        <p className='text-[14px] font-[400] font-[Jost]'>Наши специалисты имеют многолетний опыт в различных сферах недвижимости, что гарантирует высокое качество услуг</p>
                    </div>
                </div>
            </div>
            <div className="flex mt-[150px] max-[1130px]:flex-col max-[1130px]:items-center max-[1130px]:w-[70%] max-[520px]:w-[328px] max-[700px]:w-[94%] max-[700px]:px-[20px] max-[1130px]:h-full pb-[30px] self-center w-[1080px] h-[550px] bg-[#EDF3F5] justify-between items-start">
                <div className="left flex flex-col font-[Jost] justify-center max-[520px]:items-center items-start py-[45px] pl-[45px] max-[520px]:pl-[0] text-[#333333] text-[40px] font-[500] w-[500px]">
                    <h2 className='max-[520px]:text-[30px] max-[520px]:text-center max-[520px]:w-[300px]'>Остались вопросы? Свяжитесь с нами</h2>
                    <div className="inputs gap-y-[22.5px] mt-[37.5px] flex flex-col justify-center items-start">
                        <input className="w-[407px] max-[520px]:w-[300px] self-center outline-none h-[37.5px] border-b border-[#D6D6D6] placeholder:text-[#707070] placeholder:text-[18px] text-black text-[18px] placeholder:font-[400]" type="number" placeholder="Номер телефона *" />
                        <input className="w-[407px] max-[520px]:w-[300px] self-center outline-none h-[37.5px] border-b border-[#D6D6D6] placeholder:text-[#707070] placeholder:text-[18px] text-black text-[18px] placeholder:font-[400]" type="email" placeholder="E-mail *" />
                        <input className="w-[407px] max-[520px]:w-[300px] self-center outline-none h-[37.5px] border-b border-[#D6D6D6] placeholder:text-[#707070] placeholder:text-[18px] text-black text-[18px] placeholder:font-[400]" type="text" placeholder="Ваш вопрос" />
                        <input className="w-[407px] max-[520px]:w-[300px] self-center outline-none h-[37.5px] border-b border-[#D6D6D6] placeholder:text-[#707070] placeholder:text-[18px] text-black text-[18px] placeholder:font-[400]" type="text" placeholder="ФИО *" />
                    </div>
                    <button className="w-[223px] max-[520px]:self-center h-[50px] bg-[#E1AF93] mt-[37.5px] text-white text-[18px] font-[500]">Отправить</button>

                </div>
                <img className='w-[441px] max-[520px]:w-[328px] max-[520px]:h-[300px] h-[550px]' src={ismoil} alt="" />
            </div>
            <footer className='w-[1080px] max-[1100px]:w-[100%] mt-[150px] self-center'>
                <div className="upfooter max-[768px]:gap-0 max-[768px]:justify-between max-[768px]:px-[16px] max-[1130px]:justify-center max-[1130px]:gap-[33%] flex py-[37.5px] border-b border-[#EAEAEA] justify-between items-center">
                    <img src={logo} alt="" />
                    <div className='flex max-[520px]:hidden justify-center items-center gap-[20px]'>
                        <img src={inst} alt="" />
                        <img src={inst} alt="" />
                        <img src={inst} alt="" />
                        <img src={inst} alt="" />
                        <img src={inst} alt="" />
                    </div>
                </div>
                <div className="footermid max-[768px]:gap-0 max-[520px]:flex-wrap max-[520px]:gap-[54px] max-[520px]:px-[40px] max-[768px]:justify-between max-[768px]:px-[16px] border-b max-[1130px]:justify-center items-center border-[#EAEAEA] py-[37.5px] flex gap-[138px]">
                    <div className='flex flex-col justify-start'>
                        <p className='text-[18px] font-[Jost] font-[500] text-[#333333]'>Услуги</p>
                        <ul className='mt-[12px] flex flex-col justify-start gap-y-[4px] text-[15px] font-[400] font-[Jost]'>
                            <li>Купить</li>
                            <li>Арендовать</li>
                            <li>Продать</li>
                            <li>Оценить</li>
                        </ul>
                    </div> <div className='flex flex-col justify-start'>
                        <p className='text-[18px] font-[Jost] font-[500] text-[#333333]'>Услуги</p>
                        <ul className='mt-[12px] flex flex-col justify-start gap-y-[4px] text-[15px] font-[400] font-[Jost]'>
                            <li>Купить</li>
                            <li>Арендовать</li>
                            <li>Продать</li>
                            <li>Оценить</li>
                        </ul>
                    </div> <div className='flex flex-col justify-start'>
                        <p className='text-[18px] font-[Jost] font-[500] text-[#333333]'>Услуги</p>
                        <ul className='mt-[12px] flex flex-col justify-start gap-y-[4px] text-[15px] font-[400] font-[Jost]'>
                            <li>Купить</li>
                            <li>Арендовать</li>
                            <li>Продать</li>
                            <li>Оценить</li>
                        </ul>
                    </div> <div className='flex flex-col justify-start'>
                        <p className='text-[18px] font-[Jost] font-[500] text-[#333333]'>Услуги</p>
                        <ul className='mt-[12px] flex flex-col justify-start gap-y-[4px] text-[15px] font-[400] font-[Jost]'>
                            <li>Купить</li>
                            <li>Арендовать</li>
                            <li>Продать</li>
                            <li>Оценить</li>
                        </ul>
                    </div>
                </div>
                <div className="footerbottom max-[768px]:gap-0 max-[768px]:justify-between max-[768px]:px-[16px] max-[1130px]:justify-center max-[1130px]:gap-[24%] flex justify-between items-center py-[10px]">
                    <a className='text-[#B3B3B3] text-[16px] font-[400] font-[Jost]' href="">2024 © RMC De Luxe real estate LLC. Все права защищены</a>
                    <img src={logotwo} alt="" />
                </div>
            </footer>
        </div>
    );
}

export default Ismoil;