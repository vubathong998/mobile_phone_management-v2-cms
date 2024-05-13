import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { CategoriesFormDateInterface } from '~/models/Categories/CategoriesInterface';
import Button from '~/pages/components/UI/Button';
import Input from '~/pages/components/UI/Input';
import { useCategoriesCreateMutation } from '~/services/categories';

interface IProps {
    afterCreate: () => void;
}

const CreateCategory: FC<IProps> = (props) => {
    const { afterCreate } = props;

    const [createCategory, createCategoryState] = useCategoriesCreateMutation();
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<CategoriesFormDateInterface>();

    const onSubmit = (data: CategoriesFormDateInterface) => {
        console.log('createeee');
        const { categoryName } = data;
        createCategory({
            categoryName: categoryName
        }).then((response: any) => {
            console.log({ response });
            afterCreate();
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                        Tên loại hàng
                    </label>
                    <Input
                        // type='email'
                        // name='ca.categoryName'
                        // id='email'
                        autoFocus
                        className=''
                        placeholder='Nhập tên loại hàng'
                        // required=""
                        register={register('categoryName', {
                            required: {
                                message: 'Không được bỏ trống tên loại hàng',
                                value: true
                            }
                            // pattern: {
                            //     value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                            //     message: 'Bạn phải nhập email'
                            // }
                        })}
                    />
                    {errors.categoryName && <p className='text-sm text-red-500'>{errors.categoryName.message}</p>}
                </div>
                <Button
                    isLoading={createCategoryState.isLoading}
                    mainColor='primary'
                    type='submit'
                    children={'Thêm'}
                ></Button>
            </form>
        </>
    );
};

export default CreateCategory;
