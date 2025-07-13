function LaptopCheckout({ laptop, os, batteryHealth }) {
    const daysTillDeadline = 7;
    const date = new Date();
    date.setDate(date.getDate() + daysTillDeadline);

    return (
        <div className="px-30 py-20 border-y-2 border-neutral-300 flex items-center justify-center gap-20">
            <img
                src="/laptop.png"
                alt=""
                className="p-10 h-[300px] rounded-lg bg-neutral-400"
            />
            <div className="py-10 flex flex-col gap-5">
                <h3 className="text-3xl font-bold">{laptop}</h3>
                <ul className="text-neutral-700">
                    <li>Operating System: {os}</li>
                    <li>Battery Health: {batteryHealth}%</li>
                    <li>Return Date: {date.toDateString()}</li>
                </ul>
                <div className="pt-5 flex flex-col gap-2">
                    <p className="text-center text-sm text-neutral-600">
                        To be picked up at the counter
                    </p>
                    <button className="w-full text-lg py-2 bg-neutral-900 text-neutral-50 rounded-lg">
                        Borrow
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LaptopCheckout;
