import { FC } from "react";
import { useForm } from "react-hook-form";
import { PhonesFormDateInterface } from "~/models/Phones/PhonesInterface";
import { PhonesCreateRequest } from "~/models/Phones/PhonesRequest";
import { useCategoriesCreateMutation } from "~/services/categories";

interface IProps {
    afterCreate: () => void;
}

const CreateCategory: FC<IProps> = (props) => {
    // const { afterCreate } = props;

    // const [, ] = useCategoriesCreateMutation();
    // const {
    //     handleSubmit,
    //     register,
    //     formState: { errors }
    // } = useForm<PhonesCreateRequest>();

    // const onSubmit = (data: PhonesFormDateInterface) => {
    //     createCategory({
            
    //     }).then((response: any) => {
    //         console.log({ response });
    //         afterCreate();
    //     });
    // };

    return (
        <>
            {/* <form onSubmit={handleSubmit(onSubmit)}>
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
            </form> */}
        </>
    );
};

export default CreateCategory;
