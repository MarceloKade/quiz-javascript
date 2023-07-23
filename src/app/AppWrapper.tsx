'use client'
import { ToggleColorProvider } from '@/hooks/context/useToggleColor';
import ToggleColorButton from '@/app/components/toggleColorButton/ToggleColorButton';

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ToggleColorProvider>
                <header>
                    <ToggleColorButton />
                </header>
                {children}
            </ToggleColorProvider>
        </>
    );
};

export default AppWrapper;