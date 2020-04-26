import { FunctionComponent } from 'react';
import { createPortal } from 'react-dom';

const DocumentHead: FunctionComponent = ({
    children
}) => {
    return createPortal(
        children,
        document.head
    );
}

DocumentHead.displayName = "DocumentHead";

export default DocumentHead;