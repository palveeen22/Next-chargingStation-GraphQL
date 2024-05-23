import { useEffect, useState, ReactNode } from "react";

interface TClientOnlyProps {
    children: ReactNode;
}

export default function ClientOnly({ children, ...delegated }: TClientOnlyProps) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div {...delegated}>{children}</div>;
}