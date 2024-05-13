import React, { ComponentType } from 'react';
import { PERMISSION } from '~/constants/permission';
import { useAppSelector } from '~/hooks/hooks';

// Define the type for the props of the wrapped component
type WrappedComponentProps = {};

type PermissionType = Array<string>;

export const withPermission =
    <T extends WrappedComponentProps>(
        WrappedComponent: ComponentType<T>,
        permissionRequired?: PermissionType
    ): ComponentType<T> =>
    (props: T) => {
        const identity = useAppSelector((state) => state.identity.identity);
        let hasPermission = false;
        if (permissionRequired === undefined) {
            hasPermission = true;
        } else if (permissionRequired.length > 0) {
            const identityPermission = JSON.parse(identity.permission) as PermissionType;
            const isAdmin = identityPermission.some((val) => {
                return val === PERMISSION.Admin;
            });

            if (isAdmin) {
                hasPermission = true;
            } else {
                const checkPermission = permissionRequired.every((eachPermissionRequired) =>
                    identityPermission.some(
                        (eachIdentityPermission) => eachPermissionRequired === eachIdentityPermission
                    )
                );
                if (checkPermission) hasPermission = true;
            }
        }
        if (hasPermission) return <WrappedComponent {...props} />;
        else return <div>Bạn không có quyển truy cập vào trang web này!</div>;
    };
