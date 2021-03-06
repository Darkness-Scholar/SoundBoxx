import { useRecoilValue, useRecoilState } from "recoil"
import { showSign, auth } from "../root/var"
import { BiNews } from "react-icons/bi"
import { useNavigate, Link } from "react-router-dom"
import { FiRadio, FiUser, FiMusic } from "react-icons/fi"
import { GiChemicalDrop } from "react-icons/gi"
import { MdOutlineExplore, MdAutoStories, MdOutlineStackedLineChart, MdSubscriptions } from "react-icons/md"

/** @type { comps } descript: { none } */
export default function Sidebar({remote}) {

    const [__showSign__, $showSign] = useRecoilState(showSign)
    const __auth__ = useRecoilValue(auth)
    const nav = useNavigate()

    return <div className="lg:top-0 w-full lg:w-[230px] h-[60px] lg:h-[100vh] bg-gray-800 p-3 lg:p-6">

        <div className="logo hidden lg:flex my-2 items-center ml-3 gap-2 text-white">
            <FiRadio className="text-2xl font-bold" />
            <Link to="/" className="text-2xl font-bold text-white">SoundBox</Link>
        </div>

        <ul className="menu my-2 flex flex-row lg:flex-col justify-center">
            <Sidebar.Item onClick={__auth__?()=>nav("/user"):() => $showSign(true)} icon={<FiUser className="text-2xl" />} text={__auth__?"Cá nhân":"Đăng nhập"} />
            <Sidebar.Item icon={<MdOutlineExplore className="text-2xl" />} text={"Khám phá"} path={"/"} />

            <Link to="/" className="lg:hidden text-2xl text-white font-bold px-6">Soundbox</Link>
            
            <Sidebar.Item icon={<MdSubscriptions className="text-2xl" />} text={"Theo dõi"} />
            <Sidebar.Item onClick={() => remote(true)} icon={<MdOutlineStackedLineChart className="text-2xl" />} text={"Remote"} />
            
        </ul>

        <ul className="menu my-6 hidden lg:flex lg:flex-col ">
            <Sidebar.Item icon={<BiNews className="text-2xl" />} text={"Nhạc rap"} path="/category=Nhạc rap" />
            <Sidebar.Item icon={<FiMusic className="text-2xl" />} text={"Truyện ma"} path="/category=Truyện ma" />
            <Sidebar.Item icon={<MdAutoStories className="text-2xl" />} text={"Kinh doanh"} path="/category=Kinh doanh" />
            <Sidebar.Item icon={<GiChemicalDrop className="text-2xl" />} text={"Khoa học"} path="/category=Khoa học" />
        </ul>
    </div>
}

Sidebar.Item = function _Item_({ icon, text, path, ...props }) {

    return <li {...props} >
        <div className="cursor-pointer flex items-center p-2 text-base rounded-lg dark:text-white hover:bg-red-200 dark:hover:bg-red-700">
            {icon}
            <span className="hidden lg:flex flex-1 ml-3 whitespace-nowrap">{text}</span>
        </div>
    </li>
}