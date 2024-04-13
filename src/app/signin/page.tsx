import Image from "next/image"
import Link from "next/link"

import { TextInput, Button } from "@mantine/core"

import { IconUser, IconKey, IconEye, IconEyeClosed } from "@tabler/icons-react"

import FitmLogo from "@matzah/assets/images/fitm-logo.png"
import IcitLogo from "@matzah/assets/images/icit-logo.png"

export default function Signin () {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="p-4 md:p-8 flex flex-col justify-center items-center w-full 2xl:max-w-[30vw] xl:max-w-[40vw] lg:max-w-[50vw] md:max-w-[70vw] sm:max-w-[90vw]">
                <Image src={FitmLogo} alt="FITM Logo" className="filter max-w-60" />

                <h1 className="text-2xl font-bold text-center">เข้าร่วมการใช้งานคลาวด์แพลตฟอร์ม</h1>
                <span className="text-xs text-center text-gray-400">แพลตฟอร์มคลาวด์ของ คณะเทคโนโลยีและการจัดการอุตสาหกรรม</span>
                <span className="text-xs text-center text-gray-400">สำหรับการเรียนรู้และการจัดทำโปรเจกต์เพื่อนักศึกษาและบุคลากร</span>

                <div className="w-full py-8">
                    <div className="flex flex-col gap-1">
                        <span>ยูสเซอร์เนม</span>
                        <span className="text-xs text-gray-400">ยูสเซอร์เนมของนักศึกษาหรือบุคลากร</span>
                        <TextInput className="w-full shadow" placeholder="ยูสเซอร์เนมที่มาจาก account.kmutnb.ac.th" leftSection={<IconUser />} name="username" />
                    </div>

                    <div className="flex flex-col gap-1 mt-4">
                        <span>รหัสผ่าน</span>
                        <span className="text-xs text-gray-400">รหัสผ่านของนักศึกษาหรือบุคลากร</span>
                        <TextInput className="w-full shadow" placeholder="รหัสผ่านที่คุณได้ตั้งค่าไว้" leftSection={<IconKey />} type="password" name="password" />
                    </div>

                    <div className="flex flex-col items-center mt-8 gap-4">
                        <span className="text-xs text-gray-500">คุณยังไม่มีบัญชี ICIT Account ของมหาลัย?, 
                            <a href="https://account.kmutnb.ac.th" target="_blank" className="text-blue-500 underline">เปิดการใช้งาน</a>
                        </span>

                        <Button className="w-full flex flex-row items-center justify-center shadow" color="blue">
                            เข้าสู่ระบบด้วยบัญชี
                            <Image src={IcitLogo} className="w-12 ml-2" alt="ICIT Logo" />
                        </Button>
                    </div>
                </div>

                <span className="text-xs text-gray-400 mt-8 text-center">
                    การเข้าใช้งานแพลตฟอร์มของคณะมี 
                    <Link href="/terms-of-services" className="text-black underline px-1">
                        Terms of Service
                    </Link>
                    ที่คุณจำเป็นต้องรู้
                </span>
            </div>
        </div>
    )
}