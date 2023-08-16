import Modal from "../components/Modal";
import Button from "../components/Button";
import {useState} from 'react';
function ModalPage(){
    const [showModal, setShowModal] = useState(false);

    const handleClick = ()=>{
        setShowModal(true);
    };

    const handleClose = ()=>{
        setShowModal(false);
    };

    const actionBar = <div>
        <Button onClick={handleClose} primary>I accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
        </Modal>;

    return(
        <div className="relative">
            
            <Button onClick={handleClick} primary>Open Modal</Button>
            {showModal ? modal: null}

            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a est consectetur, pretium mauris sit amet, hendrerit dui. Aliquam vel bibendum diam. Proin vulputate mollis lorem, nec tristique nibh cursus ac. Donec quis leo a sapien malesuada gravida eget et orci. Aenean dignissim condimentum ligula. Proin facilisis nisi sit amet nibh convallis sodales. Maecenas volutpat, urna mollis finibus feugiat, nibh mi ornare lacus, nec dignissim leo erat sed metus. Sed rhoncus purus sed justo lobortis rhoncus. Fusce volutpat rhoncus urna, nec sodales orci fermentum nec.
            </p>

        </div>
    );
}
export default ModalPage;