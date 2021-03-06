import React from 'react';
import styled from 'styled-components';

import TaskMarketLogo from '../images/task-market-logo.svg';
import TaskMarketHero from '../images/task-market-hero.svg';

const size = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
}
    
const device = Object.keys(size).reduce((acc, cur) => {
    acc[cur] = `(min-width: ${size[cur]}px)`;
    return acc;
}, {});

const Header = styled.div`
    & {
        width: 100%;
        background: linear-gradient(180deg, #0B3F9C 0%, #2E58DB 100%);
        display: flex;
        flex-direction: column;
        padding-top: 48px;
        padding-bottom: 64px;
    }
    svg {
        align-self: center;
        margin: auto;
    }
`

const TaskMarketTitle = styled.h1`
    & {
        font-family: Gilroy;
        font-style: normal;
        font-weight: bold;
        text-align: center;
        font-size: 32px;
        line-height: 32px;
        color: #FFFFFF;
        @media ${device.laptop} {
            font-size: 48px;
            line-height: 48px;
        }
    }
`

const TaskMarketParagaph = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    max-width: 744px;
    display: block;
    margin:auto;
`

const TaskMarketImageWrapper = styled.div`
    & {
        display: block;
        margin: auto;
        max-width: 100%;
    }
    svg {
        width: 80%;
        display: block;
        margin: auto;
        max-width: 100%;
        @media ${device.laptop} {
            width: 488px;
        }
    }
    
`


const TaskMarketHeader = () => (
    <Header>
        <TaskMarketImageWrapper>
            <TaskMarketLogo />
        </TaskMarketImageWrapper>
        <TaskMarketImageWrapper>
            <TaskMarketHero />
        </TaskMarketImageWrapper>
        <TaskMarketTitle>Task.Market is on break</TaskMarketTitle>
        <TaskMarketParagaph>
            Task.Market is on break due to the recent Gitcoin developments where a 10% fee 
            on ALL bounties has been introduced.  We believe this fee is extorniate and directly violates 
            everything that defines MyBit. 
        </TaskMarketParagaph>
    </Header>
);

export default TaskMarketHeader;