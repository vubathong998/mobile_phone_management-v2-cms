import { FC, Fragment, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PERMISSION } from '~/constants/permission';
import { PhonesGetByPageRequest } from '~/models/Phones/PhonesRequest';
import { usePhonesGetByPageQuery } from '~/services/phone';
import { withPermission } from '~/utils/withPermission';
import Button from '../components/UI/Button';
import CIcon from '@coreui/icons-react';
import { cilPlus } from '@coreui/icons';
import Dialog from '../components/UI/Dialog';
import DateObject from 'react-date-object';
import { dotAfter3Digits } from '~/utils/function';

interface IProps {}

const PagePhone: FC<IProps> = () => {
    const [isShowModal, setIsShowModal] = useState<boolean>(false);
    const [params, setParams] = useSearchParams();
    const [request, setRequest] = useState<PhonesGetByPageRequest>({
        page: parseInt(params.get('page') as string) || 1,
        limit: parseInt(params.get('limit') as string) || 10
    });
    const { data, isLoading, isFetching } = usePhonesGetByPageQuery(request);

    useEffect(() => {
        setRequest({
            page: parseInt(params.get('page') as string) || 1,
            limit: parseInt(params.get('limit') as string) || 10
        });
    }, [params]);

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-end'>
                <Button
                    disabled={isLoading || isFetching}
                    type='button'
                    onClick={() => setIsShowModal(true)}
                    className='flex gap-1 items-center'
                >
                    <CIcon icon={cilPlus} style={{ width: '20px' }} />
                    Thêm loại hàng
                </Button>
                {/* {isShowModal && (
                    <Dialog title={'Thêm category'} setIsShowModal={setIsShowModal}>
                        <Phone afterCreate={handleAfterCreate} />
                    </Dialog>
                )} */}
            </div>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th className='border px-6 py-3 w-20 text-center'>Stt</th>
                        <th className='border text-left px-6 py-3'>Tên</th>
                        <th className='border text-left px-6 py-3'>Hãng</th>
                        <th className='border text-left px-6 py-3'>Giá</th>
                        <th className='border text-left px-6 py-3 w-20'>Màu sắc</th>
                        <th className='border text-left px-6 py-3 w-20'>Người tạo</th>
                        <th className='border text-left px-6 py-3 w-20'>Ngày tạo</th>
                    </tr>
                </thead>
                <tbody>
                    <>
                        {data?.result &&
                            data.result.map((phone, index) => (
                                <Fragment key={phone._id}>
                                    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                        <td className='border px-6 py-3 w-20 text-center'>{index + 1}</td>
                                        <td className='border px-6 py-3'>{phone.name}</td>
                                        <td className='border px-6 py-3'>{phone.categoryInfo.categoryName}</td>
                                        <td className='border px-6 py-3'>{dotAfter3Digits(phone.price)} đ</td>
                                        <td className='border px-6 py-3'>{phone.color}</td>
                                        <td className='border px-6 py-3 w-20'>{phone.createdByName}</td>
                                        <td className='border px-6 py-3 w-20'>
                                            {new DateObject({ date: phone.createdByDate }).format('DD/MM/YYYY')}
                                        </td>
                                    </tr>
                                </Fragment>
                            ))}
                    </>
                </tbody>
            </table>
        </div>
    );
};

export default withPermission<IProps>(PagePhone, [PERMISSION.Admin, PERMISSION.Category]);
