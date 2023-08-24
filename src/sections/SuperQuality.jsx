import { shoe8 } from "../assets/images";
import { Button } from "../components";



const SuperQuality = () => {
    return (
        <section 
            id='about-us'
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div>
                <h2 className="text-4xl font-palanquin capitalize lg:max-w-lg font-bold">
                    We Provide You
                    <span className="text-coral-red"> Super </span>
                    <span className="text-coral-red">Quality </span> Shoes
                </h2>

                <p className="mt-4 lg:max-lg info-text">
                Ensuring premium comfort and style, our meticulously crafted footwear
                is designed to elevate your experience, providing you with unmatched
                quality, innovation, and a touch of elegance.
                </p>

                <p className="mt-6 lg:max-w-lg info-text">
                    Our decication to detail and excellence ensures your satisfaction
                </p>

                <div className="mt-11">
                    <Button label='View details'/>
                </div>
            </div>

            <div>
                <img 
                    src={shoe8}
                    alt='product detail'
                    width={570}
                    height={523}
                    className="object-contain"
                />
            </div>
        </section>
    )
}

export default SuperQuality;