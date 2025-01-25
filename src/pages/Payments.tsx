import Sidebar from "../components/Sidebar";

export default function Payments()  {
    return (
        <div className="w-screen h-full overflow-x-hidden bg-black text-white">
            <Sidebar/>

            <div>
                <div>
                    <h1>Payment History</h1>
                    <button>
                        Make Payment
                    </button>
                </div>
            </div>
        </div>
    )
}
