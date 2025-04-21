import { ReactNode } from 'react';

type ConditionalWrapperProps = {
    condition: boolean;
    wrapper: (children: ReactNode) => ReactNode;
    children: ReactNode;
};

export default function ConditionalWrapper({
                                               condition,
                                               wrapper,
                                               children,
                                           }: ConditionalWrapperProps) {
    return <>{condition ? wrapper(children) : children}</>;
}
