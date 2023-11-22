import { BiLogoDailymotion } from "react-icons/bi"
import { PiYoutubeLogoBold } from "react-icons/pi"
import { GiClothes } from "react-icons/gi"
import { TbHanger } from "react-icons/tb"

import { AiFillGithub } from "react-icons/ai"
import { AiFillCodepenCircle } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { AiOutlineInstagram } from "react-icons/ai"

export const menuText = [
    {
        title: "패션 유튜버 홈",
        icon: <GiClothes />,
        src: "/",
    },
    {
        title: "오늘의 추천 pick!",
        icon: <BiLogoDailymotion />,
        src: "/today",
    },
    {
        title: "패션 유튜버 모음",
        icon: <PiYoutubeLogoBold />,
        src: "/fashion",
    }
]

export const keywordText = [
    {
        title: "미지우 MEJIWOO",
        src: "/search/미지우",
        icon: <TbHanger />
    },
    {
        title: "엘피디LPD",
        src: "/search/엘피디LPD",
        icon: <TbHanger />
    },
    {
        title: "깡스타일리스트",
        src: "/search/깡스타일리스트",
        icon: <TbHanger />
    },
    {
        title: "도영도영이",
        src: "/search/도영도영이",
        icon: <TbHanger />
    },
    {
        title: "오늘의 주우재",
        src: "/search/오늘의 주우재",
        icon: <TbHanger />
    },
    {
        title: "아름송이",
        src: "/search/아름송이",
        icon: <TbHanger />
    },
    {
        title: "옆집언니 최실장",
        src: "/search/옆집언니 최실장",
        icon: <TbHanger />
    },
    {
        title: "VOGUE KOREA",
        src: "/search/VOGUE KOREA",
        icon: <TbHanger />
    },
    {
        title: "CHAESO 채소",
        src: "/search/CHAESO 채소",
        icon: <TbHanger />
    },
    {
        title: "핏더사이즈",
        src: "/search/핏더사이즈",
        icon: <TbHanger />
    },
    {
        title: "뀨tv",
        src: "/search/뀨tv",
        icon: <TbHanger />
    },
    {
        title: "연두콩",
        src: "/search/연두콩",
        icon: <TbHanger />
    },
    {
        title: "스타일가이드 최겨울",
        src: "/search/스타일가이드 최겨울",
        icon: <TbHanger />
    },
    {
        title: "앨리스펑크",
        src: "/search/앨리스펑크",
        icon: <TbHanger />
    },
    {
        title: "쭈디 Judy",
        src: "/search/쭈디 Judy",
        icon: <TbHanger />
    },
    {
        title: "디렉터 짱구대디",
        src: "/search/디렉터 짱구대디",
        icon: <TbHanger />
    },
    {
        title: "leeanfilm리안",
        src: "/search/leeanfilm리안",
        icon: <TbHanger />
    },
    {
        title: "이블린",
        src: "/search/이블린",
        icon: <TbHanger />
    }
]

export const snsText = [
    {
        title: "github",
        src: "https://github.com/uUZINN",
        icon: <AiFillGithub />
    },
    {
        title: "Codepen",
        src: "https://github.com/uUZINN",
        icon: <AiFillCodepenCircle />
    },
    {
        title: "Youtube",
        src: "https://github.com/uUZINN",
        icon: <AiFillYoutube />
    },
    {
        title: "Instagram",
        src: "https://instagram.com/uu_jinn57?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
        icon: <AiOutlineInstagram />
    }
]