import React, { memo, ReactNode, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import classNames from "classnames";
import "./Sidebar.scss";

export interface ISidebarProps {
    className?: string;
    children?: ReactNode;
    transition?: number;
    isActive?: boolean;
}

const SidebarComponent: React.FC<ISidebarProps> = ({
                                                       className,
                                                       children,
                                                       transition = 300,
                                                       isActive = false,
                                                   }) => {
    const nodeRef = useRef(null);

    return (
        <>
            <CSSTransition
                in={isActive}
                nodeRef={nodeRef}
                timeout={transition}
                unmountOnExit
            >
                <div className={classNames("Sidebar", className)} ref={nodeRef}>
                    {children}
                </div>
            </CSSTransition>
        </>
    );
};

export const Sidebar = memo(SidebarComponent);