import { OFFLINE } from "../utils/constants";

const Offline = () =>{

    return(
        <div >
            <div className=" flex justify-center mt-[75px]">
                <img                
                    className = "w-[400px] h-[400px]"
                    src = {OFFLINE}
                />
            </div>
            <div className="flex justify-center mt-[10px]">
                <p className="font-semibold italic text-2xl mb-4">It seems that you are offline. Please check your connection.</p>
            </div>
        </div>
    );
};

export default Offline;