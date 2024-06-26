import { Dispatch, FC, ReactNode, SetStateAction } from 'react';

interface IProps {
    children: ReactNode;
    title: ReactNode;
    size?: 'sm' | 'md' | 'xl';
    setIsShowModal: Dispatch<SetStateAction<boolean>>;
}

const Dialog: FC<IProps> = (props) => {
    const { children, title, size, setIsShowModal } = props;
    let sizeBtn: string = '';
    if (size === 'sm') sizeBtn = 'w-[400px]';
    else if (size === 'xl') sizeBtn = 'w-[550px]';
    else sizeBtn = 'w-[500px]';

    return (
        <>
            {
                <>
                    <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            {/*content*/}
                            <div className='w-[500px] bg-white '>
                                {/*header*/}
                                <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                                    <h3 className='text-3xl font-semibold'>{title}</h3>
                                    <button
                                        className='p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                                        onClick={() => setIsShowModal(false)}
                                    >
                                        <span className='bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className='p-4 border-t border-solid border-blueGray-200 rounded-b'>
                                    {children}
                                </div>
                                {/*footer*/}
                                {/* <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                                    <button
                                        className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                        type='button'
                                        onClick={() => setIsShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                                        type='button'
                                        onClick={() => setIsShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
            }
        </>
    );
};

export default Dialog;
