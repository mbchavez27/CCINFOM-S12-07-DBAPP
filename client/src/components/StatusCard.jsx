function StatusCard() {
    return (
        <div className="w-75 border-2 border-neutral-400 rounded-md p-5 flex flex-col">
            <h1 className="mb-3 font-bold text-2xl">0</h1>
            <div>
                <p className="text-neutral-600 text-sm font-medium">
                    Laptops Available
                </p>
                <p className="text-neutral-600 text-sm ">
                    # of laptops available for rent
                </p>
            </div>
        </div>
    );
}

export default StatusCard;
