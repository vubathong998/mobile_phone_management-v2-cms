import { cilPlus } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { FC, Fragment, useEffect, useState } from 'react';
import { CategoriesGetByPageRequest } from '~/models/Categories/CategoriesRequest';
import Dialog from '~/pages/components/UI/Dialog';
import Pagination from '~/pages/components/Pagination/Pagination';
import { useCategoriesGetByPageQuery } from '~/services/categories';
import CreateCategory from './components/CreateCategory';
import DateObject from 'react-date-object';
import { PERMISSION } from '~/constants/permission';
import Button from '~/pages/components/UI/Button';
import { swalFireToastSuccess } from '~/utils/swalFire';
import { useSearchParams } from 'react-router-dom';
import objectToQueryString from '~/utils/objectToQueryString';
import { withPermission } from '~/utils/withPermission';

// import { RouteMa

interface IProps {}

const PageCategory: FC<IProps> = () => {
    const [params, setParams] = useSearchParams();
    const [request, setRequest] = useState<CategoriesGetByPageRequest>({
        page: parseInt(params.get('page') as string) || 1,
        limit: parseInt(params.get('limit') as string) || 10
    });
    const { data, isLoading, isFetching, refetch } = useCategoriesGetByPageQuery(request);

    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const handleChangePage = (page: number) => {
        // const dataSetParams: CategoriesGetByPageRequest = {
        //     limit: request?.limit || 10,
        //     page: request?.page || 1,
        //     FieldName: request.FieldName || 'createdByDate',
        //     keyword: request.keyword || '',
        //     orderBy: request.orderBy || FilterOrderByEnum.ASC
        // };
        // console.log({ request });

        // setRequest((old) => ({
        //     ...old,
        //     page: page
        // }));
        const dataSetParams: string = objectToQueryString({ ...request, page });
        setParams(dataSetParams);
    };

    const handleAfterCreate = () => {
        setIsShowModal(false);
        refetch();
        swalFireToastSuccess({});
    };

    useEffect(() => {
        setRequest({
            page: parseInt(params.get('page') as string) || 1,
            limit: parseInt(params.get('limit') as string) || 10
        });
    }, [params]);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-end'>
                {/* <button
                    type='button'
                    className='bg-primary-700 text-white px-3 py-1 rounded flex items-center gap-1'
                    onClick={() => setIsShowModal(true)}
                >
                    <CIcon icon={cilPlus} style={{ width: '20px' }} />
                    Thêm category
                </button> */}
                <Button
                    disabled={isLoading || isFetching}
                    type='button'
                    onClick={() => setIsShowModal(true)}
                    className='flex gap-1 items-center'
                >
                    <CIcon icon={cilPlus} style={{ width: '20px' }} />
                    Thêm loại hàng
                </Button>
                {isShowModal && (
                    <Dialog title={'Thêm category'} setIsShowModal={setIsShowModal}>
                        <CreateCategory afterCreate={handleAfterCreate} />
                    </Dialog>
                )}
            </div>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th className='border px-6 py-3 w-20 text-center'>Stt</th>
                        <th className='border text-left px-6 py-3'>name</th>
                        <th className='border text-left px-6 py-3 w-20'>Người tạo</th>
                        <th className='border text-left px-6 py-3 w-20'>Ngày tạo</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {data?.result &&
                            data.result.map((category, index) => (
                                <Fragment key={category._id}>
                                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                        <td className='border px-6 py-3 w-20 text-center'>{index + 1}</td>
                                        <td className='border px-6 py-3'>{category.categoryName}</td>
                                        <td className='border px-6 py-3 w-20'>{category.createdByName}</td>
                                        <td className='border px-6 py-3 w-20'>
                                            {new DateObject({ date: category.createdByDate }).format('DD/MM/YYYY')}
                                        </td>
                                    </tr>
                                </Fragment>
                            ))}
                    </>
                </tbody>
            </table>
            <Pagination
                limit={request.limit}
                page={request.page}
                total={data?.total || 1}
                onChange={handleChangePage}
                onSizeChange={(limit) => {
                    const dataSetParams: string = objectToQueryString({ ...request, limit, page: 1 });
                    setParams(dataSetParams);
                }}
            />
        </div>
    );
};

export default withPermission(PageCategory, [PERMISSION.Admin, PERMISSION.Category]);
