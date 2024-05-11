import { FC } from 'react';
import { UseFormRegister, UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
    size?: 'sm' | 'xl' | 'md';
    register?: UseFormRegisterReturn<any>;
}

const Input: FC<IProps & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (
    props
) => {
    const { size, register } = props;

    const sizeInput: Record<any, string> = {
        default: 'p-2.5',
        sm: 'p-2',
        xl: 'p-2.5',
        md: 'p-3'
    };
    console.log({ props });
    return (
        <input
            {...props}
            className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none ${size ? sizeInput[size] : sizeInput['default']} ${props.className}`}
            {...register}
        />
    );
};

export default Input;
