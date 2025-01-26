import { MdOutlineQuestionMark } from "react-icons/md";
import { BsHeadsetVr } from "react-icons/bs";
import { useEffect, useState } from "react";

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
            <div className="w-full flex justify-center gap-8">
            {
                data.map((vehicles:any) => (
                    <BuildCard
                        key={vehicles.model}
                        model={vehicles.model}
                        msrp={vehicles.msrp}
                        img={vehicles.img}
                        setOpen={setOpen}
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
}

function BuildCard({model, msrp, img, setOpen}: BuildCardProps) {
    return (
        <div className="w-80 flex flex-col gap-y-2">
            <div className="relative overflow-hidden rounded-md w-full bg-neutral-200">
                <img
                    src={img}
                    alt="vehicle image"
                />
                <div className="absolute top-0 left-0 bg-black/20 w-full h-full">
                </div>
                <button onClick={() => setOpen(model)} type="button" className="absolute top-2 left-2 p-1 rounded-full border-2 bg-white/20 backdrop-blur-lg cursor-pointer hover:bg-white/40 transition-all duration-300">
                    <MdOutlineQuestionMark />
                </button>
                <button type="button" className="absolute right-2 bottom-2 flex gap-x-2 items-end px-4 py-1 rounded-full border-2 bg-white/20 backdrop-blur-lg cursor-pointer hover:bg-white/40 transition-all duration-300">
                    <BsHeadsetVr/>
                    Try in VR
                </button>
            </div>
            <div className="flex flex-col gap-y-1">
                <h1 className="text-lg font-bold">{model}</h1>
                <p className="font-semibold">${msrp} MSRP</p>
            </div>
        </div>
    )
}
