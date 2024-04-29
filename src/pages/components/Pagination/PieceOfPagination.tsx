import { FC, MouseEventHandler, useEffect } from 'react';

interface IProps {
    limit: number;
    page: number;
    total: number;
    onChange: (page: number) => void;
    onSizeChange: (page: number) => void;
    isLoading?: boolean;
}

const PieceOfPagination: FC<IProps> = (props) => {
    const { limit, page, total, onChange, onSizeChange, isLoading } = props;
    const totalPage = Math.ceil(total / limit);
    useEffect(() => {
        console.log({ page, total, totalPage, limit });
    }, [props]);
    const handleChangePage = (page: number) => {
        onChange(page);
    };

    if (totalPage <= 1) {
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
                        className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500'
                        aria-current='page'
                    >
                        {index + 1}
                    </button>
                ))}
            </>
        );
    } else if (totalPage < page - 10 && page > 10) {
        console.log('comin');
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
                        className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500'
                        aria-current='page'
                    >
                        {index + 1}
                    </button>
                ))}
            </>
        );
    } else {
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
                        className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500'
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
                    className='min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-600 dark:text-white dark:focus:bg-neutral-500'
                    aria-current='page'
                >
                    {totalPage}
                </button>
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
