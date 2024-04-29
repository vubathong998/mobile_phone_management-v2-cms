import React, { FC, ReactNode } from 'react';
import { PERMISSION } from '~/constants/permission';
import { useAppSelector } from '~/hooks/hooks';

// interface IProps {
//     children: ReactNode;
//     permission: Array<PERMISSION>;
// }

const WithPermission: (children: JSX.Element, permission: Array<PERMISSION>) => ReactNode = (children, permission) => {
    // const { permission, children } = props;
    const identity = useAppSelector((state) => state.identity.identity);
    let hasPermission = false;

    if (permission.length > 0) {
        for (let i = 0; i < permission.length; i++) {
            const item = permission[i];
            if (item === identity.permission || PERMISSION.Admin === identity.permission) {
                hasPermission = true;
                break;
            }
        }
    }
    if (hasPermission) return <>aaaa{children}</>;
    else return <>Bạn không có quyền được truy cập vào trang này!</>;
};

export default WithPermission;
