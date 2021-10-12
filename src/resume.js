export const header = {
    name: "이민훈",
    desc: "프로그래머 지망생",
    email: "hackids@naver.com",
    github: "https://github.com/Lee-Minhoon",
    blog: "https://hackids.tistory.com/",
};

export const intro = {
    subject: "Introduce",
    profile: "profile.jpg",
    intro: `
    안녕하세요! 개발자 지망생 이민훈입니다. 뭔가를 만드는 것, 문제를 해결하는 것을
    좋아하다 보니 어릴 때 부터 자연스레 개발자를 꿈꾸게 되었습니다. 지금까지도 꿈이 변치않아
    현재도 개발자로 일하기위해 다양한 준비들을 하고 있습니다. 대학 생활 중 안드로이드
    어플리케이션 개발, 웹 개발 등의 여러 프로젝트에 프론트엔드와 백엔드 가리지 않고
    열심히 참여하였으며, 졸업후에는 알고리즘 공부, 자격증 취득, 안해봤던 기술 공부 등을
    하고 있습니다. \n프로그래머라는
    `
};

export const skills = {
    subject: "Skills",
    contents: [
        {
            category: "Frontend",
            desc: ["React", "HTML", "CSS", "JavaScript"]
        },
        {
            category: "Backend",
            desc: ["Nodejs", "PHP", "C++", "JAVA", "Python"]
        },
        {
            category: "DevOps",
            desc: ["MySQL"]
        },
    ],
};

export const experience = {
    subject: "Experience",
    contents: [
        {
            title: "(주)서르 인턴 근무",
            subtitle: "동서대학교 2020학년도 하계 국내인턴십",
            period: "2020.07 ~ 2020.08",
            link: "",
            desc: [
                { main: "Python을 이용해 AI데이터 라벨링 툴 제작", sub: [] },
                { main: "UI 구현을 위해 PyQt5, 데이터 조작을 위해 Pandas, NumPy 등을 사용함", sub: [] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const projects = {
    subject: "Projects",
    contents: [
        {
            title: "깃허브 이력서",
            subtitle: "리액트를 이용해 만들고 깃허브 페이지를 이용해 배포한 이력서",
            period: "2020.09 ~ ",
            link: "https://github.com/Lee-Minhoon/Lee-Minhoon.github.io",
            desc: [
                { main: "웹 프론트엔드 프레임워크인 리액트 실습과 더불어 하나쯤은 있으면 좋겠다 싶었던 이력서페이지를 작성하게 됨", sub: [] }
            ],
            keywords: ["React", "HTML", "CSS", "JavaScript"],
            folder: "OMR-based-automatic-arrangement-system",
            images: [],
            pdfs: []
        },
        {
            title: "광학 음악 인식 기반 자동 편곡 시스템",
            subtitle: "캡스톤디자인1, 2 교과목 연계 프로젝트",
            period: "2020.03 ~ 2020.12",
            link: "https://github.com/Lee-Minhoon/capstone-design",
            desc: [
                { main: "비전문가들도 악보를 데이터화하여 쉽게 편집하고 음악 파일로 출력할 수 있는 악보 인식 기반 편곡 장치를 제공하고자 함", sub: [] },
                { main: "사용자는 편곡하고자 하는 음악의 악보를 입력하고 편곡된 음악 파일을 제공 받음", sub: [1, 2, 3] },
                { main: "크게 광학 음악 인식 모듈과 자동 편곡 모듈로 구성", sub: [1, 2, 3] },
                { main: "광학 음악 인식 모듈에 OpenCV 라이브러리를 사용하였으며, 속도를 위해 jni + ndk를 사용함", sub: [] },
                { main: "클라이언트는 안드로이드 애플리케이션, 서버는 파이썬으로 구현", sub: [] },
                { main: "악보를 인식하는 과정은 30여 개가 넘는 악보의 구성요소들을 인식하고 분류해야함", sub: [] },
                { main: "본 프로젝트를 통해 작게 나마 컴퓨터비전, 머신 러닝 등 인공지능 분야의 학습계기가 됨", sub: [] }
            ],
            keywords: ["OpenCV", "TensorFlow", "C++", "Java", "Python", "Android"],
            folder: "OMR-based-automatic-arrangement-system",
            images: ["1.png", "2.png", "3.png", "4.png"],
            pdfs: []
        },
        {
            title: "PC 견적 관리 시스템",
            subtitle: "데이터베이스설계 교과목 연계 프로젝트",
            period: "2019.09 ~ 2019.12",
            link: "https://github.com/Lee-Minhoon/PC-auction",
            desc: [
                { main: "PC부품에 대한 지식 없이 조립형 PC를 구매할 수 있는 PC견적 및 경매 사이트", sub: [] },
                { main: "로그인/로그아웃, 회원가입, 역경매/입찰, 페이징, 관리자 페이지 등의 기능 제공", sub: [] },
                { main: "HTML + CSS + JavaScirpt로 클라이언트, Apache + PHP로 로컬서버 구현", sub: [] }
            ],
            keywords: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            folder: "PC-auction",
            images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
            pdfs: []
        },
        {
            title: "인터넷 도서 구매 시스템",
            subtitle: "데이터베이스설계 교과목 연계 프로젝트",
            period: "2019.09 ~ 2019.12",
            link: "https://github.com/Lee-Minhoon/database-practice",
            desc: [
                { main: "데이터베이스 실습을 위해 알라딘, YES24, 리디북스와 같은 온라인 도서 구매 사이트를 구현", sub: [] },
                { main: "로그인/로그아웃, 회원가입, 마이페이지(카드, 장바구니, 주문내역, 주문상세), 주문, 리뷰 등의 기능 제공", sub: [] },
                { main: "HTML + CSS + JavaScirpt로 클라이언트, Apache + PHP로 로컬서버 구현", sub: [] }
            ],
            keywords: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
            folder: "database-practice",
            images: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png"],
            pdfs: []
        },
        {
            title: "플리마켓 통합 관리 시스템",
            subtitle: "소프트웨어분석및설계 교과목 연계 프로젝트",
            period: "2019.09 ~ 2019.12",
            link: "",
            desc: [
                { main: "해당 프로젝트는 개발 직전 단계까지의 설계를 목표로 두고 다양한 설계문서를 작성 해 본 프로젝트", sub: [] },
                { main: "설계 문서는 프로젝트 정의서, 요구사항기술서, 클래스분석서, UI설계서, 데이트베이스설계서 등을 작성", sub: [] },
                { main: "플리마켓의 셀러와 주최자, 참가자에게 기존의 불편한 요소들을 해소할 수 있도록 하는 플리마켓 통합 관리 시스템", sub: [] },
                { main: "프로젝트 설계방법과 StarUML과 같은 설계툴에 대해 배울수 있었음", sub: [] }
            ],
            keywords: ["StarUML"],
            folder: "flea-market-integrated-management-system",
            images: [],
            pdfs: [
                { pdf: "1.pdf", thumbnail: "1-thumbnail.png" },
                { pdf: "2.pdf", thumbnail: "2-thumbnail.png" },
                { pdf: "3.pdf", thumbnail: "3-thumbnail.png" },
                { pdf: "4.pdf", thumbnail: "4-thumbnail.png" },
                { pdf: "5.pdf", thumbnail: "5-thumbnail.png" },
            ]
        },
        {
            title: "TAPC(2)",
            subtitle: "소프트웨어개발실습4 교과목 연계 프로젝트",
            period: "2019.09 ~ 2019.12",
            link: "https://github.com/Lee-Minhoon/tap-the-taxi-2",
            desc: [
                { main: "Firebase를 대체할 웹 서버를 구현하여 만든 TAPC 후속 프로젝트", sub: [] },
                { main: "클라이언트는 안드로이드 애플리케이션, 서버는 Node.js, DB는 MySQL로 구현", sub: [] },
                { main: "로그인/로그아웃, 회원가입 등을 위한 http 서버와 매칭/채팅을 위한 소켓 서버를 구현", sub: [] },
                { main: "안드로이드 애플리케이션과 웹서버를 처음 연동한 프로젝트", sub: [] }
            ],
            keywords: ["Nodejs", "MySQL", "Java", "JavaScript", "Android"],
            folder: "tap-the-taxi-2",
            images: ["1.png", "2.png", "3.png", "4.png"],
            pdfs: []
        },
        {
            title: "TAPC",
            subtitle: "소프트웨어개발실습3 교과목 연계 프로젝트",
            period: "2019.03 ~ 2019.06",
            link: "https://github.com/Lee-Minhoon/tap-the-taxi-1",
            desc: [
                { main: "고지대에 위치한 학교의 지리적 특성에 택시합승관련 어플리케이션을 설계, 개발", sub: [] },
                { main: "웹 서버에 대한 지식이 전무해 Google Firebase를 통해 데이터베이스를 구현", sub: [] },
                { main: "로그인/로그아웃, 회원가입, 방 생성/참여, 채팅 기능 등이 포함", sub: [] }
            ],
            keywords: ["Firebase", "Java", "Android"],
            folder: "tap-the-taxi-1",
            images: ["1.png", "2.png", "3.png", "4.png", "5.png"],
            pdfs: []
        },
        {
            title: "프로그래밍 포럼",
            subtitle: "소프트웨어개발실습2 교과목 연계 프로젝트",
            period: "2018.03 ~ 2018.06",
            link: "https://github.com/Lee-Minhoon/programming-forum",
            desc: [
                { main: "한국에 대형 프로그래밍 커뮤니티가 부족하다 생각하여 만든 사이트", sub: [] },
                { main: "서버가 없는 정적 페이지이며 HTML + CSS + JavaScript를 처음으로 실습 해본 프로젝트", sub: [] }
            ],
            keywords: ["HTML", "CSS", "JavaScript"],
            folder: "programming-forum",
            images: ["1.png", "2.png", "3.png", "4.png", "5.png"],
            pdfs: []
        },
        {
            title: "눈걸이",
            subtitle: "소프트웨어기초프로젝트 교과목 연계 프로젝트",
            period: "2018.03 ~ 2018.06",
            link: "",
            desc: [
                { main: "시각장애인을 위해 만들어진 장애물과의 거리를 알려주는 목걸이", sub: [] },
                { main: "초음파센서와 부저, 진동 모터 등이 사용 됨", sub: [] }
            ],
            keywords: ["Arduino", "C"],
            folder: "eyelace",
            images: ["1.png", "2.png"],
            pdfs: []
        },
    ],
};

export const awards = {
    subject: "Awards",
    contents: [
        {
            title: "2020년도 온택트기반 동서인 FAIR - 최우수상",
            subtitle: "광학 음악 인식 기반 자동 편곡 시스템",
            period: "2020.12.17",
            link: "https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&pg=10&mode=view&idx=83639",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "한국지능시스템학회 30주년 기념 2020 추계학술대회 - 우수논문상",
            subtitle: "광학 음악 인식 기반 자동 편곡 시스템",
            period: "2020.11.28",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "2020학년도 동서인 AI 해커톤 경진대회 - 장려상",
            subtitle: "컴퓨터 비전을 이용한 악보 인식 기반 자동 편곡 시스템",
            period: "2020.08.31",
            link: "https://www.dongseo.ac.kr/kr/index.php?pCode=MN2000192&pg=15&mode=view&idx=82307",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "2020년도 동서 AI·SW 아이디어 경진대회 - 장려상",
            subtitle: "광학 음악 인식을 이용한 자동 편곡 시스템",
            period: "2020.06.08",
            link: "https://uni.dongseo.ac.kr/sw/index.php?pCode=MN1000014&pg=3&mode=view&idx=442",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "기초프로그래밍 경진대회 - 우수상",
            subtitle: "",
            period: "2017.10.27",
            link: "https://blog.naver.com/computer_ck/221128532267",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const research = {
    subject: "Research",
    contents: [
        {
            title: "Journal of The Korean Institute of Intelligent Systems",
            subtitle: "광학 음악 인식 기반 자동 편곡 시스템을 위한 화성 생성 연구",
            period: "2020.01.18",
            link: "https://www.dbpia.co.kr/Journal/articleDetail?nodeId=NODE10572152",
            desc: [
                { main: "구분 : Journal", sub: ["흔히 음악을 추상적이고 불확실성이 높은 예술 분야라 생각하지만, 엄연히 화성학과 대위법 등 정립된 이론이 존재한다. 컴퓨터와 인공지능이 등장함에 따라 이런 이론들을 바탕으로 음악을 작곡하거나 편곡하려는 시도가 생겨났고, 현재까지도 많은 연구가 진행되고 있다. 본 논문에서는 악보 이미지를 입력받아 알고리즘을 통해 자동 편곡한 음악 파일을 출력할 수 있도록 하는 악보 인식 기반 자동 편곡 시스템을 제안하였다. 광학 음악 인식을 통해 악보를 컴퓨터가 이해하기 쉬운 데이터 형태로 변환하였고, 멜로디를 기반으로 코드를 생성함으로써 편곡 시스템의 일부분을 구현하였다. 코드를 생성하는 작업에는 실제 악곡의 멜로디와 코드를 기반으로 심층 신경망을 사용하였다. 코드를 생성하는 데에는 다양한 선택지가 있음에도 불구, 실제 악곡과의 비교에서 약 55%의 일치율을 보였다."] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "컴퓨터공학부졸업논문집",
            subtitle: "광학 음악 인식 기반 자동 편곡 시스템",
            period: "2020.11.28",
            link: "",
            desc: [
                { main: "구분 : Thesis", sub: ["4차 산업혁명이 진행되며 인공지능이 다양한 분야에서 활용되고 있다. 음악 분야 또한 인공지능과의 융합에 많은 연구가 진행되고 있다. 한편 사회 전반적으로 음악에 대한 수요는 꾸준히 늘고 있으며, 그중에서도 편곡에 대한 관심이 늘고 있다. 다만 편곡 작업은 진입장벽이 높아, 전공자가 아닌 일반인들이 시도하기에는 어려움이 있다. 이에 따라 본 논문에서는 광학 음악 인식 기반 자동 편곡 시스템을 제안한다. 편곡을 위한 데이터 확보를 위해 광학 음악 인식을 사용하였고 편곡 과정 중, 화성 생성의 경우 멜로디에 기반한 신경망 기법을 사용하였다. 제안한 광학 음악 인식 기법은 복잡도 ‘하’에 해당하는 악보 20장에 대해 95%의 인식률을 보였으며 신경망을 통해 생성된 화성들은 화성학에 근거하여 실제 편곡에 적용할 수 있음을 확인하였다."] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "한국지능시스템학회 30주년 기념 2020 추계학술대회",
            subtitle: "광학 음악 인식 기반 자동 편곡 시스템",
            period: "2020.11.28",
            link: "",
            desc: [
                { main: "구분 : Conference", sub: ["인공지능에 대한 관심과 활용이 증가함에 따라 4차 산업혁명의 주요 기술로 각광받고 있다. 음악분야에서도 인공지능과의 융합에 많은 연구가 활발히 진행되고 있다. 본 논문에서는 광학음악인식 기반 자동 편곡 시스템을 제안한다. 편곡에는 템포 조절, 조옮김, 화성 생성과 같은 다양한 과정이 포함된다. 편곡을 위한 데이터 확보를 위해 광학 음악 인식을 사용하였고 멜로디에 어울리는 화성을 생성하기 위해 신경망 기법을 사용하였다. 생성된 화성들은 화성학에 근거하여 실제 편곡에 적용시킬 수 있음을 확인하였다."] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "발명 특허 출원",
            subtitle: "악보 인식 기반 편곡 장치 및 악보 인식 기반 편곡 방법",
            period: "2020.11.10",
            link: "",
            desc: [
                { main: "구분 : Patent", sub: ["본 발명은 악보 인식 기반 편곡 장치 및 방법에 관한 것으로, 더 상세하게는 광학 인식 알고리즘을 이용하여 악보로부터 데이터를 추출하고, 추출된 데이터를 편집함으로써 사용자가 쉽게 악보를 편곡하도록 제공하며, 편곡된 음악을 파일로 제공받도록 하는 악보 인식 기반 편곡 장치 및 방법에 관한 것이다."] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "ICCT2020 SCOPUS",
            subtitle:
                "Computer-Vision-based Advanced Optical Music Recognition System",
            period: "2020.08.31",
            link: "http://www.aspbs.com/ctn/contents-ctn2021.htm",
            desc: [
                { main: "구분 : SCOPUS", sub: ["Computer vision is an artificial intelligence technology that studies techniques for extracting information from images. Several studies have been performed to identify and edit music scores using computer vision. This study proposes a system to identify musical notes and print arranged music. Music is produced by general rules; consequently, the components of music have specific patterns. There are four approaches in pattern recognition that can be used classify images using patterns. Our proposed method of identifying music sheets is as follows. Several pretreatment processes (image binary, noise and staff elimination, image resizing) are performed to aid the identification. The components of the music sheet are identified by statistical pattern recognition. Applying an artificial intelligence model (Markov chain) to extracted music data aids in arranging the data. From applying the pattern recognition technique, a recognition rate of 100% was shown for music sheets of low complexity. The components included in the recognition rate are signs, notes, and beats. However, there was a low recognition rate for some music sheet and can be addressed by adding a classification to the navigation process. To increase the recognition rate of the music sheet with intermediate complexity, it is necessary to refine the pre-processing process and pattern recognition algorithm. We will also apply neural network-based models to the arrangement process."] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title:
                "The 10th International Conference on Convergence Technology in 2020",
            subtitle:
                "Advanced Optical Music Recognition System for Automatic Arrangement",
            period: "2020.07.09",
            link: "",
            desc: [
                { main: "구분 : Conference", sub: ["In general, the demand for music is increasing among them; the demand and interest for remake songs are increasing. However, the skill related to the arrangement is difficult to learn, and its quantity has been recognized only as an expert area. On the other hand, AI (artificial intelligence) is active in many fields, among which music-related AI is also in the spotlight. In this paper, we proposed the contents of the development of a system that makes it easy for the general public who is not a music major to arrange music using computer vision and machine learning technology easily. Initially, a template matching algorithm was applied to score recognition. However, there was a problem with a low recognition rate. In order to solve the problem, we proposed advanced optical music recognition with high versatility."] }
            ],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const education = {
    subject: "Education",
    contents: [
        {
            title: "동서대학교 졸업",
            subtitle: "전 : 컴퓨터공학전공 / 부 : AI공학전공",
            period: "2014.03 ~ 2021.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "부산남일고등학교 졸업",
            subtitle: "부산광역시 수영구 망미동",
            period: "2011.03 ~ 2014.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const certificate = {
    subject: "Certificate",
    contents: [
        {
            title: "정보처리기사",
            subtitle: "한국산업인력공단",
            period: "2021.06.02",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "컴퓨터활용능력 1급",
            subtitle: "대한상공회의소 자격평가사업단",
            period: "2020.03.13",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
        {
            title: "워드프로세서",
            subtitle: "대한상공회의소 자격평가사업단",
            period: "2020.02.07",
            link: "",
            desc: [],
            keywords: [],
            folder: "",
            images: [],
            pdfs: []
        },
    ],
};

export const footer = { updated: "2021. 10. 11." };

export const main = [experience, projects, awards, research, education, certificate]