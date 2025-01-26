import { MdOutlineQuestionMark } from "react-icons/md";
import { BsHeadsetVr } from "react-icons/bs";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface BuildProps {
    setOpen: Function
}

export default function Build({setOpen}: BuildProps) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await fetch("/data.json")
            const snapshot = await request.json()
            setData(snapshot)
        }
        fetchData()
    }, [])

    return (
        <div className="w-full min-h-screen px-16 py-8">
            <h1 className="font-bold text-center text-4xl">
                Build Your Toyota
            </h1>
            <p className="text-center px-4 mt-4 mb-8">
                Your all in one VR shopping experience. Customize your Toyota either in the web app or with our state of the art VR technology for a more personal touch.
            </p>
            <div className="w-full grid grid-cols-3 gap-8">
            {
                data.map((vehicles:any) => (
                    <BuildCard
                        key={vehicles.model}
                        model={vehicles.model}
                        msrp={vehicles.msrp}
                        img={vehicles.img}
                        setOpen={setOpen}
                        drivetrains={vehicles.drivetrains}
                        seating={vehicles.seating}
                        transmissions={vehicles.transmissions}
                    />
                ))
            }
            </div>
        </div>
    )
}

interface BuildCardProps {
    model: string;
    msrp: string;
    img: string;
    setOpen: any;
    drivetrains: string[];
    seating: number;
    transmissions: string[];
}

function BuildCard({model, msrp, img, setOpen, drivetrains, seating, transmissions}: BuildCardProps) {

    return (
        <div className="w-full flex flex-col gap-y-2">
            <div className="relative overflow-hidden rounded-md w-full bg-neutral-200">
                <img
                    src={img}
                    alt="vehicle image"
                />
                <div className="absolute top-0 left-0 bg-black/20 w-full h-full">
                </div>
                <button onClick={() => setOpen(<BuildCardModal drivetrains={drivetrains} seating={seating} transmissions={transmissions}/>)} type="button" className="absolute top-2 left-2 p-1 rounded-full border-2 bg-white/20 backdrop-blur-lg cursor-pointer hover:bg-white/40 transition-all duration-300">
                    <MdOutlineQuestionMark />
                </button>
                <NavLink to="/vrloader" className="absolute right-2 bottom-2 flex gap-x-2 items-end px-4 py-1 rounded-full border-2 bg-white/20 backdrop-blur-lg cursor-pointer hover:bg-white/40 transition-all duration-300">
                    <BsHeadsetVr/>
                    Build in VR
                </NavLink>
            </div>
            <div className="flex flex-col gap-y-1">
                <h1 className="text-lg font-bold">{model}</h1>
                <p className="font-semibold">${msrp} MSRP</p>
            </div>
        </div>
    )
}

interface BuildCardModalProps {
    drivetrains: string[];
    seating: number;
    transmissions: string[];
}

function BuildCardModal({drivetrains, seating, transmissions}: BuildCardModalProps) {
    return (
        <div className="w-full flex flex-col gap-y-4">
            <div className="w-full flex flex-col">
                <p className="text-sm">Drivetrain</p>
                <p className="font-bold">
                {
                    drivetrains.map((drivetrain:string, i: number) => (
                        (i == drivetrains.length-1) ? drivetrain : <>{drivetrain}<span className="text-red-400">,</span> </>
                    ))
                }
                </p>
            </div>
            <div className="w-full flex flex-col">
                <p className="text-sm">Transmission</p>
                <p className="font-bold">
                {
                    transmissions.map((transmission:string, i: number) => (
                        (i == transmissions.length-1) ? transmission: <>{transmission}<span className="text-red-400">,</span> </>
                    ))
                }
                </p>
            </div>
            <div className="w-full flex flex-col">
                <p className="text-sm">Seating</p>
                <p className="font-bold">Up to {seating}</p>
            </div>
        </div>
    )
}
