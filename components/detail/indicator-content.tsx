import React, { FC } from 'react';

export interface IndicatorContentProps {
    title: string;
    icon: React.ReactNode;
    content: string;
}

const IndicatorContent: FC<IndicatorContentProps> = ({ title, icon, content }) => {
    return (
        <>
            <div className='text-center'>
                {icon}
            </div>
            <p className=' text-white text-xl mt-2'>{title}</p>
            <article className=' text-slate-500 text-sm mt-2 prose prose-invert'>
                <p>{content}</p>
            </article>
        </>
    );
};

export default IndicatorContent;
