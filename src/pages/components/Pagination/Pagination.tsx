import { FC, MouseEventHandler } from 'react';
import PieceOfPagination from './PieceOfPagination';

interface IProps {
    limit: number;
    page: number;
    total: number;
    onChange: (page: number) => void;
    onSizeChange: (page: number) => void;
    isLoading?: boolean;
}

const Pagination: FC<IProps> = (props) => {
    const { limit, page, total, onChange, onSizeChange, isLoading } = props;
    const totalPage = Math.ceil(total / limit);
    const handlePreviousPage: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (totalPage > 1 && page > 1) {
            console.log('clicked');
            onChange(page - 1);
        }
    };

    const handleNextPage: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        e.stopPropagation();

        if (page < totalPage) {
            onChange(page + 1);
        }
    };

    return (
        <div className='mt-6 flex justify-end'>
            <nav className='flex items-center gap-x-1'>
                <button
                    disabled={isLoading}
                    type='button'
                    className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
                    onClick={handlePreviousPage}
                >
                    <svg
                        className='flex-shrink-0 size-3.5'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    >
                        <path d='m15 18-6-6 6-6'></path>
                    </svg>
                    {/* <span>&#10094;</span> */}
                </button>
                <div className='flex items-center gap-x-1'>
                    <PieceOfPagination {...props} />
                </div>
                <button
                    disabled={isLoading}
                    onClick={handleNextPage}
                    type='button'
                    className='min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10'
                >
                    {/* <span>&#10095;</span> */}
                    <svg
                        className='flex-shrink-0 size-3.5'
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                    >
                        <path d='m9 18 6-6-6-6'></path>
                    </svg>
                </button>
            </nav>
        </div>
    );
};

export default Pagination;
