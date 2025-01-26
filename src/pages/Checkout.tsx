import { useNavigate, useSearchParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function Checkout() {

    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };

    const [searchParams] = useSearchParams();
    const model = searchParams.get("model")
    const msrp = searchParams.get("msrp")

    return (
        <div className="relative bg-white text-black flex w-screen h-screen overflow-x-hidden gap-x-12 items-center justify-center text-center p-16">
            <button type="button" onClick={handleGoBack} className="z-100 fixed top-4 left-4 bg-black text-white rounded-md cursor-pointer px-3 py-2">
                <FaArrowLeftLong />
            </button>
            <img className="h-60 rounded-md" src={`https://tmna.aemassets.toyota.com/is/image/toyota/toyota/lifestyle/relative/2025/grsupra/SUP_MY25_0001_V001.png?wid=600&fmt=webp-alpha`} alt="purchased vehicle"/>
            <div className="w-[426px] h-60 rounded-md bg-gray-200 px-4 py-8 flex justify-center items-center flex-col">
                <p className="font-bold">Your 2025</p>
                <h1 className="text-4xl font-bold mt-2">{model}</h1>
                <p className="text-xl font-bold mt-6">${msrp?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p className="text-sm text-neutral-600">Total Amount as Built*</p>
            </div>
        </div>
    )
}
