import { FC, MouseEventHandler, useEffect } from 'react';

interface IProps {
    limit: number;
    page: number;
    total: number;
    onChange: (page: number) => void;
    isLoading?: boolean;
}

const PieceOfPagination: FC<IProps> = (props) => {
    const { limit, page, total, onChange, isLoading } = props;
    const totalPage = Math.ceil(total / limit);
    useEffect(() => {
        console.log({ page, total, totalPage, limit });
    }, [props]);
    const handleChangePage = (page: number) => {
        onChange(page);
    };

    if (totalPage <= 1) {
        console.log('case 1');
        return (
            <button
                disabled={isLoading}
                type='button'
                className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500'
                aria-current='page'
            >
                1
            </button>
        );
    } else if (totalPage <= 10) {
        console.log('case 2');
        let arrayTotalPageForMap: Array<string> = [];
        for (let i = 0; i < totalPage; i++) {
            arrayTotalPageForMap.push('');
        }
        return (
            <>
                {arrayTotalPageForMap?.map((val, index) => (
                    <button
                        key={index}
                        disabled={isLoading || index + 1 === page}
                        onClick={() => {
                            handleChangePage(index + 1);
                        }}
                        type='button'
                        className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${page - 1 === index ? 'bg-blue-300 !opacity-100 hover:!cursor-not-allowed' : 'bg-gray-200'} text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                        aria-current='page'
                    >
                        {index + 1}
                    </button>
                ))}
            </>
        );
    } else if (page < totalPage - 7 && page > 7) {
        console.log('case 3');
        let arrayTotalPageForMap: Array<string> = [];
        for (let i = 0; i < 10; i++) {
            arrayTotalPageForMap.push('');
        }
        return (
            <>
                <button
                    disabled={isLoading}
                    onClick={() => {
                        handleChangePage(1);
                    }}
                    type='button'
                    className={`min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                    aria-current='page'
                >
                    1
                </button>
                <button
                    // onClick={() => {
                    //     handleChangePage(index + 1);
                    // }}
                    type='button'
                    className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-transparent text-gray-800 py-2 px-3 text-sm rounded-lg hover:cursor-default'
                    aria-current='page'
                >
                    ...
                </button>
                {arrayTotalPageForMap?.map((val, index) => (
                    <button
                        key={index}
                        disabled={isLoading || index + page - 5 === page}
                        onClick={() => {
                            handleChangePage(index + page - 5);
                        }}
                        type='button'
                        className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${page === index + page - 5 ? 'bg-blue-300 !opacity-100 hover:!cursor-not-allowed' : 'bg-gray-200'} text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                        aria-current='page'
                    >
                        {index + page - 5}
                    </button>
                ))}
                <button
                    // onClick={() => {
                    //     handleChangePage(index + 1);
                    // }}
                    type='button'
                    className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-transparent text-gray-800 py-2 px-3 text-sm rounded-lg hover:cursor-default'
                    aria-current='page'
                >
                    ...
                </button>
                <button
                    disabled={isLoading}
                    onClick={() => {
                        handleChangePage(totalPage);
                    }}
                    type='button'
                    className={`min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                    aria-current='page'
                >
                    {totalPage}
                </button>
            </>
        );
    } else if (page < totalPage - 7) {
        console.log('case 5');
        let arrayTotalPageForMap: Array<string> = [];
        for (let i = 0; i < 10; i++) {
            arrayTotalPageForMap.push('');
        }
        return (
            <>
                {arrayTotalPageForMap?.map((val, index) => (
                    <button
                        key={index}
                        disabled={isLoading || index + 1 === page}
                        onClick={() => {
                            handleChangePage(index + 1);
                        }}
                        type='button'
                        className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${page === index + 1 ? 'bg-blue-300 !opacity-100 hover:!cursor-not-allowed' : 'bg-gray-200'} text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                        aria-current='page'
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    // onClick={() => {
                    //     handleChangePage(index + 1);
                    // }}
                    type='button'
                    className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-transparent text-gray-800 py-2 px-3 text-sm rounded-lg hover:cursor-default'
                    aria-current='page'
                >
                    ...
                </button>
                <button
                    disabled={isLoading}
                    onClick={() => {
                        handleChangePage(totalPage);
                    }}
                    type='button'
                    className={`min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                    aria-current='page'
                >
                    {totalPage}
                </button>
            </>
        );
    } else {
        console.log('case 5');
        let arrayTotalPageForMap: Array<number> = [];
        for (let i = totalPage - 10; i < totalPage; i++) {
            arrayTotalPageForMap.push(i + 1);
        }
        return (
            <>
                <button
                    disabled={isLoading}
                    onClick={() => {
                        handleChangePage(1);
                    }}
                    type='button'
                    className={`min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                    aria-current='page'
                >
                    1
                </button>
                <button
                    // onClick={() => {
                    //     handleChangePage(index + 1);
                    // }}
                    type='button'
                    className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-transparent text-gray-800 py-2 px-3 text-sm rounded-lg hover:cursor-default'
                    aria-current='page'
                >
                    ...
                </button>
                {arrayTotalPageForMap?.map((val, index) => (
                    <button
                        key={index}
                        disabled={isLoading || val === page}
                        onClick={() => {
                            handleChangePage(val);
                        }}
                        type='button'
                        className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${val === page ? 'bg-blue-300 !opacity-100 hover:!cursor-not-allowed' : 'bg-gray-200'} text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                        aria-current='page'
                    >
                        {val}
                    </button>
                ))}
                {/* <button
                    disabled={isLoading}
                    onClick={() => {
                        handleChangePage(totalPage);
                    }}
                    type='button'
                    className={`min-h-[38px] min-w-[38px] flex justify-center items-center ${page === total ? 'bg-blue-300 !opacity-100 hover:!cursor-not-allowed' : 'bg-gray-200'} text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500`}
                    aria-current='page'
                >
                    {totalPage}
                </button> */}
            </>
        );
    }
    // return (
    //     <button
    //         type='button'
    //         className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500'
    //         aria-current='page'
    //     >
    //         1
    //     </button>
    // );
};

export default PieceOfPagination;
