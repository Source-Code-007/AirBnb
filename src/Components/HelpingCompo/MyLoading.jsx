import Lottie from "lottie-react";
import lottieLoading from '/public/assets/lottie/My-Planner-Lottie.json'

const MyLoading = ({className, loop}) => {
    return (
        <div className='flex items-center justify-center'>
            <Lottie animationData={lottieLoading} loop={loop !== 'undefined'? loop : true} className={`${className? className : 'h-20 w-20'}`} />
        </div>
    );
};

export default MyLoading;