function LaptopCard({ laptop, os, batteryHealth, staff_view }) {
    return (
        <div className="p-5 flex flex-col gap-1 rounded-xl border-2 border-neutral-300">
            <img
                className="p-5 mb-3 bg-neutral-400 rounded-lg"
                src="/laptop.png"
                alt="Laptop Picture"
            />
            <h3 className="text-lg font-semibold">{laptop}</h3>
            <p className="font-normal">{os}</p>
            <p className="font-normal">{batteryHealth}%</p>
            <div
                className={`flex justify-around ${staff_view === false ? "hidden" : ""}`}
            >
                <button className="px-5 py-2 rounded-lg text-neutral-50 bg-red-600">
                    Delete Laptop
                </button>
            </div>
            <div
                className={`flex justify-around ${staff_view === true ? "hidden" : ""}`}
            >
                <a href="/client/browse/checkout">
                    <button className="px-5 py-2 rounded-lg text-neutral-50 bg-red-600">
                        Checkout
                    </button>
                </a>
            </div>
        </div>
    );
}

export default LaptopCard;
