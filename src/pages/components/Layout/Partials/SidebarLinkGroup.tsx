//copied from theme
import { FC, ReactNode, useState } from 'react';

interface IProps {
    children: (handleClick: any, open: any) => ReactNode;
    activecondition?: boolean;
}

const SidebarLinkGroup: FC<IProps> = ({ children, activecondition }) => {
    const [open, setOpen] = useState(activecondition);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && 'bg-slate-900'}`}>
            {children(handleClick, open)}
        </li>
    );
};

export default SidebarLinkGroup;
