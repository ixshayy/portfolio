import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="max-w-3xl mx-auto px-4">
            {children}
        </div>
    );
};

export default Layout; 