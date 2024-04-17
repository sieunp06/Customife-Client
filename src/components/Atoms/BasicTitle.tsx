import { css } from '@emotion/react';
import React from 'react';

import { CenterComponent } from '../../styles';

interface BasicTitleProps {
    size: '1' | '2' | '3';
    title: string;
}

const TitleSizes = {
    '1': '32px',
    '2': '28px',
    '3': '24px',
};

export const BasicTitle = ({ size, title }: BasicTitleProps) => {
    const TitleSizeStyle = css`
        font-size: ${TitleSizes[size]};
    `;

    return <h1 css={[CenterComponent, TitleSizeStyle]}>{title}</h1>;
};
