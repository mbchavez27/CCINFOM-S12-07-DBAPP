function Footer() {
    return (
        <div className="flex gap-20 p-7.5">
            <img src="../../public/images.png" alt="" className="h-10" />
            <div className="flex flex-col gap-5">
                <h5 className="font-semibold">Explore</h5>
                <div className="flex flex-col gap-2 text-neutral-600">
                    <p>Rental</p>
                    <p>Contact</p>
                    <p>About</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
